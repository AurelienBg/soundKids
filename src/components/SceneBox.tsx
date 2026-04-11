export default function SceneBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 bg-amber-50 border-l-[3px] border-amber-500 rounded-r-lg px-3.5 py-2.5">
      <span className="text-base leading-none shrink-0 mt-0.5">🎭</span>
      <p className="text-sm text-amber-900 leading-relaxed font-medium">{children}</p>
    </div>
  )
}
