'use client'

import { useState } from 'react'

export default function QuestionBox({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 space-y-1.5">
      <button onClick={() => setOpen(!open)} className="flex items-start gap-2.5 w-full text-left">
        <span className="text-base leading-none shrink-0 mt-0.5">❓</span>
        <p className="text-sm text-blue-900 font-medium leading-relaxed flex-1">{question}</p>
        <svg
          className={`w-4 h-4 text-blue-400 shrink-0 mt-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-blue-700 pl-[30px] pt-1 leading-relaxed">
          <span className="font-semibold">R : </span>{answer}
        </p>
      </div>
    </div>
  )
}
