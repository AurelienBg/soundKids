import type { SubPhase } from '@/data/deroulé'
import StepRenderer from './StepRenderer'

const colorMap: Record<string, string> = {
  teal: 'bg-[#378ADD]',
  amber: 'bg-[#BA7517]',
  coral: 'bg-[#D85A30]',
  blue: 'bg-[#185FA5]',
}

export default function SubPhaseSlide({ sub, color }: { sub: SubPhase; color: string }) {
  const musicSteps = sub.steps.filter((s) => s.type === 'music')
  const otherSteps = sub.steps.filter((s) => s.type !== 'music')

  return (
    <div className="bg-[#F7F9FC] rounded-2xl border border-[#D6E3F3] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#D6E3F3] flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-[17px] text-gray-900">{sub.title}</h2>
          {sub.zone && <div className="text-xs text-[#6B87A8] mt-0.5">{sub.zone}</div>}
        </div>
        {sub.duration && (
          <span className={`text-white text-xs font-medium rounded-full px-3 py-1 shrink-0 ${colorMap[color] || colorMap.teal}`}>
            {sub.duration}
          </span>
        )}
      </div>

      {/* Content — always visible */}
      <div className="px-5 py-4 space-y-3">
        {otherSteps.map((step, j) => (
          <StepRenderer key={j} step={step} />
        ))}
      </div>

      {/* Music sticky */}
      {musicSteps.length > 0 && (
        <div className="sticky bottom-0 px-5 pb-4 pt-2 bg-gradient-to-t from-[#F7F9FC] via-[#F7F9FC] to-[#F7F9FC]/80 space-y-2 border-t border-[#D6E3F3]">
          {musicSteps.map((step, j) => (
            <StepRenderer key={j} step={step} />
          ))}
        </div>
      )}
    </div>
  )
}
