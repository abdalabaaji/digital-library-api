import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/books/:id - Get book by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const book = await prisma.book.findUnique({
      where: { id: id },
      include: {
        author: true,
        transactions: {
          include: {
            member: true,
          },
        },
      },
    });

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json(
      { error: 'Failed to fetch book' },
      { status: 500 }
    );
  }
}

// PUT /api/books/:id - Update book
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const {
      title,
      authorId,
      publishedYear,
      category,
      isAvailable,
      coverImageUrl,
      description,
      pageCount,
      isbn,
      publisher,
    } = body;

    if (!title || !authorId || !publishedYear || !category || !isbn || !publisher || pageCount === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify author exists if authorId is being changed
    if (authorId) {
      const author = await prisma.author.findUnique({
        where: { id: authorId },
      });

      if (!author) {
        return NextResponse.json(
          { error: 'Author not found' },
          { status: 404 }
        );
      }
    }

    const book = await prisma.book.update({
      where: { id: id },
      data: {
        title,
        authorId,
        publishedYear: parseInt(publishedYear),
        category,
        isAvailable: isAvailable ?? true,
        coverImageUrl: coverImageUrl || null,
        description: description || null,
        pageCount: parseInt(pageCount),
        isbn,
        publisher,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json(book);
  } catch (error: any) {
    console.error('Error updating book:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'ISBN already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update book' },
      { status: 500 }
    );
  }
}

// DELETE /api/books/:id - Delete book
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.book.delete({
      where: { id: id },
    });

    return NextResponse.json({ message: 'Book deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting book:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete book' },
      { status: 500 }
    );
  }
}
