import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Về chúng tôi</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              Website sản phẩm địa phương xã Thành phú, được quản lý bởi Đoàn Thanh niên xã với mục tiêu kết nối và quảng bá sản phẩm địa phương.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">TP</span>
              </div>
              <span className="text-xs sm:text-sm">Đoàn Thanh niên xã Thành phú</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liên kết nhanh</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/gioi-thieu" className="text-gray-300 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-300 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="text-gray-300 hover:text-white transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/san-pham?category=nong-san" className="text-gray-300 hover:text-white transition-colors">
                  Nông sản
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=thu-cong" className="text-gray-300 hover:text-white transition-colors">
                  Thủ công mỹ nghệ
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=dac-san" className="text-gray-300 hover:text-white transition-colors">
                  Đặc sản địa phương
                </Link>
              </li>
              <li>
                <Link href="/san-pham?category=dich-vu" className="text-gray-300 hover:text-white transition-colors">
                  Dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Thông tin liên hệ</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <p>📍 Xã Thành phú, Huyện ..., Tỉnh ...</p>
              <p>📞 Điện thoại: 0123.456.789</p>
              <p>✉️ Email: doanthanhnien@thanhphu.vn</p>
              <p>👤 Phụ trách: Võ Mạnh Lực</p>
            </div>
            <div className="mt-3 sm:mt-4">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Kết nối với chúng tôi</h4>
              <div className="flex flex-wrap gap-2">
                <button className="bg-sky-400 hover:bg-sky-500 px-3 py-1 sm:p-2 rounded transition-colors text-xs sm:text-sm">
                  Facebook
                </button>
                <button className="bg-green-600 hover:bg-green-700 p-2 rounded transition-colors">
                  Zalo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Sản phẩm Thành phú. Được quản lý bởi Đoàn Thanh niên xã Thành phú.</p>
          <p className="mt-2">Website phát triển nhằm kết nối và quảng bá sản phẩm địa phương</p>
        </div>
      </div>
    </footer>
  );
}
