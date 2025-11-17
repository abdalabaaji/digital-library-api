import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/transactions/:id - Get transaction by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: params.id },
      include: {
        member: true,
        book: {
          include: {
            author: true,
          },
        },
      },
    });

    if (!transaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(transaction);
  } catch (error) {
    console.error('Error fetching transaction:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transaction' },
      { status: 500 }
    );
  }
}

// PUT /api/transactions/:id - Update transaction
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { memberId, bookId, borrowDate, dueDate, returnDate, isReturned } = body;

    if (!memberId || !bookId || !borrowDate || !dueDate) {
      return NextResponse.json(
        { error: 'Missing required fields: memberId, bookId, borrowDate, dueDate' },
        { status: 400 }
      );
    }

    // Get current transaction
    const currentTransaction = await prisma.transaction.findUnique({
      where: { id: params.id },
    });

    if (!currentTransaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    const transaction = await prisma.transaction.update({
      where: { id: params.id },
      data: {
        memberId,
        bookId,
        borrowDate: new Date(borrowDate),
        dueDate: new Date(dueDate),
        returnDate: returnDate ? new Date(returnDate) : null,
        isReturned: isReturned ?? false,
      },
      include: {
        member: true,
        book: {
          include: {
            author: true,
          },
        },
      },
    });

    // Update book availability if return status changed
    if (isReturned && !currentTransaction.isReturned) {
      await prisma.book.update({
        where: { id: bookId },
        data: { isAvailable: true },
      });
    } else if (!isReturned && currentTransaction.isReturned) {
      await prisma.book.update({
        where: { id: bookId },
        data: { isAvailable: false },
      });
    }

    return NextResponse.json(transaction);
  } catch (error: any) {
    console.error('Error updating transaction:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update transaction' },
      { status: 500 }
    );
  }
}

// DELETE /api/transactions/:id - Delete transaction
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: params.id },
    });

    if (!transaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    await prisma.transaction.delete({
      where: { id: params.id },
    });

    // If transaction was not returned, make book available again
    if (!transaction.isReturned) {
      await prisma.book.update({
        where: { id: transaction.bookId },
        data: { isAvailable: true },
      });
    }

    return NextResponse.json({ message: 'Transaction deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting transaction:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete transaction' },
      { status: 500 }
    );
  }
}
