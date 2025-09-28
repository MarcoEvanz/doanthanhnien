import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import User, { IUser } from '@/models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'

export interface AuthenticatedRequest extends NextRequest {
  user?: IUser
}

export async function verifyToken(token: string) {
  const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string; role: string }
  return decoded
}

export async function getAuthenticatedUser(request: NextRequest): Promise<IUser | null> {
  try {
    // Try to get token from cookie first, then from Authorization header
    let token = request.cookies.get('auth-token')?.value
    
    if (!token) {
      const authHeader = request.headers.get('authorization')
      if (authHeader?.startsWith('Bearer ')) {
        token = authHeader.substring(7)
      }
    }

    if (!token) {
      return null
    }

    const decoded = await verifyToken(token)
    
    await connectToDatabase()
    const user = await User.findById(decoded.userId)
    
    return user
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

export function requireAuth(handler: (request: AuthenticatedRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const user = await getAuthenticatedUser(request)
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Vui lòng đăng nhập để tiếp tục' }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const authenticatedRequest = request as AuthenticatedRequest
    authenticatedRequest.user = user
    
    return handler(authenticatedRequest)
  }
}

export function requireAdmin(handler: (request: AuthenticatedRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const user = await getAuthenticatedUser(request)
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Vui lòng đăng nhập để tiếp tục' }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    if (user.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Bạn không có quyền truy cập' }),
        { 
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const authenticatedRequest = request as AuthenticatedRequest
    authenticatedRequest.user = user
    
    return handler(authenticatedRequest)
  }
}
