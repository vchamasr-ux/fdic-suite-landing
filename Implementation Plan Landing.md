# Implementation Plan: FDIC Intelligence Suite Landing Page

## User Review Required

> [!IMPORTANT]
> **Directory**: I propose scaffolding this project at: `c:\Users\vcham\Documents\VS Code Programs\fdic-suite-landing`
> 
> **Framework Choice**: Unlike the inner apps, this landing page will use **Next.js 14 (App Router)** instead of Vite. This is intentional — it provides critical static generation (SSG) for SEO and fast initial page loads when shared on LinkedIn or in resumes. Please confirm this is acceptable before execution begins.

> [!WARNING]
> The agent will need **real screenshots** of the 4 deployed apps to populate the AppCard previews. Before kicking off Section 3 (App Cards), the agent should use the browser tool to capture screenshots of:
> - `https://bank-value-benchmark-mvp.vercel.app/`
> - `https://bank-ma-radar.vercel.app/`
> - The B2B Prospector and De Novo apps once deployed.
> 
> These screenshots must be placed into `/public/screenshots/` before building the card components.

---

## Proposed Changes

### Phase 1: Project Scaffold
- Confirm the target directory and run:
  ```bash
  npx -y create-next-app@latest fdic-suite-landing --typescript=false --tailwind --app --src-dir=false --no-import-alias
  ```
- Install animation and icon libraries:
  ```bash
  npm install framer-motion lucide-react
  ```
- Set the Google Fonts import for `Inter` in `app/layout.jsx` using `next/font/google`.
- Establish the global dark theme in `globals.css`: background `#0a0f1e`, text `#f9fafb`.

### Phase 2: Design System & Layout Shell
- Build the root `app/layout.jsx` with:
  - `Inter` font loaded via `next/font`.
  - Full SEO meta tags: `<title>`, `<meta name="description">`, Open Graph (og:title, og:description, og:image), Twitter Card.
  - The Canonical URL pointing to the production Vercel domain.
- Build the single-page `app/page.jsx` and compose all section components in order.
- Create `globals.css` with Tailwind base and custom utility classes for gradient text (`.gradient-text`) and animated shimmer effects.

### Phase 3: Hero Section (`components/Hero.jsx`)
- Full-viewport height (`min-h-screen`) dark section.
- Animated headline: Uses `framer-motion` `motion.h1` with `initial={{ opacity: 0, y: 40 }}` and `animate={{ opacity: 1, y: 0 }}` with a staggered entrance for H1, sub-headline, and CTA button.
- Background ambient texture: An SVG `<pattern>` element wrapping the hero creating a subtle grid overlay at 5% opacity.
- The hero gradient: `bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#0f172a]`.
- Trust badge: A small pill below the CTA — `"Live data. Real institutions. Zero mock data."` styled with a green pulse dot animation.

### Phase 4: Trust Signals Bar (`components/TrustBar.jsx`)
- A horizontal strip with a `border-y border-[#1f2937]` separator.
- Four stat items: `4,500+ Banks`, `16 Quarters`, `100% Live FDIC`, `Gemini 2.5 AI`.
- Each number uses a **count-up animation** triggered by `framer-motion`'s `whileInView`. Use `useMotionValue` and `useTransform` to animate the number from `0` to the target value.

### Phase 5: App Cards (`components/AppCard.jsx`)
- **Card grid**: `grid grid-cols-1 md:grid-cols-2 gap-6` in the parent section.
- Each card: dark surface (`bg-[#111827]`), `border border-[#1f2937]`, rounded-xl.
- **Hover effect**: `whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}` via Framer Motion.
- Card anatomy from top to bottom:
  1. Screenshot preview — `next/image` with `fill` layout.
  2. `App 0X` tag in muted text.
  3. App name in white bold.
  4. Persona badge: pill styled `bg-blue-900/40 text-blue-300`.
  5. 2-sentence value prop.
  6. 3-bullet feature list with `✓` checkmarks.
  7. `"Launch App →"` button linking to the live URL.

