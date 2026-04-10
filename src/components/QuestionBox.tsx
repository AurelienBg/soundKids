export default function QuestionBox({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-gray-200 rounded-xl px-4 py-3 space-y-1.5">
      <p className="text-sm text-gray-900">
        <span className="font-bold">Q : </span>{question}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-bold">R : </span>{answer}
      </p>
    </div>
  )
}
