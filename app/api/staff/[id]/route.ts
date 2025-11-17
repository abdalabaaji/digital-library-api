import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/staff/:id - Get staff by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const staff = await prisma.staff.findUnique({
      where: { staffId: params.id },
    });

    if (!staff) {
      return NextResponse.json(
        { error: 'Staff not found' },
        { status: 404 }
      );
    }

    // Remove password from response
    const { password, ...staffWithoutPassword } = staff;

    return NextResponse.json(staffWithoutPassword);
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
      { status: 500 }
    );
  }
}

// PUT /api/staff/:id - Update staff
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { username, password, fullName, role } = body;

    if (!username || !fullName || !role) {
      return NextResponse.json(
        { error: 'Missing required fields: username, fullName, role' },
        { status: 400 }
      );
    }

    const updateData: any = {
      username,
      fullName,
      role,
    };

    // Only update password if provided
    if (password) {
      updateData.password = password; // Note: In production, hash this!
    }

    const staff = await prisma.staff.update({
      where: { staffId: params.id },
      data: updateData,
    });

    // Remove password from response
    const { password: _, ...staffWithoutPassword } = staff;

    return NextResponse.json(staffWithoutPassword);
  } catch (error: any) {
    console.error('Error updating staff:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Staff not found' },
        { status: 404 }
      );
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Username already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update staff' },
      { status: 500 }
    );
  }
}

// DELETE /api/staff/:id - Delete staff
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.staff.delete({
      where: { staffId: params.id },
    });

    return NextResponse.json({ message: 'Staff deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting staff:', error);
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Staff not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete staff' },
      { status: 500 }
    );
  }
}
