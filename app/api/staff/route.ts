import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/staff - Get all staff
export async function GET() {
  try {
    const staff = await prisma.staff.findMany({
      orderBy: { fullName: 'asc' },
    });

    // Remove password from response
    const staffWithoutPassword = staff.map(({ password, ...rest }) => rest);

    return NextResponse.json(staffWithoutPassword);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
      { status: 500 }
    );
  }
}

// POST /api/staff - Create a new staff member
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { staffId, username, password, fullName, role } = body;

    if (!staffId || !username || !password || !fullName || !role) {
      return NextResponse.json(
        { error: 'Missing required fields: staffId, username, password, fullName, role' },
        { status: 400 }
      );
    }

    const staff = await prisma.staff.create({
      data: {
        staffId,
        username,
        password, // Note: In production, hash this!
        fullName,
        role,
      },
    });

    // Remove password from response
    const { password: _, ...staffWithoutPassword } = staff;

    return NextResponse.json(staffWithoutPassword, { status: 201 });
  } catch (error: any) {
    console.error('Error creating staff:', error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Staff with this ID or username already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create staff' },
      { status: 500 }
    );
  }
}
