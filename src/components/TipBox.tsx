export default function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 bg-emerald-50 border-l-[3px] border-emerald-500 rounded-r-lg px-3.5 py-2.5">
      <span className="text-base leading-none shrink-0 mt-0.5">💡</span>
      <p className="text-sm text-emerald-900 leading-relaxed">{children}</p>
    </div>
  )
}
