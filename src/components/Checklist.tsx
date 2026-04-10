'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'soundkids-checklist'

export default function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try { setChecked(JSON.parse(saved)) } catch { /* ignore */ }
    }
  }, [])

  const toggle = (index: number) => {
    const next = { ...checked, [index]: !checked[index] }
    setChecked(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const reset = () => {
    setChecked({})
    localStorage.removeItem(STORAGE_KEY)
  }

  const doneCount = Object.values(checked).filter(Boolean).length

  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-400 font-medium mb-3">
        {doneCount}/{items.length} terminé{doneCount > 1 ? 's' : ''}
      </div>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => toggle(i)}
          className="flex items-center gap-3 w-full text-left py-2 px-1 rounded-lg active:bg-gray-50"
        >
          <div
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
              checked[i] ? 'bg-[#378ADD] border-[#378ADD]' : 'border-gray-300'
            }`}
          >
            {checked[i] && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span
            className={`text-sm transition-all ${
              checked[i] ? 'line-through text-gray-400 opacity-50' : 'text-gray-800'
            }`}
          >
            {item}
          </span>
        </button>
      ))}
      <button
        onClick={reset}
        className="mt-4 text-xs text-red-400 hover:text-red-500 font-medium"
      >
        Tout réinitialiser
      </button>
    </div>
  )
}
