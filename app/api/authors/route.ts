import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/authors - Get all authors
export async function GET() {
  try {
    const authors = await prisma.author.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { books: true },
        },
      },
    });

    return NextResponse.json(authors);
  } catch (error) {
    console.error('Error fetching authors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch authors' },
      { status: 500 }
    );
  }
}

// POST /api/authors - Create a new author
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, profileImageUrl, biography, birthYear } = body;

    if (!id || !name) {
      return NextResponse.json(
        { error: 'ID and name are required' },
        { status: 400 }
      );
    }

    const author = await prisma.author.create({
      data: {
        id,
        name,
        profileImageUrl: profileImageUrl || null,
        biography: biography || null,
        birthYear: birthYear ? parseInt(birthYear) : null,
      },
    });

    return NextResponse.json(author, { status: 201 });
  } catch (error: any) {
    console.error('Error creating author:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Author with this ID already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create author' },
      { status: 500 }
    );
  }
}
