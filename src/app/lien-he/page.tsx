'use client'

import { useState } from 'react'

export default function LienHePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm nhất có thể.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📞 Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các hình thức sau
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-sky-500 text-white px-3 py-1 rounded-lg mr-3">✉️</span>
                Gửi tin nhắn cho chúng tôi
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chủ đề *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="product">Sản phẩm</option>
                      <option value="order">Đặt hàng</option>
                      <option value="support">Hỗ trợ</option>
                      <option value="partnership">Hợp tác</option>
                      <option value="feedback">Góp ý</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tin nhắn *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-sky-600 hover:to-cyan-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">📤</span>
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-cyan-500 text-white px-2 py-1 rounded-lg mr-3">📍</span>
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-lg">
                    <span className="text-sky-600">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Địa chỉ</h4>
                    <p className="text-gray-600 text-sm">
                      Ủy ban Đoàn Thanh niên<br />
                      Xã Thành Phú, Huyện Thành Phố<br />
                      Tỉnh/Thành phố, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-lg">
                    <span className="text-sky-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Điện thoại</h4>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+84123456789" className="hover:text-sky-600">
                        +84 123 456 789
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-lg">
                    <span className="text-sky-600">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:info@sanphamthanhphu.vn" className="hover:text-sky-600">
                        info@sanphamthanhphu.vn
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-100 p-2 rounded-lg">
                    <span className="text-sky-600">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Website</h4>
                    <p className="text-gray-600 text-sm">
                      <a href="https://sanphamthanhphu.vn" className="hover:text-sky-600">
                        sanphamthanhphu.vn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-green-500 text-white px-2 py-1 rounded-lg mr-3">⏰</span>
                Giờ làm việc
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Thứ 2 - Thứ 6</span>
                  <span className="font-medium text-gray-900">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Thứ 7</span>
                  <span className="font-medium text-gray-900">8:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Chủ nhật</span>
                  <span className="font-medium text-red-600">Nghỉ</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-purple-500 text-white px-2 py-1 rounded-lg mr-3">👥</span>
                Mạng xã hội
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <span className="mr-2">📘</span>
                  Facebook
                </a>
                <a href="#" className="flex items-center justify-center p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                  <span className="mr-2">📺</span>
                  YouTube
                </a>
                <a href="#" className="flex items-center justify-center p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  <span className="mr-2">📱</span>
                  Zalo
                </a>
                <a href="#" className="flex items-center justify-center p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300">
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🚀</span>
                Liên hệ nhanh
              </h3>
              <p className="text-sky-100 text-sm mb-4">
                Cần hỗ trợ ngay? Gọi điện hoặc nhắn tin cho chúng tôi!
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+84123456789"
                  className="block w-full bg-white text-sky-600 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  📞 Gọi ngay
                </a>
                <a
                  href="sms:+84123456789"
                  className="block w-full bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-white hover:text-sky-600 transition-colors duration-300"
                >
                  💬 Nhắn tin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg mr-3">🗺️</span>
              Vị trí của chúng tôi
            </h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-medium">Bản đồ sẽ được tích hợp tại đây</p>
                <p className="text-sm">Xã Thành Phú, Huyện Thành Phố</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}