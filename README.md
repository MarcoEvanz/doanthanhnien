# Sản phẩm Thành phú DT

Website giới thiệu và bán sản phẩm địa phương xã Thành phú, được quản lý bởi Đoàn Thanh niên xã.

## Thông tin dự án

- **Tên website**: sanphamthanhphudt
- **Tên miền mong muốn**: .vn
- **Mục tiêu**: Giới thiệu sản phẩm địa phương, hỗ trợ bán hàng online, quảng bá hình ảnh xã, kết nối thanh niên
- **Đơn vị quản lý**: Đoàn Thanh niên xã Thành phú
- **Người phụ trách nội dung**: Võ Mạnh Lực

## Tính năng chính

### 🏠 Trang chủ
- Hero section giới thiệu
- Sản phẩm nổi bật
- Danh mục sản phẩm
- Tin tức và sự kiện

### 📖 Trang giới thiệu
- Giới thiệu về xã và Đoàn Thanh niên
- Thông tin liên hệ (địa chỉ, số điện thoại, email)
- Hình ảnh/video về hoạt động, sản phẩm

### 🛍️ Trang danh mục sản phẩm
- Phân loại sản phẩm (nông sản, thủ công, đặc sản, dịch vụ)
- Tìm kiếm và lọc sản phẩm (theo giá, loại, nhà cung cấp)
- Sắp xếp sản phẩm

### 📦 Trang chi tiết sản phẩm
- Hình ảnh sản phẩm
- Mô tả chi tiết
- Giá bán
- Tình trạng hàng (còn hàng/hết hàng)
- Thông tin nhà cung cấp
- Nút "Thêm vào giỏ hàng" hoặc "Liên hệ mua"

### 🛒 Chức năng bán hàng
- Giỏ hàng
- Đặt hàng trực tuyến
- Thanh toán: COD, chuyển khoản, ví điện tử
- Quản lý đơn hàng (cho admin)

### 📰 Tin tức & sự kiện
- Tin tức Đoàn Thanh niên xã
- Các chương trình xúc tiến thương mại
- Hoạt động cộng đồng

### 📞 Liên hệ
- Form liên hệ (họ tên, số điện thoại, nội dung)
- Bản đồ xã (Google Maps)

### ⚙️ Quản trị
- Quản trị nội dung (CMS)
- Tài khoản quản trị cho Ban Chấp hành Đoàn Thanh niên xã
- Phân quyền quản trị (Admin, Editor, Người bán)
- Báo cáo thống kê

## Công nghệ sử dụng

- **Framework**: Next.js 15.5.4 với App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji (có thể nâng cấp lên Lucide React)
- **Deployment**: Vercel (khuyến nghị)

## Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 18+ 
- npm, yarn, pnpm hoặc bun

### Hướng dẫn cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd sanphamthanhphudt
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Chạy development server:
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong browser để xem kết quả.

## Cấu trúc dự án

```
src/
├── app/                    # App Router pages
│   ├── gioi-thieu/        # Trang giới thiệu
│   ├── san-pham/          # Trang sản phẩm
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Trang chủ
├── components/            # React components
│   └── layout/           # Layout components
│       ├── Header.tsx    # Header component
│       └── Footer.tsx    # Footer component
public/                   # Static assets
```

## Tính năng cần phát triển

### Giai đoạn 1 (Hoàn thành)
- [x] Trang chủ với hero section và sản phẩm nổi bật
- [x] Trang giới thiệu với thông tin Đoàn Thanh niên
- [x] Trang danh mục sản phẩm với tìm kiếm và lọc
- [x] Header và Footer responsive
- [x] Thiết kế mobile-friendly

### Giai đoạn 2 (Cần phát triển)
- [ ] Trang chi tiết sản phẩm
- [ ] Giỏ hàng và checkout
- [ ] Trang tin tức
- [ ] Trang liên hệ với form và bản đồ
- [ ] Hệ thống đăng nhập/đăng ký

### Giai đoạn 3 (Nâng cao)
- [ ] Admin panel
- [ ] Quản lý sản phẩm
- [ ] Quản lý đơn hàng
- [ ] Báo cáo thống kê
- [ ] Tích hợp thanh toán
- [ ] SEO optimization

## Giao diện & UX

- **Màu sắc**: Gắn với màu sắc Đoàn Thanh niên (xanh dương, trắng)
- **Logo**: Logo xã/Đoàn Thanh niên
- **Responsive**: Thân thiện với mobile
- **Thiết kế**: Đơn giản, dễ sử dụng cho mọi lứa tuổi
- **Banner**: Quảng bá sản phẩm nổi bật

## Tích hợp thêm (Tương lai)

- [ ] Kết nối mạng xã hội (Facebook, Zalo, TikTok)
- [ ] Chat trực tuyến (Zalo OA, Messenger)
- [ ] Tích hợp sàn TMĐT (Shopee, Lazada, Postmart, Voso)
- [ ] Email doanh nghiệp .vn
- [ ] Google Analytics
- [ ] Google Maps

## Đóng góp

Dự án được phát triển bởi Đoàn Thanh niên xã Thành phú. Mọi góp ý và đóng góp xin liên hệ:

- **Người phụ trách**: Võ Mạnh Lực
- **Email**: doanthanhnien@thanhphu.vn  
- **Điện thoại**: 0123.456.789

## License

© 2025 Đoàn Thanh niên xã Thành phú. Bảo lưu mọi quyền.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
