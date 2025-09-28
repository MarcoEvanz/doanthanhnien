'use client'

import { useState, useEffect } from 'react'

export default function ResponsiveDebugger() {
  const [screenSize, setScreenSize] = useState<string>('')

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 320) setScreenSize('< 320px (Extra Small)')
      else if (width < 375) setScreenSize('320px - 374px (Small Mobile)')
      else if (width < 414) setScreenSize('375px - 413px (iPhone 12/13/14)')
      else if (width < 428) setScreenSize('414px - 427px (iPhone Plus)')
      else if (width < 640) setScreenSize('428px - 639px (iPhone 14 Pro Max+)')
      else if (width < 768) setScreenSize('640px - 767px (Small Tablet)')
      else if (width < 1024) setScreenSize('768px - 1023px (Tablet)')
      else if (width < 1280) setScreenSize('1024px - 1279px (Desktop)')
      else setScreenSize('1280px+ (Large Desktop)')
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-xs z-50 font-mono">
      <div>{screenSize}</div>
      <div>W: {typeof window !== 'undefined' ? window.innerWidth : 0}px</div>
    </div>
  )
}