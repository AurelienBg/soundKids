'use client'

import {
  generateCarnetSimple,
  generateColoriage,
  generateDiplome,
  generateMissionVibrato,
} from '@/lib/pdfGenerators'

const versions = [
  {
    id: 'simple',
    title: 'Carnet simple',
    desc: '4 pages — le son, les 3 familles, les instruments fabriqués',
    color: '#378ADD',
    icon: '📘',
    gen: generateCarnetSimple,
  },
  {
    id: 'coloriage',
    title: 'Carnet à colorier',
    desc: '4 pages — hibou + instruments au trait, à colorier à la maison',
    color: '#D85A30',
    icon: '🎨',
    gen: generateColoriage,
  },
  {
    id: 'diplome',
    title: 'Diplôme + rappel',
    desc: '2 pages — diplôme personnalisé + 3 familles + principes',
    color: '#BA7517',
    icon: '🏆',
    gen: generateDiplome,
  },
  {
    id: 'mission',
    title: 'Mission Vibrato',
    desc: '4 pages — écouter, reconnaître, fabriquer (format aventure)',
    color: '#7c3aed',
    icon: '🕵️',
    gen: generateMissionVibrato,
  },
]

export default function CarnetDownloads() {
  return (
    <div className="bg-[#F7F9FC] rounded-2xl border border-[#D6E3F3] shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-[#D6E3F3]">
        <h2 className="font-semibold text-[17px] text-gray-900">
          Carnet pour les enfants
        </h2>
        <p className="text-xs text-[#6B87A8] mt-1">
          Choisis et télécharge la version à imprimer et distribuer
        </p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {versions.map((v) => (
          <button
            key={v.id}
            onClick={() => {
              try {
                v.gen()
              } catch (err) {
                console.error(err)
                alert("Une erreur est survenue lors de la génération du PDF")
              }
            }}
            className="flex items-start gap-3 text-left rounded-xl p-4 border-2 transition-all hover:shadow-md active:scale-[0.98]"
            style={{ borderColor: `${v.color}30`, backgroundColor: `${v.color}08` }}
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${v.color}20` }}
            >
              {v.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px]" style={{ color: v.color }}>
                {v.title}
              </div>
              <div className="text-xs text-gray-600 mt-1 leading-relaxed">{v.desc}</div>
              <div
                className="inline-flex items-center gap-1 text-xs font-semibold mt-2"
                style={{ color: v.color }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger PDF
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
