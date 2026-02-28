# FDIC Intelligence Suite — Landing Page Architecture

## Vibe Coding Protocols
- "Fail Loudly": No silent JS errors. Every broken link or failed asset load must surface a visible DOM error.
- Live Connections Only: No mock data. All live app links point to real deployed Vercel URLs.
- E2E Verification: A feature is only "Done" when the page visually renders and all 4 app links open correctly in a browser.

---

## Overview
This is a **single-page marketing & portfolio site** that acts as the unified front door for the entire FDIC Intelligence Suite — a collection of four interconnected financial analysis applications built by Vincent Chamasrour. It is designed to impress two audiences simultaneously:
1. **Executives at hiring companies** (Fintech, PE, SaaS) evaluating Vincent's depth as a product engineer.
2. **Domain professionals** (Bankers, CROs, Strategy Teams) who are actual end-users of these tools.

The page establishes a single, coherent product narrative: *"The only end-to-end intelligence platform for banking professionals — from benchmarking performance to executing M&A."*

---

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | **Next.js 14 (App Router)** for SSG, SEO, and performance |
| Styling | **Tailwind CSS v4** — dark financial aesthetic |
| Animations | **Framer Motion** — scroll-triggered reveals, hero entrance |
| Icons | **Lucide React** |
| Fonts | **Inter** (Google Fonts) — the industry standard for fintech SaaS |
| Deployment | **Vercel** — same pipeline as all existing apps |

> **Why Next.js over Vite for this project?** The landing page is a public-facing marketing site. Next.js provides static site generation (SSG) for zero-JS load time and proper SEO meta tags — critical since this page will be linked from LinkedIn and resumes. The 4 inner apps can remain on Vite.

---

## Information Architecture (Page Sections)

The page must flow as a single, scrollable narrative — no sub-pages needed.

```
1. HERO                     (Above the fold — the pitch)
2. TRUST SIGNALS            (Data and tech credibility)
3. THE SUITE                (The 4 app cards — core content)
4. HOW IT WORKS             (Architecture diagram / narrative)
5. TECH STACK SHOWCASE      (Visual tech logo bar)
6. ABOUT / PHILOSOPHY       ("Fail Loudly" and the methodology)
7. CTA / CONTACT            (LinkedIn, GitHub, Email)
```

---

## Folder Structure
```
/landing-page
├── app/
│   ├── layout.jsx          # Root layout: Inter font, meta tags, OG Image
│   ├── page.jsx            # Single-page composition of all sections
│   └── globals.css         # Tailwind base + custom animation utilities
├── components/
│   ├── Hero.jsx            # Full-viewport hero with animated headline
│   ├── TrustBar.jsx        # FDIC data scope stats (e.g., "4,500+ Banks Analyzed")
│   ├── AppCard.jsx         # Reusable card for each of the 4 apps
│   ├── TheStack.jsx        # Tech logos section
│   ├── Philosophy.jsx      # "Fail Loudly" principle highlight section
│   └── ContactCTA.jsx      # Final CTA with LinkedIn / GitHub / Email links
├── public/
│   ├── og-image.png        # Open Graph image for LinkedIn / Twitter sharing
│   └── screenshots/        # App screenshots for AppCard visual previews
└── next.config.js
```

---

## Key Design Decisions
1. **Dark Mode Only**: A deep slate/obsidian (`#0a0f1e`) background. Financial professionals associate dark UIs with Bloomberg, Reuters, and trading terminals. It signals seriousness and expertise.
2. **Single Primary CTA**: Every section funnels to one action — contacting Vincent / connecting on LinkedIn. No dilution.
3. **App Cards First, Fluff Later**: The 4 app cards are placed in Section 3, just after the trust bar. Visitors who are domain experts will scroll past the hero and immediately identify the tools relevant to them.
4. **No Auth Required**: This is a fully public, static site. All links go to the deployed, live versions of each app.
