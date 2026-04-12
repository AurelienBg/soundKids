import type { Metadata, Viewport } from 'next'
import './globals.css'
import Link from 'next/link'
import Timer from '@/components/Timer'
import BottomNav from '@/components/BottomNav'
import SoundKidsLogo from '@/components/SoundKidsLogo'

export const metadata: Metadata = {
  title: 'SoundKids',
  description: 'Guide animateur atelier musical enfants 3-6 ans',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SoundKids',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#378ADD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="h-full flex flex-col overflow-hidden">
        {/* Mobile header — hidden on desktop */}
        <header className="lg:hidden shrink-0 bg-[#F0F4FA] border-b border-[#D6E3F3] safe-area-top z-50">
          <div className="max-w-lg mx-auto px-4 pt-2 pb-2">
            <div className="flex items-center gap-2.5 mb-2">
              <Link href="/" className="flex items-center gap-2.5">
                <SoundKidsLogo size={28} />
                <span
                  className="text-lg font-bold text-[#185FA5]"
                  style={{ fontFamily: "'Segoe Script', 'Bradley Hand', 'Lucida Handwriting', cursive" }}
                >
                  SoundKids
                </span>
              </Link>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="text-xs font-medium text-[#378ADD] bg-[#378ADD]/10 rounded-full px-2 py-0.5">
                  3–6 ans
                </span>
                <span className="text-xs font-medium text-gray-300 bg-gray-100 rounded-full px-2 py-0.5">
                  7–10 ans
                </span>
              </div>
            </div>
            <Timer />
          </div>
        </header>

        {/* Content — scrolls internally */}
        <main className="flex-1 overflow-y-auto lg:pl-[240px]">
          <div className="max-w-lg mx-auto px-4 py-4 lg:max-w-6xl lg:py-8 lg:px-8">
            {children}
          </div>
        </main>

        {/* Bottom nav — mobile only, fixed */}
        <div className="lg:hidden shrink-0">
          <BottomNav />
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
