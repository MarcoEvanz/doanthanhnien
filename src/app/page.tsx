import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 to-white py-8 sm:py-12 lg:py-32">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-8 h-8 sm:w-20 sm:h-20 bg-sky-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-16 left-16 sm:top-32 sm:left-32 w-6 h-6 sm:w-12 sm:h-12 bg-cyan-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-10 left-8 sm:bottom-20 sm:left-20 w-8 h-8 sm:w-16 sm:h-16 bg-red-200 rounded-full opacity-50"></div>
          <div className="absolute top-8 right-8 sm:top-20 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-16 right-16 sm:bottom-32 sm:right-32 w-7 h-7 sm:w-14 sm:h-14 bg-purple-200 rounded-full opacity-40"></div>
          
          <div className="container mx-auto px-2 sm:px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-sky-100 text-sky-700 rounded-full text-xs sm:text-sm font-medium mb-4 leading-tight">
                    SẢN XUẤT, KINH DOANH VÀ CHẾ BIẾN CÁC SẢN PHẨM TỪ NGUYÊN LIỆU ĐỊA PHƯƠNG
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  HỆ SINH THÁI SẢN PHẨM
                  <span className="block text-sky-500">THÀNH PHÚ</span>
                </h1>
                <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Kết nối bà con nông dân với thị trường, mang đến những sản phẩm chất lượng cao từ vùng đất Thành phú
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                  KHÁM PHÁ NGAY
                </button>

                {/* Feature highlights */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg sm:text-2xl">🚚</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Giao hàng miễn phí</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Với đơn hàng từ 500k</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg sm:text-2xl">🥘</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">-20% Thực đơn đặc biệt</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Cho khách hàng thân thiết</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full h-64 sm:h-80 lg:h-[500px] bg-gradient-to-br from-green-50 to-sky-50 rounded-2xl sm:rounded-3xl overflow-hidden">
                  {/* Main product showcase */}
                  <div className="absolute inset-4 sm:inset-8">
                    <Image 
                      src="/images/products/nong-san/gaothomdacsan.png"
                      alt="Gạo thơm đặc sản Thành Phú"
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Floating product previews */}
                  <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg overflow-hidden animate-float border-2 border-sky-200">
                    <Image 
                      src="/images/products/nong-san/rausachhuuco.png"
                      alt="Rau sạch hữu cơ"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-8 right-4 sm:top-20 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg overflow-hidden animate-float-delayed border-2 border-sky-200">
                    <Image 
                      src="/images/products/thu-cong-my-nghe/thungtredantay.png"
                      alt="Thúng tre đan tay"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-8 left-6 sm:bottom-20 sm:left-16 w-8 h-8 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg overflow-hidden animate-float border-2 border-sky-200">
                    <Image 
                      src="/images/products/dac-san/banhtrangnuong.png"
                      alt="Bánh tráng nướng"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-12 right-8 sm:bottom-32 sm:right-20 w-11 h-11 sm:w-18 sm:h-18 bg-white rounded-full shadow-lg overflow-hidden animate-float-delayed border-2 border-sky-200">
                    <Image 
                      src="/images/products/dac-san/matongnguyenchat.png"
                      alt="Mật ong nguyên chất"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 sm:py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Danh mục sản phẩm nổi bật
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                Khám phá các sản phẩm chất lượng từ địa phương
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-200 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/categories/nongsan.png"
                      alt="Nông sản"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Nông sản</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Gạo, rau củ, trái cây sạch</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-200 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/categories/thucongmynghe.png"
                      alt="Thủ công mỹ nghệ"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Thủ công mỹ nghệ</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Đan lát, thêu ren, gỗ tre</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-200 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/categories/dacsan.png"
                      alt="Đặc sản"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Đặc sản</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Bánh kẹo, gia vị truyền thống</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-sky-50 to-cyan-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-sky-200 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/categories/dichvu.png"
                      alt="Dịch vụ"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Dịch vụ</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Du lịch, ăn uống, lưu trú</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
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
                <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100">
                  <Image 
                    src="/images/products/nong-san/gaothomdacsan.png"
                    alt="Gạo thơm đặc sản Thành Phú"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Mới
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gạo thơm đặc sản</h3>
                  <p className="text-gray-600 text-sm mb-4">Gạo thơm sạch từ ruộng lúa địa phương, hạt dẻo thơm</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-sky-600">150,000₫</span>
                      <span className="text-gray-500">/kg</span>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gradient-to-br from-orange-50 to-orange-100">
                  <Image 
                    src="/images/products/dac-san/banhtrangnuong.png"
                    alt="Bánh tráng nướng Thành Phú"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -20%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bánh tráng nướng</h3>
                  <p className="text-gray-600 text-sm mb-4">Bánh tráng truyền thống làm thủ công, thơm ngon</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-sky-600">80,000₫</span>
                      <span className="text-gray-400 line-through text-sm">100,000₫</span>
                      <span className="text-gray-500">/kg</span>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gradient-to-br from-yellow-50 to-yellow-100">
                  <Image 
                    src="/images/products/dac-san/matongnguyenchat.png"
                    alt="Mật ong nguyên chất Thành Phú"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bán chạy
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mật ong nguyên chất</h3>
                  <p className="text-gray-600 text-sm mb-4">Mật ong rừng nguyên chất, bổ dưỡng cao</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-sky-600">300,000₫</span>
                      <span className="text-gray-500">/lít</span>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Mua ngay
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
