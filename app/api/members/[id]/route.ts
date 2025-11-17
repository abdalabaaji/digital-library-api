import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/members/:id - Get member by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const member = await prisma.member.findUnique({
      where: { id: params.id },
      include: {
        transactions: {
          include: {
            book: true,
          },
          orderBy: { borrowDate: 'desc' },
        },
        _count: {
          select: { transactions: true },
        },
      },
    });

    if (!member) {
      return NextResponse.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    return NextResponse.json(
      { error: 'Failed to fetch member' },
      { status: 500 }
    );
  }
}

// PUT /api/members/:id - Update member
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, email, phone, memberType, memberSince, profileImageUrl } = body;

    if (!name || !email || !memberType) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, memberType' },
        { status: 400 }
      );
    }

    const member = await prisma.member.update({
      where: { id: params.id },
      data: {
        name,
        email,
        phone: phone || '',
        memberType,
        memberSince: memberSince ? new Date(memberSince) : undefined,
        profileImageUrl: profileImageUrl || null,
      },
    });

    return NextResponse.json(member);
  } catch (error: any) {
    console.error('Error updating member:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update member' },
      { status: 500 }
    );
  }
}

// DELETE /api/members/:id - Delete member
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.member.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Member deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting member:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete member' },
      { status: 500 }
    );
  }
}
