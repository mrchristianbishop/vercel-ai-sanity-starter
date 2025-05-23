import { OpenAI } from 'ai'
import { agent } from 'ai/agent'
import { createClient } from '@sanity/client'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export const POST = agent(async ({ messages }) => {
  const lastUserMessage = messages[messages.length - 1].content

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  })

  const content = response.choices[0].message.content || 'No content generated.'

  await sanity.create({
    _type: 'contact',
    name: 'AI Generated',
    email: 'generated@example.com',
    notes: content,
  })

  return {
    messages: [...messages, response.choices[0].message],
  }
})
