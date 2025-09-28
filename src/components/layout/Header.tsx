'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-blue-700 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📞 Liên hệ: 0123.456.789</span>
            <span>✉️ Email: doanthanhnien@thanhphu.vn</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Chào mừng đến với sản phẩm Thành phú!</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">TP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Sản phẩm Thành phú</h1>
              <p className="text-blue-200 text-sm">Đoàn Thanh niên xã</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 pr-10 rounded-lg text-gray-800 bg-white border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-blue-500 rounded-lg transition-colors">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="hidden md:block text-white text-sm">
                  Xin chào, {user.name}
                </span>
                {user.role === 'admin' && (
                  <Link 
                    href="/quan-tri"
                    className="px-3 py-1 text-sm bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/dang-nhap"
                  className="px-3 py-1 text-sm bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link 
                  href="/dang-ky"
                  className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-400 rounded-lg transition-colors"
                >
                  Đăng ký
                </Link>
              </div>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <Link href="/" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/gioi-thieu" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link href="/san-pham" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link href="/tin-tuc" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Tin tức
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link href="/admin" className="block py-2 px-3 hover:bg-blue-500 rounded-lg transition-colors">
                Quản trị
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full px-4 py-2 pr-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>
      </div>
    </header>
  );
}
