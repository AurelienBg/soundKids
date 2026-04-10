import type { Step } from '@/data/deroulé'
import MusicButton from './MusicButton'
import TipBox from './TipBox'
import QuestionBox from './QuestionBox'
import VibroBox from './VibroBox'
import Image from 'next/image'

export default function StepRenderer({ step }: { step: Step }) {
  switch (step.type) {
    case 'text':
      return <p className="text-sm text-gray-800 leading-relaxed">{step.content}</p>

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
        <div className="space-y-1 pl-1">
          {step.items.map((item, i) => (
            <p key={i} className="text-sm text-gray-800 leading-relaxed">{item}</p>
          ))}
        </div>
      ) : null

    default:
      return null
  }
}
