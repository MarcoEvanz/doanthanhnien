# Image Folder Structure

This folder contains all images used in the Thành Phú products website.

## Folder Organization

```
public/images/
├── products/                    # Product images
│   ├── nong-san/               # Agricultural products
│   │   ├── gao-tam-xoan.jpg
│   │   ├── rau-xanh-sach.jpg
│   │   └── trai-cay-dia-phuong.jpg
│   ├── thu-cong-my-nghe/       # Handicrafts
│   │   ├── dan-lat-tre.jpg
│   │   ├── theu-ren.jpg
│   │   └── go-my-nghe.jpg
│   ├── dac-san/                # Local specialties
│   │   ├── banh-tet.jpg
│   │   ├── nuoc-mam.jpg
│   │   └── gia-vi-truyen-thong.jpg
│   └── dich-vu/                # Services
│       ├── du-lich-sinh-thai.jpg
│       ├── nha-hang.jpg
│       └── homestay.jpg
├── categories/                  # Category banner images
│   ├── nong-san-banner.jpg
│   ├── thu-cong-banner.jpg
│   ├── dac-san-banner.jpg
│   └── dich-vu-banner.jpg
├── hero/                       # Hero section images
│   ├── hero-main.jpg
│   ├── hero-bg.jpg
│   └── floating-ingredients/
├── logos/                      # Logos and branding
│   ├── thanh-phu-logo.png
│   ├── doan-thanh-nien-logo.png
│   └── favicon.ico
```

## Image Guidelines

### File Naming Convention
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names
- Include category prefix when needed

### Image Sizes
- **Product images**: 800x600px (4:3 aspect ratio)
- **Category banners**: 1200x400px (3:1 aspect ratio)
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Thumbnails**: 300x300px (1:1 aspect ratio)

### Image Formats
- **JPEG**: For photographs and complex images
- **PNG**: For logos, icons, and images with transparency
- **WebP**: For optimized web delivery (Next.js will handle conversion)

### Optimization
- Compress images before uploading
- Use appropriate quality settings (80-90% for JPEG)
- Consider using Next.js Image component for automatic optimization

## Usage in Code

```jsx
import Image from 'next/image'

// Product image
<Image 
  src="/images/products/nong-san/gao-tam-xoan.jpg"
  alt="Gạo tám xoan Thành Phú"
  width={800}
  height={600}
/>

// Category banner
<Image 
  src="/images/categories/nong-san-banner.jpg"
  alt="Nông sản địa phương"
  width={1200}
  height={400}
/>
```

## Notes
- All images should be optimized for web use
- Maintain consistent aspect ratios within each category
- Use descriptive alt text for accessibility
- Consider loading performance for mobile users