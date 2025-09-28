'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const categories = [
  { id: 'all', name: 'Tất cả', icon: '🌟' },
  { id: 'nong-san', name: 'Nông sản', icon: '🌾' },
  { id: 'thu-cong', name: 'Thủ công mỹ nghệ', icon: '🎨' },
  { id: 'dac-san', name: 'Đặc sản', icon: '🏆' },
  { id: 'dich-vu', name: 'Dịch vụ', icon: '🛎️' },
];

const products = [
  {
    id: 1,
    name: 'Gạo thơm đặc sản',
    category: 'nong-san',
    price: 150000,
    unit: 'kg',
    image: '/images/products/nong-san/gaothomdacsan.png',
    description: 'Gạo thơm sạch từ ruộng lúa địa phương, hạt dẻo thơm',
    inStock: true,
    supplier: 'Hợp tác xã Thành phú',
  },
  {
    id: 2,
    name: 'Rau sạch hữu cơ',
    category: 'nong-san',
    price: 50000,
    unit: 'kg',
    image: '/images/products/nong-san/rausachhuuco.png',
    description: 'Rau xanh sạch không hóa chất, tươi ngon mỗi ngày',
    inStock: true,
    supplier: 'Nhóm nông dân trẻ',
  },
  {
    id: 3,
    name: 'Thúng tre đan tay',
    category: 'thu-cong',
    price: 200000,
    unit: 'cái',
    image: '/images/products/thu-cong-my-nghe/thungtredantay.png',
    description: 'Sản phẩm thủ công từ tre nứa, đan tay tỉ mỉ',
    inStock: true,
    supplier: 'Xưởng thủ công Thanh Nga',
  },
  {
    id: 4,
    name: 'Bánh tráng nướng',
    category: 'dac-san',
    price: 80000,
    unit: 'kg',
    image: '/images/products/dac-san/banhtrangnuong.png',
    description: 'Bánh tráng truyền thống làm thủ công, thơm ngon',
    inStock: true,
    supplier: 'Cơ sở Minh Hạnh',
  },
  {
    id: 5,
    name: 'Mật ong nguyên chất',
    category: 'dac-san',
    price: 300000,
    unit: 'lít',
    image: '/images/products/dac-san/matongnguyenchat.png',
    description: 'Mật ong rừng nguyên chất, bổ dưỡng cao',
    inStock: true,
    supplier: 'Trại ong Minh Đức',
  },
  {
    id: 6,
    name: 'Tour tham quan nông trại',
    category: 'dich-vu',
    price: 150000,
    unit: 'người',
    image: '/images/products/dich-vu/tourthamquannongtrai.png',
    description: 'Trải nghiệm cuộc sống nông thôn, tham quan vườn rau',
    inStock: true,
    supplier: 'Nông trại sinh thái Xanh',
  },
];

export default function SanPham() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sản phẩm địa phương Thành phú
            </h1>
            <p className="text-xl mb-8">
              Khám phá những sản phẩm chất lượng từ bà con nông dân
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Sort */}
              <div className="flex gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Sắp xếp theo tên</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'Tất cả sản phẩm' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-gray-600">
                Tìm thấy {filteredProducts.length} sản phẩm
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <span className="text-4xl mb-4 block">😔</span>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-500">
                  Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-semibold">Hết hàng</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                          {categories.find(c => c.id === product.category)?.name}
                        </span>
                        <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          product.inStock 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="text-sm text-gray-500 mb-3">
                        Nhà cung cấp: {product.supplier}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-blue-600 font-bold text-lg">
                            {product.price.toLocaleString('vi-VN')}₫
                          </span>
                          <span className="text-gray-500 text-sm">/{product.unit}</span>
                        </div>
                        <div className="flex gap-2">
                          <Link 
                            href={`/san-pham/${product.id}`}
                            className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                          >
                            Chi tiết
                          </Link>
                          <button 
                            className={`px-3 py-1 text-sm rounded transition-colors ${
                              product.inStock 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Mua ngay' : 'Hết hàng'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Không tìm thấy sản phẩm mong muốn?
            </h2>
            <p className="text-gray-600 mb-8">
              Liên hệ với chúng tôi để được tư vấn và hỗ trợ tìm kiếm sản phẩm phù hợp
            </p>
            <Link 
              href="/lien-he"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Liên hệ ngay
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
