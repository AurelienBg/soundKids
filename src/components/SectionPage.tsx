'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { getPhase, type SectionId } from '@/data/deroulé'
import SubPhaseSlide from './SubPhaseSlide'

const colorMap: Record<string, string> = {
  teal: 'text-[#378ADD]',
  amber: 'text-[#BA7517]',
  coral: 'text-[#D85A30]',
  blue: 'text-[#185FA5]',
}

const bgColorMap: Record<string, string> = {
  teal: 'bg-[#378ADD]/10',
  amber: 'bg-[#BA7517]/10',
  coral: 'bg-[#D85A30]/10',
  blue: 'bg-[#185FA5]/10',
}

const bgActiveMap: Record<string, string> = {
  teal: 'bg-[#378ADD]',
  amber: 'bg-[#BA7517]',
  coral: 'bg-[#D85A30]',
  blue: 'bg-[#185FA5]',
}

export default function SectionPage({ sectionId }: { sectionId: SectionId }) {
  const phase = getPhase(sectionId)
  const [current, setCurrent] = useState(0)
  const tagsRef = useRef<HTMLDivElement>(null)
  const touchRef = useRef<{ startX: number; startY: number } | null>(null)

  const total = phase?.subPhases.length ?? 0

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1)
  }, [current, goTo])

  const next = useCallback(() => {
    if (current < total - 1) goTo(current + 1)
  }, [current, total, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  // Scroll active tag into view
  useEffect(() => {
    if (tagsRef.current) {
      const activeTag = tagsRef.current.children[current] as HTMLElement
      if (activeTag) {
        activeTag.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [current])

  // Swipe handling
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return
    const dx = e.changedTouches[0].clientX - touchRef.current.startX
    const dy = e.changedTouches[0].clientY - touchRef.current.startY
    touchRef.current = null
    // Only swipe if horizontal movement > 60px and more horizontal than vertical
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) next()
      else prev()
    }
  }, [next, prev])

  if (!phase) return null

  const sub = phase.subPhases[current]
  if (!sub) return null

  // Extract short label for tags
  const getShortLabel = (title: string) => {
    // "A. Accueil" → "A. Accueil"
    // "Acte 1 — Grotte préhistorique · -40 000 ans" → "Acte 1"
    // "Instrument 1 — Maracas" → "Maracas"
    const dashMatch = title.match(/^(.+?)\s*[—·]/)
    if (dashMatch) return dashMatch[1].trim()
    return title
  }

  return (
    <div className="space-y-4">
      {/* Section header */}
      <div className="flex items-center gap-3">
        <h1 className={`text-xl font-bold ${colorMap[phase.color] || 'text-gray-900'}`}>
          {phase.label}
        </h1>
        {phase.duration && (
          <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${colorMap[phase.color]} ${bgColorMap[phase.color]}`}>
            {phase.duration} min
          </span>
        )}
        <span className="text-xs text-[#6B87A8] ml-auto">
          {current + 1}/{total}
        </span>
      </div>

      {/* Tags navigation */}
      <div
        ref={tagsRef}
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {phase.subPhases.map((s, i) => {
          const active = i === current
          return (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`shrink-0 text-xs font-semibold rounded-full px-3 py-1.5 transition-all ${
                active
                  ? `${bgActiveMap[phase.color]} text-white shadow-sm`
                  : `${bgColorMap[phase.color]} ${colorMap[phase.color]} hover:opacity-80`
              }`}
            >
              {getShortLabel(s.title)}
            </button>
          )
        })}
      </div>

      {/* Current sub-phase content — swipeable */}
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <SubPhaseSlide sub={sub} color={phase.color} />
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {phase.subPhases.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all ${
              i === current
                ? `w-6 h-2 ${bgActiveMap[phase.color]}`
                : 'w-2 h-2 bg-[#D6E3F3] hover:bg-[#B8CCDF]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
