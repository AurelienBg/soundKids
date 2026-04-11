'use client'

import { useState, useEffect } from 'react'
import type { MaterielCategory } from '@/data/materiel'

const STORAGE_KEY = 'soundkids-materiel'

export default function MaterielChecklist({ categories }: { categories: MaterielCategory[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try { setChecked(JSON.parse(saved)) } catch { /* ignore */ }
    }
  }, [])

  const toggle = (key: string) => {
    const next = { ...checked, [key]: !checked[key] }
    setChecked(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  return (
    <div className="space-y-4">
      {categories.map((cat) => {
        const allChecked = cat.items.every((_, i) => checked[`${cat.label}-${i}`])
        return (
          <div key={cat.label}>
            <button
              onClick={() => {
                const next = { ...checked }
                const shouldCheck = !allChecked
                cat.items.forEach((_, i) => {
                  next[`${cat.label}-${i}`] = shouldCheck
                })
                setChecked(next)
                localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
              }}
              className="flex items-center gap-2 mb-1.5 group"
            >
              <div
                className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  allChecked ? 'bg-[#378ADD] border-[#378ADD]' : 'border-gray-300 group-hover:border-gray-400'
                }`}
              >
                {allChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h3 className={`text-sm font-semibold transition-colors ${allChecked ? 'text-gray-400 line-through' : 'text-[#BA7517]'}`}>
                {cat.label}
              </h3>
            </button>
            <ul className="space-y-0.5 ml-1">
              {cat.items.map((item, i) => {
                const key = `${cat.label}-${i}`
                const isChecked = !!checked[key]
                return (
                  <li key={i}>
                    <button
                      onClick={() => toggle(key)}
                      className="flex items-center gap-2.5 w-full text-left py-0.5 rounded active:bg-gray-50"
                    >
                      <div
                        className={`w-4 h-4 rounded border-[1.5px] flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#378ADD] border-[#378ADD]' : 'border-gray-300'
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm transition-all ${isChecked ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                        {item}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
