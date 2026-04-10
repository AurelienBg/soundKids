export default function VibroBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#EEEDFE] rounded-xl px-4 py-3.5">
      <div className="text-[10px] font-semibold tracking-widest uppercase text-purple-500 mb-2">
        Conte de Vibro
      </div>
      <p className="text-sm text-gray-800 italic leading-relaxed whitespace-pre-line">{children}</p>
    </div>
  )
}
