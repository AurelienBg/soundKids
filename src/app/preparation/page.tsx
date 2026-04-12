import { checklist, materiel } from '@/data/materiel'
import Checklist from '@/components/Checklist'
import MaterielChecklist from '@/components/MaterielChecklist'

export default function PreparationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-[#BA7517]">Préparation J-1</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checklist */}
        <div className="bg-[#F7F9FC] rounded-2xl shadow-sm border border-[#D6E3F3] p-4">
          <h2 className="font-semibold text-gray-900 text-[15px] mb-3">Checklist</h2>
          <Checklist items={checklist} />
        </div>

        {/* Matériel */}
        <div className="bg-[#F7F9FC] rounded-2xl shadow-sm border border-[#D6E3F3] p-4">
          <h2 className="font-semibold text-gray-900 text-[15px] mb-3">Matériel complet (20 enfants)</h2>
          <MaterielChecklist categories={materiel} />
        </div>
      </div>
    </div>
  )
}
