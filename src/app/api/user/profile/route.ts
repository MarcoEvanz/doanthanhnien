import { NextResponse } from 'next/server'
import { requireAuth, AuthenticatedRequest } from '@/lib/auth'

async function getProfile(request: AuthenticatedRequest) {
  try {
    const user = request.user

    return NextResponse.json(
      { 
        message: 'Lấy thông tin người dùng thành công',
        user: user?.toJSON()
      },
      { status: 200 }
    )

  } catch (error: unknown) {
    console.error('Get profile error:', error)
    return NextResponse.json(
      { error: 'Có lỗi xảy ra, vui lòng thử lại' },
      { status: 500 }
    )
  }
}

async function updateProfile(request: AuthenticatedRequest) {
  try {
    const user = request.user
    if (!user) {
      return NextResponse.json(
        { error: 'Không tìm thấy người dùng' },
        { status: 404 }
      )
    }

    const { name, phone, address } = await request.json()

    // Update user fields
    if (name) user.name = name
    if (phone !== undefined) user.phone = phone
    if (address !== undefined) user.address = address

    await user.save()

    return NextResponse.json(
      { 
        message: 'Cập nhật thông tin thành công',
        user: user.toJSON()
      },
      { status: 200 }
    )

  } catch (error: unknown) {
    console.error('Update profile error:', error)
    
    if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError' && 'errors' in error) {
      const messages = Object.values(error.errors as Record<string, { message: string }>).map((err) => err.message)
      return NextResponse.json(
        { error: messages.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Có lỗi xảy ra, vui lòng thử lại' },
      { status: 500 }
    )
  }
}

export const GET = requireAuth(getProfile)
export const PUT = requireAuth(updateProfile)
