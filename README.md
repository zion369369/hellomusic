# 💽 HELLO MUSIC

> **"A different world of music. Underrated songs only......"**

A high-fidelity, full-stack music platform built to outshine Spotify with an uncompromising black & white obsidian branding, creator publishing studio, dynamic play/view tracking, and instant listening.

---

## ⚡ Maiden Release

- **Title**: **Fly away**
- **Artist**: **ZION**
- **Genre**: **Underrated Remix**
- **Audio Asset**: High-fidelity stereo audio (`/public/audio/fly-away-zion.mp3`)
- **Cover Artwork**: Bespoke high-contrast monochrome vinyl art (`/public/covers/fly-away.svg`)

---

## 🖤 Design System: Black & White Outshines Spotify

Hello Music replaces Spotify's green/grey interface with an editorial, high-contrast monochrome aesthetic:
- **Obsidian & Onyx Surfaces**: Deep `#09090b` and `#000000` glassmorphic backdrops.
- **Pure White Accents**: `#ffffff` glowing controls, crisp typography, and high-impact hover states.
- **Spotify-Grade Audio Player**:
  - Global persistent bottom bar.
  - Interactive smooth scrubbing timeline with live elapsed / remaining time.
  - Live animated equalizer audio waveform bars.
  - Shuffle, loop (repeat one / repeat all), volume slider, and instant mute toggle.
- **Real-Time Metrics**:
  - **View / Play Counter**: Automatically tracks listens after 3 seconds of continuous playback.
  - **Like Counter**: Optimistic immediate toggle with persistent database and local sync.
- **Creator Studio / Song Publishing**:
  - Upload `.mp3`, `.wav`, `.aac`, `.m4a` files with live duration calculation and in-modal preview playback.
  - Choose custom artwork or select from 4 Hello Music monochrome artwork presets.
  - Celebratory confetti feedback and immediate insertion into the discovery feed.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, React 18, TypeScript)
- **Styling**: Tailwind CSS, custom glassmorphism, monochrome tokens
- **Icons**: Lucide React
- **Audio Engine**: HTML5 Audio API & Web Audio visualizer hooks
- **Database & Auth**: Supabase (PostgreSQL, Storage, RLS, Edge Functions)
- **Deployment**: Vercel & GitHub ready

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄 Full Stack: Supabase Integration

Hello Music includes a resilient multi-layer storage architecture:
1. **Immediate Zero-Config Mode**: Works immediately out of the box with offline persistence in `localStorage`, so you can test publishing songs, liking tracks, and tracking view counts without setting up credentials first.
2. **Supabase Cloud Sync**:
   - Create a project on [Supabase](https://supabase.com).
   - Go to the **SQL Editor** in Supabase and run the script in `supabase/schema.sql`.
   - Add your credentials to `.env.local`:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Alternatively, click the **"Supabase Config"** button in the sidebar inside the app to paste your credentials directly into the UI!

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Hello Music full-stack platform with Fly away by ZION"
   git branch -M main
   git remote add origin https://github.com/<your-username>/hellomusic.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Environment Variables.
4. Click **Deploy**!
