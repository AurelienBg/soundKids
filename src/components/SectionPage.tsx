import { getPhase, type SectionId } from '@/data/deroulé'
import PhaseCard from './PhaseCard'
import StepRenderer from './StepRenderer'

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

export default function SectionPage({ sectionId }: { sectionId: SectionId }) {
  const phase = getPhase(sectionId)
  if (!phase) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <h1 className={`text-xl font-bold ${colorMap[phase.color] || 'text-gray-900'}`}>
          {phase.label}
        </h1>
        {phase.duration && (
          <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${colorMap[phase.color]} ${bgColorMap[phase.color]}`}>
            {phase.duration} min
          </span>
        )}
      </div>
      {phase.subPhases.map((sub, i) => (
        <PhaseCard
          key={sub.id}
          title={sub.title}
          duration={sub.duration}
          zone={sub.zone}
          color={phase.color}
          defaultOpen={i === 0}
        >
          {sub.steps.map((step, j) => (
            <StepRenderer key={j} step={step} />
          ))}
        </PhaseCard>
      ))}
    </div>
  )
}
