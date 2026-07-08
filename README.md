# Shreya Acharya - Portfolio Website

A modern, auto-updating personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark glassmorphic design with neon accents and smooth animations
- Auto-synced GitHub projects and profile (avatar, repos, followers)
- Contact form via Web3Forms (free tier)
- Fully responsive, SEO-optimized
- 100% free to deploy on Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Web3Forms

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Web3Forms Setup (Free)

1. Go to [web3forms.com](https://web3forms.com) and verify your email — no account needed
2. Copy the Access Key you're given
3. Paste it into `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`

## Deploy to Vercel (Free)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` from `.env.local` as an environment variable
4. Deploy - auto-updates on every push

## License

MIT
