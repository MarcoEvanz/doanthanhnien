export default function GioiThieu() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Giới thiệu về Đoàn Thanh niên xã Thành phú
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Đơn vị tiên phong trong việc kết nối, hỗ trợ và quảng bá sản phẩm địa phương
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Về xã Thành phú
                </h2>
                <p className="text-gray-600 mb-4">
                  Xã Thành phú là một trong những xã phát triển của huyện, với truyền thống 
                  nông nghiệp lâu đời và nhiều sản phẩm địa phương đặc sắc. Với vị trí thuận 
                  lợi và tài nguyên phong phú, xã chúng tôi đang từng bước xây dựng thương 
                  hiệu sản phẩm địa phương.
                </p>
                <p className="text-gray-600 mb-4">
                  Người dân nơi đây chủ yếu làm nông nghiệp, trồng lúa, rau màu và chăn nuôi. 
                  Ngoài ra, nhiều hộ gia đình còn có nghề thủ công truyền thống như đan lát, 
                  làm bánh kẹo địa phương.
                </p>
                <p className="text-gray-600">
                  Với tinh thần đoàn kết, tương trợ, bà con nông dân luôn sẵn sàng chia sẻ 
                  kinh nghiệm và cùng nhau phát triển kinh tế gia đình.
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Hình ảnh xã Thành phú</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center order-2 lg:order-1">
                <span className="text-gray-500 text-lg">Hoạt động Đoàn Thanh niên</span>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Đoàn Thanh niên xã Thành phú
                </h2>
                <p className="text-gray-600 mb-4">
                  Đoàn Thanh niên xã Thành phú được thành lập từ những năm đầu, với sứ mệnh 
                  đoàn kết thanh niên, tham gia xây dựng quê hương. Qua nhiều năm hoạt động, 
                  Đoàn đã trở thành lực lượng tiên phong trong nhiều phong trào.
                </p>
                <p className="text-gray-600 mb-4">
                  Hiện tại, Đoàn có <strong>150 đoàn viên</strong> tích cực tham gia các hoạt động 
                  xã hội, từ thiện và phát triển kinh tế. Chúng tôi luôn đi đầu trong việc ứng 
                  dụng công nghệ, hỗ trợ bà con tiếp cận thị trường.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">150+</div>
                    <div className="text-sm text-gray-600">Đoàn viên</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Hộ kinh doanh</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Sản phẩm</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">5+</div>
                    <div className="text-sm text-gray-600">Năm hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Sứ mệnh & Tầm nhìn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sứ mệnh</h3>
                <p className="text-gray-600">
                  Kết nối, hỗ trợ và quảng bá sản phẩm địa phương, tạo cơ hội việc làm 
                  và nâng cao thu nhập cho bà con nông dân.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Tầm nhìn</h3>
                <p className="text-gray-600">
                  Trở thành đơn vị tiên phong trong phát triển thương mại điện tử nông thon, 
                  đưa sản phẩm Thành phú ra thị trường rộng lớn.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Giá trị cốt lõi</h3>
                <p className="text-gray-600">
                  Chất lượng - Uy tín - Tương trợ. Luôn đảm bảo sản phẩm chất lượng cao, 
                  xây dựng lòng tin với khách hàng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Thông tin liên hệ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Đoàn Thanh niên xã Thành phú</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-4">📍</span>
                      <div>
                        <div className="font-medium">Địa chỉ</div>
                        <div className="text-gray-600">Xã Thành phú, Huyện ..., Tỉnh ...</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-4">📞</span>
                      <div>
                        <div className="font-medium">Điện thoại</div>
                        <div className="text-gray-600">0123.456.789</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-4">✉️</span>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-gray-600">doanthanhnien@thanhphu.vn</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mr-4">👤</span>
                      <div>
                        <div className="font-medium">Phụ trách nội dung</div>
                        <div className="text-gray-600">Võ Mạnh Lực</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-lg mb-2">🗺️</div>
                    <div>Bản đồ xã Thành phú</div>
                    <div className="text-sm mt-2">(Tích hợp Google Maps)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
