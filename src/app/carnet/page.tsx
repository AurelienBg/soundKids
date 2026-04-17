import CarnetDownloads from '@/components/CarnetDownloads'

export default function CarnetPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-[#378ADD]">Carnet pour les enfants</h1>
      </div>
      <p className="text-sm text-[#6B87A8]">
        4 versions à imprimer et distribuer en fin d&apos;atelier. Les PDF sont générés et téléchargés directement sur ton appareil.
      </p>
      <CarnetDownloads />
    </div>
  )
}
