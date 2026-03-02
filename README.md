# FDIC Intelligence Suite — Landing Page

A premium, single-page marketing site for the FDIC Intelligence Suite — a collection of four interconnected financial analysis tools for banking professionals.

**Live:** https://fdic-suite-landing.vercel.app

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (CI/CD via GitHub)

## The Suite
| # | App | Status |
|---|---|---|
| 01 | Bank Value Benchmark | [Live](https://bank-value-benchmark-mvp.vercel.app) |
| 02 | Bank M&A Radar | [Live](https://bank-ma-radar.vercel.app) |
| 03 | B2B Fintech Prospector | [Live](https://fintechprospector.vercel.app) |
| 04 | De Novo Whitespace Explorer | [Live](https://de-novo-whitespace-explorer.vercel.app) |

## Development

```bash
# Install dependencies
npm install

# Run the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Testing

This project employs a zero-tolerance "Fail Loudly" testing protocol. We use Playwright for all E2E, accessibility, and visual regression tests. **By default, tests run against the live Vercel deployment** to ensure absolute parity with production.

```bash
# Run all tests sequentially
npm run test:e2e

# Run individual suites
npm run test:journey     # Core user flows and outbound links
npm run test:strictness  # Console errors, 200 OK statuses, open graph data
npm run test:a11y        # Accessibility violations using Axe
npm run test:links       # Outbound hyperlink resolution
npm run test:visual      # Visual regression snapshots

# Note: Lighthouse audits the strict performance budget against a LOCAL Next.js production build:
npm run build && npm run start &
npm run test:lighthouse
```

## Vibe Coding Protocols

- **Fail Loudly**: No silent failures. If data or configuration is missing, the build or tests must crash loudly. `next.config.js` does NOT suppress TypeScript or ESLint errors.
- **Live Connections Only**: No mock data. Everything points to real Vercel deployments.
- **E2E Verification**: Code is only considered "done" if the full Playwright suite passes against live components.
