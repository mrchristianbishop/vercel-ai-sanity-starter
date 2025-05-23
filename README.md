# Vercel AI + Sanity Starter

This project connects OpenAI's GPT-4 with Sanity CMS via Vercel's AI SDK. The agent interface lets you generate content via prompt and save it directly to Sanity.

## 🔧 Setup
1. Clone this repo
2. Run `npm install`
3. Create `.env.local` with:
   - `OPENAI_API_KEY`
   - `SANITY_PROJECT_ID`
   - `SANITY_TOKEN` (must allow write access)
4. Run locally: `npm run dev`
5. Visit `http://localhost:3000/home`
6. Enter a prompt and publish it to Sanity

## 📦 Deployment
Deploy on Vercel. Make sure you add all three `.env` variables in the Vercel dashboard under Project Settings → Environment Variables.
