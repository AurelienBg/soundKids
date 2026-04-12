'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SoundKidsLogo from './SoundKidsLogo'
import Timer from './Timer'

const tabs = [
  { href: '/introduction', label: 'Introduction', shortLabel: 'Intro', icon: '🎵' },
  { href: '/voyage', label: 'Voyage dans le temps', shortLabel: 'Voyage', icon: '🕰️' },
  { href: '/fabrication', label: 'Fabrication', shortLabel: 'Fabriquer', icon: '🔨' },
  { href: '/concert', label: 'Concert final', shortLabel: 'Concert', icon: '🎶' },
  { href: '/conclusion', label: 'Conclusion', shortLabel: 'Fin', icon: '💫' },
  { href: '/preparation', label: 'Préparation J-1', shortLabel: 'Prép.', icon: '📋' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[240px] bg-[#F0F4FA] border-r border-[#D6E3F3] flex-col z-50">
        {/* Logo */}
        <div className="px-5 pt-5 pb-4 border-b border-[#D6E3F3]">
          <Link href="/" className="flex items-center gap-2.5 mb-1">
            <SoundKidsLogo size={32} />
            <span
              className="text-xl font-bold text-[#185FA5]"
              style={{ fontFamily: "'Segoe Script', 'Bradley Hand', 'Lucida Handwriting', cursive" }}
            >
              SoundKids
            </span>
          </Link>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-xs font-medium text-[#378ADD] bg-[#378ADD]/10 rounded-full px-2 py-0.5">
              3–6 ans
            </span>
            <span className="text-xs font-medium text-gray-300 bg-gray-100 rounded-full px-2 py-0.5">
              7–10 ans
            </span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
          {tabs.map((tab) => {
            const active = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#378ADD]/15 text-[#378ADD]'
                    : 'text-[#6B87A8] hover:bg-[#378ADD]/5 hover:text-[#378ADD]'
                }`}
              >
                <span className="text-lg leading-none">{tab.icon}</span>
                <span>{tab.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Timer at bottom of sidebar */}
        <div className="px-4 py-4 border-t border-[#D6E3F3]">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Chronomètre
          </div>
          <Timer />
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden bg-[#F0F4FA] border-t border-[#D6E3F3] safe-area-bottom">
        <div className="flex justify-around items-center h-14 max-w-lg mx-auto px-1">
          {tabs.map((tab) => {
            const active = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 px-1.5 py-1 rounded-lg transition-colors min-w-[52px] ${
                  active ? 'text-[#378ADD]' : 'text-gray-400'
                }`}
              >
                <span className="text-base leading-none">{tab.icon}</span>
                <span className={`text-[10px] font-medium ${active ? 'font-semibold' : ''}`}>
                  {tab.shortLabel}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
