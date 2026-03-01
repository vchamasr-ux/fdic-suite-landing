export interface AppProps {
    number: string;
    name: string;
    url: string | null;
    persona: string;
    pitch: string;
    features: string[];
    screenshot: string | null;
}

export const APPS: AppProps[] = [
    {
        number: '01',
        name: 'Bank Value Benchmark',
        url: 'https://bank-value-benchmark-mvp.vercel.app',
        persona: 'For: Community Bank CEOs & CFOs',
        pitch:
            'Transform raw FDIC Call Report data into boardroom-ready intelligence. Benchmark your bank against 20 dynamically generated peers across 6 critical KPIs — in real time.',
        features: [
            'Live peer benchmarking with percentile gauges',
            '16-quarter sparkline trend analysis',
            'AI Executive Briefs via Gemini 2.5 Flash',
        ],
        screenshot: '/screenshots/benchmark.png',
    },
    {
        number: '02',
        name: 'Bank M&A Radar',
        url: 'https://bank-ma-radar.vercel.app',
        persona: 'For: M&A Advisory Teams & Investment Bankers',
        pitch:
            'Identify acquisition targets, model synergies, and generate pitchbooks — all from live FDIC data. Go from target search to pro forma PDF in one session.',
        features: [
            'Geographic target radar with asset-size filtering',
            'Multi-year synergy modeler with cost reduction paths',
            'Pitchbook PDF export with AI Deal Summary',
        ],
        screenshot: '/screenshots/ma_radar.png',
    },
    {
        number: '03',
        name: 'B2B Fintech Prospector',
        url: 'https://fintechprospector.vercel.app',
        persona: 'For: Fintech CROs & VP Sales',
        pitch:
            "Stop cold-calling blind. Filter the entire FDIC universe by your buyers' pain points and auto-generate personalized outreach emails for the highest-value targets.",
        features: [
            'Pain-point filters: Efficiency, Liquidity, NIM compression',
            'Z-score ranked prospect leaderboard',
            "AI cold email generator personalized to each bank's KPIs",
        ],
        screenshot: '/screenshots/prospector.png',
    },
    {
        number: '04',
        name: 'De Novo Whitespace Explorer',
        url: 'https://de-novo-whitespace-explorer.vercel.app',
        persona: 'For: Private Equity & Bank Founders',
        pitch:
            'Consolidation has left entire markets starving for a local bank. Discover exactly where — a live choropleth map revealing geographic whitespace based on deposit density.',
        features: [
            'Live US heatmap colored by Whitespace Score',
            'Market Scorecard with deposit CAGR and HHI concentration',
            'De Novo projection modeler for Day 1 / Year 3 balance sheet',
        ],
        screenshot: '/screenshots/denovo.png',
    },
];

export interface Step {
    iconSrc: string;
    title: string;
    desc: string;
}

export const STEPS: Step[] = [
    {
        iconSrc: '/images/icon-database.png',
        title: 'FDIC API',
        desc: 'Live Call Report data ingested in real-time from the FDIC public API. Every metric is sourced from 4,500+ active institutions, updated quarterly.',
    },
    {
        iconSrc: '/images/icon-compute.png',
        title: 'KPI Engine',
        desc: 'Client-side computation of 10+ financial metrics — ROA, ROE, NIM, Efficiency Ratio, Tier 1 Capital — applied across dynamically selected peer groups.',
    },
    {
        iconSrc: '/images/icon-ai.png',
        title: 'Gemini AI',
        desc: 'Context-aware analysis, executive briefs, and outreach generation — all grounded in the live financial data, never hallucinated.',
    },
];

export interface Principle {
    keyword: string;
    desc: string;
}

export const PRINCIPLES: Principle[] = [
    {
        keyword: 'Uncompromising Data Integrity',
        desc: "We never guess, approximate, or substitute missing data. If a metric isn't available, we flag it immediately—ensuring you never make a decision based on a silent error.",
    },
    {
        keyword: 'Live Connections Only',
        desc: 'Every metric in our suite is sourced directly from live FDIC API calls. No stale CSVs, no manual updates, and no mock data. When the FDIC updates, your dashboard updates.',
    },
    {
        keyword: 'Boardroom-Ready Exports',
        desc: 'Stop taking screenshots of dashboards. Every report exports as a professional-grade, high-fidelity PDF instantly. Built for executives, investors, and boardrooms—not just analysts.',
    },
];

export interface Tech {
    name: string;
    color: string;
}

export const STACK: Tech[] = [
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Tailwind CSS', color: '#38bdf8' },
    { name: 'Framer Motion', color: '#f5108c' },
    { name: 'Recharts', color: '#22d3ee' },
    { name: 'Gemini AI', color: '#4285f4' },
    { name: 'Vercel', color: '#ffffff' },
    { name: 'FDIC API', color: '#10b981' }, // Success green
];

export interface Stat {
    value: number;
    display: string;
    label: string;
    prefix: string;
    suffix: string;
}

export const STATS: Stat[] = [
    { value: 4500, display: '4,500+', label: 'Banks Analyzed', prefix: '', suffix: '+' },
    { value: 16, display: '16', label: 'Quarters of History', prefix: '', suffix: '' },
    { value: 100, display: '100%', label: 'Live FDIC Data', prefix: '', suffix: '%' },
];
