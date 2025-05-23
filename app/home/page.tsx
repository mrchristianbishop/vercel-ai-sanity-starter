'use client'

import { useChat } from 'ai/react'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/agent' })

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sanity AI Content Generator</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={handleInputChange}
          className="border p-2 flex-grow rounded"
          placeholder="Describe the content to generate..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
      <ul className="space-y-2">
        {messages.map((m, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded">
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
          </li>
        ))}
      </ul>
    </main>
  )
}
