import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// import ResponsiveDebugger from '@/components/ResponsiveDebugger'
import { AuthProvider } from '@/contexts/AuthContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sản phẩm Thành phú DT - Đoàn Thanh niên xã",
  description: "Website giới thiệu và bán sản phẩm địa phương xã Thành phú, do Đoàn Thanh niên quản lý",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <AuthProvider>
          <Header />
          <main className="min-h-screen pt-0">
            {children}
          </main>
          <Footer />
          {/* <ResponsiveDebugger /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
