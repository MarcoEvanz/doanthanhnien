import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()
    
    const { secret } = await request.json()

    // Simple security check
    if (secret !== 'create-admin-thanhphu-2024') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' })
    if (existingAdmin) {
      return NextResponse.json(
        { 
          message: 'Admin user already exists',
          admin: {
            email: existingAdmin.email,
            name: existingAdmin.name,
            role: existingAdmin.role
          }
        },
        { status: 200 }
      )
    }

    // Create admin user
    const admin = new User({
      name: 'Quản trị viên Thành phú',
      email: 'admin@sanphamthanhphu.vn',
      password: 'admin123456',
      role: 'admin',
      phone: '0123456789',
      address: 'Xã Thành phú, Đức Trọng, Lâm Đồng',
      isEmailVerified: true
    })

    await admin.save()

    return NextResponse.json(
      { 
        message: 'Admin user created successfully',
        admin: {
          email: 'admin@sanphamthanhphu.vn',
          password: 'admin123456',
          name: admin.name,
          role: admin.role
        }
      },
      { status: 201 }
    )

  } catch (error: unknown) {
    console.error('Create admin error:', error)
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    )
  }
}
