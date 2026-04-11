import type { Step } from '@/data/deroulé'
import MusicButton from './MusicButton'
import TipBox from './TipBox'
import QuestionBox from './QuestionBox'
import VibroBox from './VibroBox'
import SceneBox from './SceneBox'
import Image from 'next/image'

const numberColors = [
  'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-violet-500', 'bg-cyan-500',
]

export default function StepRenderer({ step }: { step: Step }) {
  switch (step.type) {
    case 'text':
      return <p className="text-sm text-gray-500 leading-relaxed">{step.content}</p>

    case 'scene':
      return <SceneBox>{step.content}</SceneBox>

    case 'music':
      return step.trackId ? <MusicButton trackId={step.trackId} /> : null

    case 'vibro':
      return <VibroBox>{step.content}</VibroBox>

    case 'tip':
      return <TipBox>{step.content}</TipBox>

    case 'question':
      return step.question && step.answer ? (
        <QuestionBox question={step.question} answer={step.answer} />
      ) : null

    case 'photo':
      return step.photo ? (
        <div className="relative w-full h-[140px] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={step.photo}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      ) : null

    case 'list':
      return step.items ? (
        <div className="bg-gray-50 rounded-xl px-4 py-3 space-y-2">
          {step.items.map((item, i) => {
            const match = item.match(/^(\d+)\.\s*(.*)$/)
            if (match) {
              return (
                <div key={i} className="flex items-start gap-3">
                  <span className={`${numberColors[i % numberColors.length]} text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                    {match[1]}
                  </span>
                  <p className="text-sm text-gray-800 leading-relaxed">{match[2]}</p>
                </div>
              )
            }
            return <p key={i} className="text-sm text-gray-800 leading-relaxed">{item}</p>
          })}
        </div>
      ) : null

    default:
      return null
  }
}
