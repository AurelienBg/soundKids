'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/introduction', label: 'Intro', icon: '🎵' },
  { href: '/voyage', label: 'Voyage', icon: '🕰️' },
  { href: '/fabrication', label: 'Fabriquer', icon: '🔨' },
  { href: '/concert', label: 'Concert', icon: '🎶' },
  { href: '/conclusion', label: 'Fin', icon: '💫' },
  { href: '/preparation', label: 'Prép.', icon: '📋' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 z-50 safe-area-bottom">
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
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
