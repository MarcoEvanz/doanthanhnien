import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white py-20 lg:py-32">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-32 left-32 w-12 h-12 bg-green-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-red-200 rounded-full opacity-50"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-32 right-32 w-14 h-14 bg-purple-200 rounded-full opacity-40"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    SẢN XUẤT, KINH DOANH VÀ CHẾ BIẾN CÁC SẢN PHẨM TỪ NGUYÊN LIỆU ĐỊA PHƯƠNG
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  HỆ SINH THÁI SẢN PHẨM
                  <span className="block text-blue-600">THÀNH PHÚ</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Kết nối bà con nông dân với thị trường, mang đến những sản phẩm chất lượng cao từ vùng đất Thành phú
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  KHÁM PHÁ NGAY
                </button>

                {/* Feature highlights */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Giao hàng miễn phí</h3>
                      <p className="text-sm text-gray-600">Với đơn hàng từ 500k</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥘</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">-20% Thực đơn đặc biệt</h3>
                      <p className="text-sm text-gray-600">Cho khách hàng thân thiết</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl overflow-hidden">
                  {/* Placeholder for main product image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-6xl">🍲</span>
                    </div>
                  </div>
                  
                  {/* Floating ingredients */}
                  <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                    <span className="text-2xl">🥬</span>
                  </div>
                  <div className="absolute top-20 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed">
                    <span className="text-xl">🍅</span>
                  </div>
                  <div className="absolute bottom-20 left-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                    <span className="text-lg">🧄</span>
                  </div>
                  <div className="absolute bottom-32 right-20 w-18 h-18 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-delayed">
                    <span className="text-2xl">🦐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Danh mục sản phẩm nổi bật
              </h2>
              <p className="text-xl text-gray-600">
                Khám phá các sản phẩm chất lượng từ địa phương
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🌾</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nông sản</h3>
                  <p className="text-gray-600 text-sm">Gạo, rau củ, trái cây sạch</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thủ công mỹ nghệ</h3>
                  <p className="text-gray-600 text-sm">Đan lát, thêu ren, gỗ tre</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Đặc sản</h3>
                  <p className="text-gray-600 text-sm">Bánh kẹo, gia vị truyền thống</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🛎️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dịch vụ</h3>
                  <p className="text-gray-600 text-sm">Du lịch, ăn uống, lưu trú</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sản phẩm được yêu thích nhất
              </h2>
              <p className="text-xl text-gray-600">
                Những sản phẩm chất lượng cao được khách hàng tin tưởng
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-6xl">🌾</span>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Mới
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gạo thơm đặc sản</h3>
                  <p className="text-gray-600 text-sm mb-4">Gạo thơm sạch từ ruộng lúa địa phương, hạt dẻo thơm</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-blue-600">150,000₫</span>
                      <span className="text-gray-500">/kg</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-6xl">🥖</span>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -20%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bánh tráng nướng</h3>
                  <p className="text-gray-600 text-sm mb-4">Bánh tráng truyền thống làm thủ công, thơm ngon</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">80,000₫</span>
                      <span className="text-gray-400 line-through text-sm">100,000₫</span>
                      <span className="text-gray-500">/kg</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <span className="text-6xl">🍯</span>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Hết hàng
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mật ong nguyên chất</h3>
                  <p className="text-gray-600 text-sm mb-4">Mật ong rừng nguyên chất, bổ dưỡng cao</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-blue-600">300,000₫</span>
                      <span className="text-gray-500">/lít</span>
                    </div>
                    <button className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg font-medium cursor-not-allowed">
                      Hết hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/san-pham"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Xem tất cả sản phẩm
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
