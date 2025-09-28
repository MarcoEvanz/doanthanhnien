import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <p className="text-gray-300 text-sm mb-4">
              Website sản phẩm địa phương xã Thành phú, được quản lý bởi Đoàn Thanh niên xã với mục tiêu kết nối và quảng bá sản phẩm địa phương.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TP</span>
              </div>
              <span className="text-sm">Đoàn Thanh niên xã Thành phú</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="text-lg font-semibold mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-2 text-sm">
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Xã Thành phú, Huyện ..., Tỉnh ...</p>
              <p>📞 Điện thoại: 0123.456.789</p>
              <p>✉️ Email: doanthanhnien@thanhphu.vn</p>
              <p>👤 Phụ trách: Võ Mạnh Lực</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Kết nối với chúng tôi</h4>
              <div className="flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition-colors">
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
