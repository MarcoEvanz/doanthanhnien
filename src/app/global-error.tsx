'use client'

import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('Global error:', error)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Có lỗi xảy ra
        </h2>
        <p className="text-gray-600 mb-8">
          Xin lỗi, đã có lỗi không mong muốn xảy ra. Vui lòng thử lại.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Thử lại
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}