**App Card Data (hardcoded constants in `page.jsx`):**
```js
const APPS = [
  {
    number: "01",
    name: "Bank Value Benchmark",
    url: "https://bank-value-benchmark-mvp.vercel.app",
    persona: "For: Community Bank CEOs & CFOs",
    pitch: "Transform raw FDIC Call Report data into boardroom-ready intelligence. Benchmark your bank against 20 dynamically generated peers across 6 critical KPIs — in real time.",
    features: [
      "Live peer benchmarking with percentile gauges",
      "16-quarter sparkline trend analysis",
      "AI Executive Briefs via Gemini 2.5 Flash"
    ],
    screenshot: "/screenshots/benchmark.png"
  },
  {
    number: "02",
    name: "Bank M&A Radar",
    url: "https://bank-ma-radar.vercel.app",
    persona: "For: M&A Advisory Teams & Investment Bankers",
    pitch: "Identify acquisition targets, model synergies, and generate pitchbooks — all from live FDIC data. Go from target search to pro forma PDF in one session.",
    features: [
      "Geographic target radar with asset-size filtering",
      "Multi-year synergy modeler with cost reduction paths",
      "Pitchbook PDF export with AI Deal Summary"
    ],
    screenshot: "/screenshots/ma_radar.png"
  },
  {
    number: "03",
    name: "B2B Fintech Prospector",
    url: "#",  // Update once deployed
    persona: "For: Fintech CROs & VP Sales",
    pitch: "Stop cold-calling blind. Filter the entire FDIC universe by your buyers' pain points and auto-generate personalized outreach emails for the highest-value targets.",
    features: [
      "Pain-point filters: Efficiency, Liquidity, NIM compression",
      "Z-score ranked prospect leaderboard",
      "AI cold email generator personalized to each bank's KPIs"
    ],
    screenshot: "/screenshots/prospector.png"
  },
  {
    number: "04",
    name: "De Novo Whitespace Explorer",
    url: "#",  // Update once deployed
    persona: "For: Private Equity & Bank Founders",
    pitch: "Consolidation has left entire markets starving for a local bank. Discover exactly where — a live choropleth map revealing geographic whitespace based on deposit density and competitor count.",
    features: [
      "Live US heatmap colored by Whitespace Score",
      "Market Scorecard with deposit CAGR and HHI concentration",
      "De Novo projection modeler for Day 1 / Year 3 balance sheet"
    ],
    screenshot: "/screenshots/denovo.png"
  }
];
```

### Phase 6: Remaining Sections
- **`components/HowItWorks.jsx`**: A 3-column grid with `FDIC API → KPI Engine → Gemini AI` flow, separated by animated arrow connectors. Scroll-triggered entrance.
- **`components/TheStack.jsx`**: Logo grid (SVG or `<img>` tags) for: React, Next.js, Tailwind, Recharts, Gemini, Vercel, LinkedIn OAuth. Subtle infinite-scroll marquee animation.
- **`components/Philosophy.jsx`**: Bold typographic section. Dark card with a left `border-l-4 border-blue-500` accent, each principle on its own line with a bold keyword and explanatory sentence.
- **`components/ContactCTA.jsx`**: Final gradient section. LinkedIn, GitHub, and email buttons with `lucide-react` icons. Hard-code the real LinkedIn URL, GitHub URL, and Email address here.

### Phase 7: Deployment
- Add `vercel.json` configuring the project root.
- Run `vercel --prod` to deploy to a clean project URL (e.g., `fdic-suite.vercel.app`).
- Update all 4 inner apps to include a small "← Back to Suite" nav link pointing to the landing page URL.

---

## Verification Plan

### Manual Visual Verification (Browser Tool)
- Load the landing page at `http://localhost:3000`.
- **Success Criteria 1**: Hero section renders with dark background, animated headline, and green trust badge live on page load.
- **Success Criteria 2**: Scrolling past the hero reveals the Trust Bar with stat numbers counting up.
- **Success Criteria 3**: The 4 App Cards render with real screenshots (not broken images), and all hover animations with the blue border glow work.
- **Success Criteria 4**: All 2 live app links (`bank-value-benchmark-mvp.vercel.app` and `bank-ma-radar.vercel.app`) correctly open in a new tab.
- **Success Criteria 5**: The Contact CTA section contains valid, working LinkedIn and GitHub links.

### Lighthouse Score Target
- Performance: > 90
- SEO: > 95 (required for LinkedIn sharing)
- Accessibility: > 85

### Fail Loudly Check
- All `next/image` components must have explicit `width` and `height` props — no layout shift.
- If a screenshot file is missing from `/public/screenshots/`, the agent must throw an explicit build error, not render a blank card.
