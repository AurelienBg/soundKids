'use client'

import { useState } from 'react'

interface PhaseCardProps {
  title: string
  duration?: string
  zone?: string
  color?: string
  defaultOpen?: boolean
  children: React.ReactNode
}

const colorMap: Record<string, string> = {
  teal: 'bg-[#378ADD]',
  amber: 'bg-[#BA7517]',
  coral: 'bg-[#D85A30]',
  blue: 'bg-[#185FA5]',
}

export default function PhaseCard({ title, duration, zone, color = 'teal', defaultOpen = false, children }: PhaseCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full px-4 py-3.5 text-left gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[15px] text-gray-900">{title}</div>
          {zone && <div className="text-xs text-gray-400 mt-0.5">{zone}</div>}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {duration && (
            <span className={`text-white text-xs font-medium rounded-full px-2.5 py-1 ${colorMap[color] || colorMap.teal}`}>
              {duration}
            </span>
          )}
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 space-y-3">
          {children}
        </div>
      </div>
    </div>
  )
}
