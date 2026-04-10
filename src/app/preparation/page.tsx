import { checklist, materiel } from '@/data/materiel'
import Checklist from '@/components/Checklist'

export default function PreparationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-[#BA7517]">Préparation J-1</h1>

      {/* Checklist */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <h2 className="font-semibold text-gray-900 text-[15px] mb-3">Checklist</h2>
        <Checklist items={checklist} />
      </div>

      {/* Matériel */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-4">
        <h2 className="font-semibold text-gray-900 text-[15px]">Matériel complet (20 enfants)</h2>
        {materiel.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold text-[#BA7517] mb-1">{cat.label}</h3>
            <ul className="space-y-0.5">
              {cat.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600 pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
