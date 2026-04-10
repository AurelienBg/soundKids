export default function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-[#378ADD] bg-gray-50 rounded-r-lg px-3.5 py-2.5">
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  )
}
