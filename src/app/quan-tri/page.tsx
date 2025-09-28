'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/dang-nhap')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    )
  }

  if (!user || user.role !== 'admin') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            🏛️ Bảng điều khiển quản trị
          </h1>
          <p className="mt-2 text-gray-600">
            Chào mừng <span className="font-semibold text-blue-600">{user.name}</span> đến với trang quản trị Sản phẩm Thành phú
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📦</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tổng sản phẩm</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600">+3 mới hôm nay</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">💰</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Doanh thu tháng</p>
                <p className="text-2xl font-bold text-gray-900">12.5M</p>
                <p className="text-xs text-green-600">+15% so với tháng trước</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">👥</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Khách hàng</p>
                <p className="text-2xl font-bold text-gray-900">158</p>
                <p className="text-xs text-blue-600">+8 tài khoản mới</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Đơn hàng mới</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-orange-600">Cần xử lý</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600 text-sm">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Quản lý sản phẩm</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 text-sm bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200">
                ➕ Thêm sản phẩm mới
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                📋 Danh sách sản phẩm
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                🏷️ Quản lý danh mục
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600 text-sm">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Quản lý đơn hàng</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 text-sm bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200">
                🆕 Đơn hàng mới (12)
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                📦 Tất cả đơn hàng
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                📈 Báo cáo doanh thu
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-purple-600 text-sm">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Quản lý người dùng</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 text-sm bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200">
                👤 Danh sách khách hàng
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                🔧 Quản lý admin
              </button>
              <button className="w-full text-left px-4 py-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                ⚙️ Cài đặt hệ thống
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Hoạt động gần đây</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Sản phẩm &ldquo;Gạo ST25 cao cấp&rdquo; đã được thêm vào hệ thống</p>
                <p className="text-xs text-gray-500">2 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Đơn hàng #TP001 đã được xác nhận và đang chuẩn bị</p>
                <p className="text-xs text-gray-500">4 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Khách hàng mới &ldquo;Nguyễn Văn A&rdquo; đã đăng ký tài khoản</p>
                <p className="text-xs text-gray-500">1 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
