'use client';
import { motion } from 'framer-motion';

const APPS = [
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
    },
    {
        number: '03',
        name: 'B2B Fintech Prospector',
        url: null,
        persona: 'For: Fintech CROs & VP Sales',
        pitch:
            "Stop cold-calling blind. Filter the entire FDIC universe by your buyers' pain points and auto-generate personalized outreach emails for the highest-value targets.",
        features: [
            'Pain-point filters: Efficiency, Liquidity, NIM compression',
            'Z-score ranked prospect leaderboard',
            "AI cold email generator personalized to each bank's KPIs",
        ],
    },
    {
        number: '04',
        name: 'De Novo Whitespace Explorer',
        url: null,
        persona: 'For: Private Equity & Bank Founders',
        pitch:
            'Consolidation has left entire markets starving for a local bank. Discover exactly where — a live choropleth map revealing geographic whitespace based on deposit density.',
        features: [
            'Live US heatmap colored by Whitespace Score',
            'Market Scorecard with deposit CAGR and HHI concentration',
            'De Novo projection modeler for Day 1 / Year 3 balance sheet',
        ],
    },
];

export default function AppCards() {
    return (
        <section id="suite" className="py-24 px-6" style={{ background: '#0a0f1e' }}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The Suite
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Four specialized tools. One shared intelligence engine.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {APPS.map((app, i) => (
                        <motion.div
                            key={app.number}
                            className="rounded-xl p-6 flex flex-col gap-4"
                            style={{ background: '#111827', border: '1px solid #1f2937' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                        >
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                App {app.number}
                            </span>
                            <h3 className="text-xl font-bold text-white">{app.name}</h3>
                            <span
                                className="self-start px-3 py-1 rounded-full text-xs font-medium"
                                style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd' }}
                            >
                                {app.persona}
                            </span>
                            <p className="text-gray-400 text-sm leading-relaxed">{app.pitch}</p>
                            <ul className="flex flex-col gap-2">
                                {app.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-4">
                                {app.url ? (
                                    <a
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                                        style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
                                        aria-label={`Launch ${app.name} application`}
                                    >
                                        Launch App →
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-500 border border-gray-700">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
