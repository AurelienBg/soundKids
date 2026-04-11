export default function VibratoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-purple-50 rounded-xl px-4 py-3.5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base leading-none">📖</span>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-purple-500">
          Conte de Vibrato
        </span>
      </div>
      <p className="text-sm text-purple-900 italic leading-relaxed whitespace-pre-line">{children}</p>
    </div>
  )
}
