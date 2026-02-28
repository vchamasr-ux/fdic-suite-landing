# FDIC Intelligence Suite — Landing Page Product Specs

## 1. Executive Summary
A premium, single-page marketing site serving as the unified portfolio showcase for a suite of four financial analysis applications. The page is designed to be shared on LinkedIn, in job applications, and via email — acting simultaneously as a developer portfolio and a product marketing site. The tone: serious, data-driven, and ambitious. Think **Palantir meets Bloomberg Terminal UI**.

---

## 2. Page Sections (Detailed)

### Section 1: Hero
- **Headline (H1)**: `"The FDIC Intelligence Suite."` — short, confident, branded.
- **Sub-headline**: `"Four interconnected tools for the modern banking strategist. Built on live FDIC data, powered by Gemini AI."` 
- **Above-the-fold CTA**: A single prominent `"Explore the Suite →"` button that smooth-scrolls down to Section 3 (The Apps).
- **Ambient Visual**: A dark background with a subtle, animated SVG grid pattern or floating financial data particles — creates a "live data" atmosphere without being a distraction. (Implemented using a CSS animation keyframe or a lightweight canvas.)
- **Trust Badge**: A small line below the CTA: `"Live data. Real institutions. Zero mock data."` — immediately signals authenticity.

### Section 2: Trust Signals Bar
A horizontal stats bar with 3-4 impactful, verifiable metrics pulled from the FDIC dataset scope:
- `"4,500+ Banks Analyzed"` — the total active FDIC universe.
- `"16 Quarters of Historical Data"` — depth of the time-series call report data.
- `"100% Live FDIC Data"` — no stale CSV, real API calls.
- `"Gemini 2.5 Flash AI Engine"` — the AI power source.

> These numbers must be real. Do not fabricate. Cross-reference against FDIC API's total institution count.

### Section 3: The Suite (App Cards)
The 4 app cards are the heart of the page. Each card is a self-contained product listing.

**Card Layout (per app):**
- **App # Tag** (e.g., `App 01`)
- **App Name** (prominent, bold)
- **Target Persona Badge** (e.g., `For: Community Bank CEOs` or `For: M&A Advisory Teams`)
- **2-sentence value proposition** (benefit-first, not feature-first)
- **Key Features list** (3 bullet points max — scannable)
- **Screenshot / Preview** (a real screenshot of the deployed app)
- **`"Launch App →"` button** linking to the live Vercel deployment

**The 4 Apps:**

| # | App Name | Live URL | Target Persona |
|---|---|---|---|
| 01 | **Bank Value Benchmark** | `bank-value-benchmark-mvp.vercel.app` | Community Bank CEOs, CFOs |
| 02 | **Bank M&A Radar** | `bank-ma-radar.vercel.app` | M&A Advisory Teams, Investment Bankers |
| 03 | **B2B Fintech Prospector** | *(TBD — to be deployed)* | Fintech CROs, VP Sales |
| 04 | **De Novo Whitespace Explorer** | *(TBD — to be deployed)* | Private Equity, Bank Founders |

### Section 4: How It Works (Architecture Narrative)
A clean, 3-step visual flow (icon + label) illustrating the shared data engine:
1. **`FDIC API`** → Live Call Report data ingested in real-time.
2. **`KPI Engine`** → Client-side computation of 10+ financial metrics (ROA, ROE, NIM, Efficiency Ratio, etc.).
3. **`Gemini AI`** → Context-aware analysis, executive briefs, and outreach generation.

### Section 5: Tech Stack Showcase
A neatly arranged horizontal grid of tech logos with the name below.
- React / Vite / Next.js
- Tailwind CSS v4
- Recharts
- React Simple Maps
- Google Gemini 2.5 Flash
- LinkedIn OAuth 2.0
- Vercel KV (Redis)
- Vercel

### Section 6: The Philosophy
A bold, typographic section highlighting the engineering principles:
- **`"Fail Loudly"`** — If data is missing, the app crashes visibly. No silent defaults. No fake zeros.
- **`"Live Connections Only"`** — Every metric is sourced from real FDIC API calls. No CSV fallbacks. No mock data.
- **`"Pitchbook-Ready"`** — Every app exports professional-grade PDFs suitable for boardrooms and investor decks.

### Section 7: Contact / CTA
- Headline: `"Interested in the work?"` 
- Sub-line: `"I'm currently on the market and open to conversations about fintech, SaaS, and banking intelligence."` 
- CTA Buttons:
  - `"Connect on LinkedIn"` (primary, filled)
  - `"View GitHub"` (secondary, outlined)
  - `"Send an Email"` (tertiary, text link → mailto)
- Footer: Copyright line, `"Built with React, Vercel, and live FDIC data."`

---

## 3. Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Background | `#0a0f1e` | Page background (obsidian) |
| Surface | `#111827` | Card backgrounds |
| Border | `#1f2937` | Card borders, dividers |
| Accent Blue | `#3b82f6` | CTAs, highlights, links |
| Accent Indigo | `#6366f1` | Gradients, hero |
| Text Primary | `#f9fafb` | Headlines |
| Text Muted | `#9ca3af` | Body copy, subtitles |
| Success Green | `#10b981` | Trust signals, "Live" badges |

### Typography
- **Font**: `Inter` from Google Fonts (weights 400, 600, 700, 900)
- **H1**: 64px / 900 weight / tight tracking
- **H2**: 40px / 700 weight
- **Body**: 16px / 400 weight / 1.75 line height

### Animation Principles (Framer Motion)
- Hero section: fade-in + slide-up entrance on load (300ms delay stagger per element).
- App cards: scroll-triggered `whileInView` fade-in from below.
- Stat numbers in Trust Bar: count-up animation on scroll entry.
- App card hover: subtle `scale(1.02)` + border glow effect.

---

## 4. SEO & Social Sharing
- **`<title>`**: `"FDIC Intelligence Suite | Financial Analytics by Vincent Chamasrour"`
- **Meta Description**: `"A suite of four live fintech applications for banking benchmarking, M&A analysis, sales prospecting, and market mapping — all powered by real FDIC data and Gemini AI."`
- **OG Image**: A dark-mode screenshot montage of the 4 dashboards (1200x630px).
- **`robots.txt`**: `Allow: /` — fully indexable.
- **Canonical URL**: The production Vercel URL.

---

## 5. Non-functional Requirements
- **Performance**: First Contentful Paint (FCP) < 1.5s. Use `next/image` for all screenshots. No unoptimized heavy assets.
- **Responsiveness**: Fully functional at 375px (mobile), 768px (tablet), and 1280px+ (desktop).
- **Accessibility**: All buttons must have `aria-label`. All images must have `alt` text describing the dashboard.
