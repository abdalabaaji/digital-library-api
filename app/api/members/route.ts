import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/members - Get all members
export async function GET() {
  try {
    const members = await prisma.member.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { transactions: true },
        },
      },
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

// POST /api/members - Create a new member
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, email, phone, memberType, memberSince, profileImageUrl } = body;

    if (!id || !name || !email || !memberType) {
      return NextResponse.json(
        { error: 'Missing required fields: id, name, email, memberType' },
        { status: 400 }
      );
    }

    const member = await prisma.member.create({
      data: {
        id,
        name,
        email,
        phone: phone || '',
        memberType,
        memberSince: memberSince ? new Date(memberSince) : new Date(),
        profileImageUrl: profileImageUrl || null,
      },
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error: any) {
    console.error('Error creating member:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Member with this ID or email already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create member' },
      { status: 500 }
    );
  }
}
