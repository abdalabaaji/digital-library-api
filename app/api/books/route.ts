import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/books - Get all books or filter by authorId
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const authorId = searchParams.get('authorId');

    const where = authorId ? { authorId } : {};

    const books = await prisma.book.findMany({
      where,
      include: {
        author: true,
      },
      orderBy: { title: 'asc' },
    });

    return NextResponse.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}

// POST /api/books - Create a new book
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
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

    if (!id || !title || !authorId || !publishedYear || !category || !isbn || !publisher || pageCount === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: id, title, authorId, publishedYear, category, isbn, publisher, pageCount' },
        { status: 400 }
      );
    }

    // Verify author exists
    const author = await prisma.author.findUnique({
      where: { id: authorId },
    });

    if (!author) {
      return NextResponse.json(
        { error: 'Author not found' },
        { status: 404 }
      );
    }

    const book = await prisma.book.create({
      data: {
        id,
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

    return NextResponse.json(book, { status: 201 });
  } catch (error: any) {
    console.error('Error creating book:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Book with this ID or ISBN already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    );
  }
}
