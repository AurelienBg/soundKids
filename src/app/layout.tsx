import type { Metadata, Viewport } from 'next'
import './globals.css'
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
      <body className="min-h-dvh flex flex-col">
        {/* Mobile header — hidden on desktop */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 safe-area-top">
          <div className="max-w-lg mx-auto px-4 pt-2 pb-2">
            <div className="flex items-center gap-2.5 mb-2">
              <SoundKidsLogo size={28} />
              <span
                className="text-lg font-bold text-[#185FA5]"
                style={{ fontFamily: "'Segoe Script', 'Bradley Hand', 'Lucida Handwriting', cursive" }}
              >
                SoundKids
              </span>
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

        {/* Content */}
        <main className="flex-1 pt-[120px] pb-[72px] lg:pt-0 lg:pb-0 lg:pl-[240px]">
          <div className="max-w-lg mx-auto px-4 py-4 lg:max-w-3xl lg:py-8 lg:px-8">
            {children}
          </div>
        </main>

        {/* Nav (sidebar on desktop, bottom bar on mobile) */}
        <BottomNav />
      </body>
    </html>
  )
}
