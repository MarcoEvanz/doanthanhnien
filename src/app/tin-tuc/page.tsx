'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TinTucPage() {
  const featuredNews = [
    {
      id: 1,
      title: "Đoàn Thanh niên khởi động chương trình hỗ trợ nông dân địa phương",
      excerpt: "Chương trình mới nhằm tăng cường khả năng tiếp cận thị trường cho các sản phẩm nông nghiệp địa phương...",
      image: "/images/products/nong-san/gao-st25.jpg",
      date: "28/09/2025",
      category: "Hoạt động Đoàn"
    },
    {
      id: 2,
      title: "Triển lãm sản phẩm thủ công mỹ nghệ thu hút đông đảo khách tham quan",
      excerpt: "Triển lãm đã giới thiệu hơn 100 sản phẩm thủ công truyền thống được làm bởi các nghệ nhân địa phương...",
      image: "/images/products/thu-cong/do-go-cao-cap.jpg",
      date: "25/09/2025", 
      category: "Sự kiện"
    }
  ]

  const recentNews = [
    {
      id: 3,
      title: "Hội thảo phát triển du lịch sinh thái tại Thành Phú",
      date: "22/09/2025",
      category: "Du lịch"
    },
    {
      id: 4,
      title: "Khai mạc khóa đào tạo kỹ năng bán hàng online cho thanh niên",
      date: "20/09/2025",
      category: "Đào tạo"
    },
    {
      id: 5,
      title: "Lễ kỷ niệm 95 năm thành lập Đoàn TNCS Hồ Chí Minh",
      date: "18/09/2025",
      category: "Hoạt động Đoàn"
    },
    {
      id: 6,
      title: "Chương trình tình nguyện làm sạch môi trường",
      date: "15/09/2025",
      category: "Tình nguyện"
    },
    {
      id: 7,
      title: "Hội chợ nông sản sạch tháng 9 thu hút nhiều khách hàng",
      date: "12/09/2025",
      category: "Nông nghiệp"
    },
    {
      id: 8,
      title: "Đào tạo kỹ thuật canh tác bền vững cho nông dân",
      date: "10/09/2025",
      category: "Nông nghiệp"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📰 Tin tức & Sự kiện
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về hoạt động của Đoàn Thanh niên và các sự kiện tại Thành Phú
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-sky-500 text-white px-3 py-1 rounded-lg mr-3">🌟</span>
            Tin nổi bật
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-sky-600 cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">📅 {news.date}</span>
                    <Link href={`/tin-tuc/${news.id}`} className="text-sky-600 hover:text-sky-700 font-medium flex items-center">
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent News List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-lg mr-3">📋</span>
              Tin tức gần đây
            </h2>
            <div className="space-y-4">
              {recentNews.map((news) => (
                <article key={news.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-sky-600 cursor-pointer">
                        {news.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          📅 {news.date}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <Link href={`/tin-tuc/${news.id}`} className="text-sky-600 hover:text-sky-700 ml-4">
                      →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                📂 Danh mục tin tức
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Hoạt động Đoàn", count: 12 },
                  { name: "Nông nghiệp", count: 8 },
                  { name: "Sự kiện", count: 6 },
                  { name: "Du lịch", count: 4 },
                  { name: "Đào tạo", count: 5 },
                  { name: "Tình nguyện", count: 7 }
                ].map((category) => (
                  <div key={category.name} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Announcements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                📢 Thông báo mới
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-sky-500 pl-4">
                  <p className="text-sm font-medium text-gray-900">Thay đổi giờ làm việc</p>
                  <p className="text-xs text-gray-500">25/09/2025</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm font-medium text-gray-900">Khai trương cửa hàng mới</p>
                  <p className="text-xs text-gray-500">22/09/2025</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="text-sm font-medium text-gray-900">Chương trình ưu đãi tháng 10</p>
                  <p className="text-xs text-gray-500">20/09/2025</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                ✉️ Đăng ký nhận tin
              </h3>
              <p className="text-sky-100 text-sm mb-4">
                Nhận thông báo về các tin tức và sự kiện mới nhất
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-sky-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}