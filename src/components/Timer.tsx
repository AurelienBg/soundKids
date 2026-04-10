'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const TOTAL_MINUTES = 105

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = useCallback(() => {
    if (intervalRef.current) return
    setRunning(true)
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }, [])

  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setRunning(false)
  }, [])

  const reset = useCallback(() => {
    pause()
    setSeconds(0)
  }, [pause])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const progress = Math.min((seconds / (TOTAL_MINUTES * 60)) * 100, 100)

  let barColor = '#1D9E75'
  if (minutes >= TOTAL_MINUTES) barColor = '#DC2626'
  else if (minutes >= 90) barColor = '#EA580C'

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-1 mb-1.5">
        <div className="font-mono text-lg font-bold text-gray-900 tabular-nums">
          {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
        <div className="flex gap-1.5">
          {!running ? (
            <button
              onClick={start}
              className="rounded-lg bg-[#1D9E75] text-white text-xs font-semibold px-3 py-1.5 active:opacity-80"
            >
              {seconds > 0 ? 'Reprendre' : 'Démarrer'}
            </button>
          ) : (
            <button
              onClick={pause}
              className="rounded-lg bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 active:opacity-80"
            >
              Pause
            </button>
          )}
          {seconds > 0 && (
            <button
              onClick={reset}
              className="rounded-lg bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 active:opacity-80"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  )
}
