import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/authors/:id - Get author by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const author = await prisma.author.findUnique({
      where: { id },
      include: {
        books: true,
        _count: {
          select: { books: true },
        },
      },
    });

    if (!author) {
      return NextResponse.json(
        { error: 'Author not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(author);
  } catch (error) {
    console.error('Error fetching author:', error);
    return NextResponse.json(
      { error: 'Failed to fetch author' },
      { status: 500 }
    );
  }
}

// PUT /api/authors/:id - Update author
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, profileImageUrl, biography, birthYear } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const author = await prisma.author.update({
      where: { id },
      data: {
        name,
        profileImageUrl: profileImageUrl || null,
        biography: biography || null,
        birthYear: birthYear ? parseInt(birthYear) : null,
      },
    });

    return NextResponse.json(author);
  } catch (error: any) {
    console.error('Error updating author:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Author not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update author' },
      { status: 500 }
    );
  }
}

// DELETE /api/authors/:id - Delete author
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.author.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Author deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting author:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Author not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete author' },
      { status: 500 }
    );
  }
}
