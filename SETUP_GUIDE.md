# Setup Guide — Shreya Acharya Portfolio

Follow these steps to run the portfolio website on your personal system.

---

## Prerequisites

You need **Node.js** (version 18 or higher) and **npm** installed.

### Check if Node.js is installed

Open a terminal and run:

```bash
node -v
npm -v
```

If both show version numbers (e.g. `v18.x.x` and `10.x.x`), you are good to go.

### Install Node.js (if not installed)

- **macOS**: Download from https://nodejs.org/ (LTS version) or run `brew install node`
- **Windows**: Download from https://nodejs.org/ (LTS version) and run the installer
- **Linux**: Run `sudo apt update && sudo apt install nodejs npm` (Ubuntu/Debian) or `sudo dnf install nodejs npm` (Fedora)

---

## Step 1: Extract the ZIP

Extract `ShreyaAcharya_Portfolio.zip` to any folder on your system.

---

## Step 2: Install Dependencies

Open a terminal, navigate to the extracted folder, and run:

```bash
cd ShreyaAcharya_Portfolio
npm install
```

This downloads all required packages. It may take 1-2 minutes.

---

## Step 3: Set Up Web3Forms (Contact Form)

The contact form uses Web3Forms (free tier — 250 submissions/month, no credit card needed).

1. Go to https://web3forms.com and enter your email (`vsa.shreya@gmail.com`)
2. Verify your email — Web3Forms sends you an **Access Key** immediately, no account/password needed
3. Copy the Access Key

Now create a file called `.env.local` in the project root folder:

```bash
cp .env.example .env.local
```

Open `.env.local` in any text editor and replace the placeholder value:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

> **Note**: The website works without Web3Forms — only the contact form will fail to deliver submissions if the key is missing. Everything else runs fine.

---

## Step 4: Run the Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your portfolio website running.

---

## Step 5: Deploy to Vercel (Free — Optional)

### 5a. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/Shre-3/portfolio.git
git push -u origin main
```

### 5b. Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account (free)
2. Click **Add New** → **Project** → Select your portfolio repository
3. In **Environment Variables**, add `NEXT_PUBLIC_WEB3FORMS_KEY` from `.env.local`
4. Click **Deploy**
5. After ~1 minute, Vercel gives you a live URL like `https://portfolio-xxxx.vercel.app`
6. Every time you `git push`, Vercel auto-redeploys

---

## How Auto-Updates Work

| What updates                | How                              | Frequency     |
|-----------------------------|----------------------------------|---------------|
| GitHub avatar / profile pic | Fetched from GitHub API via ISR  | Every 1 hour  |
| GitHub repositories         | Fetched from GitHub API via ISR  | Every 1 hour  |
| GitHub followers / repo count | Fetched from GitHub API via ISR | Every 1 hour  |
| Resume PDF                  | Replace `public/resume.pdf`      | Manual        |

> **ISR** = Incremental Static Regeneration. Vercel automatically refreshes the data in the background — no redeployment needed.

---

## Folder Structure

```
ShreyaAcharya_Portfolio/
├── app/                    # Next.js pages and API routes
│   ├── layout.tsx          # Root layout (fonts, metadata, SEO)
│   ├── page.tsx            # Main page (composes all sections)
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── api/
│       └── github/route.ts # GitHub API proxy with caching
├── components/             # All UI components
│   ├── hero/               # Hero section with particles
│   ├── about/              # About section with stats
│   ├── education/          # Education timeline
│   ├── skills/             # Skills grid
│   ├── projects/           # GitHub projects (filterable)
│   ├── publications/       # Publications & certifications
│   ├── contact/            # Contact form (Web3Forms)
│   ├── footer/             # Footer
│   ├── navbar/             # Sticky navbar with scroll-spy
│   └── ui/                 # Shared UI components
├── lib/                    # Data fetching and constants
│   ├── constants.ts        # All personal data and config
│   └── github.ts           # GitHub API functions
├── public/
│   ├── resume.pdf          # Your resume (downloadable)
│   └── robots.txt          # SEO robots file
├── .env.example            # Template for environment variables
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS theme config
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
```

---

## Updating Your Info

To change any personal information, edit `lib/constants.ts`:
- Bio, email, phone, location
- Education timeline entries
- Skills
- Certifications
- Featured projects
- Project category mappings

To update your resume, replace `public/resume.pdf` with the new file (keep the same filename).

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Make sure Node.js 18+ is installed: `node -v` |
| Port 3000 already in use | Run `npm run dev -- -p 3001` to use a different port |
| Contact form shows error | Check `.env.local` has a valid `NEXT_PUBLIC_WEB3FORMS_KEY` |
| GitHub data not loading | The GitHub API has a rate limit of 60 requests/hour for unauthenticated requests. Wait and refresh. |
| Build fails | Run `npm run build` to see the exact error message |

---

## Total Cost

| Service | Cost |
|---------|------|
| Vercel Hosting | Free (Hobby plan) |
| Web3Forms | Free (250 submissions/month) |
| GitHub API | Free |
| **Total** | **$0** |
