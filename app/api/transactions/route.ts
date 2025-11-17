import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/transactions - Get all transactions or filter by memberId/bookId
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const memberId = searchParams.get('memberId');
    const bookId = searchParams.get('bookId');

    const where: any = {};
    if (memberId) where.memberId = memberId;
    if (bookId) where.bookId = bookId;

    const transactions = await prisma.transaction.findMany({
      where,
      include: {
        member: true,
        book: {
          include: {
            author: true,
          },
        },
      },
      orderBy: { borrowDate: 'desc' },
    });

    return NextResponse.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}

// POST /api/transactions - Create a new transaction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, memberId, bookId, borrowDate, dueDate, returnDate, isReturned } = body;

    if (!id || !memberId || !bookId || !borrowDate || !dueDate) {
      return NextResponse.json(
        { error: 'Missing required fields: id, memberId, bookId, borrowDate, dueDate' },
        { status: 400 }
      );
    }

    // Verify member exists
    const member = await prisma.member.findUnique({
      where: { id: memberId },
    });

    if (!member) {
      return NextResponse.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }

    // Verify book exists
    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    const transaction = await prisma.transaction.create({
      data: {
        id,
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

    // Update book availability if borrowed
    if (!isReturned) {
      await prisma.book.update({
        where: { id: bookId },
        data: { isAvailable: false },
      });
    }

    return NextResponse.json(transaction, { status: 201 });
  } catch (error: any) {
    console.error('Error creating transaction:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Transaction with this ID already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create transaction' },
      { status: 500 }
    );
  }
}
