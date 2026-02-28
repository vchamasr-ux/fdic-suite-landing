'use client';
import { motion } from 'framer-motion';

const STEPS = [
    {
        icon: '🏦',
        title: 'FDIC API',
        desc: 'Live Call Report data ingested in real-time from the FDIC public API. Every metric is sourced from 4,500+ active institutions, updated quarterly.',
    },
    {
        icon: '⚙️',
        title: 'KPI Engine',
        desc: 'Client-side computation of 10+ financial metrics — ROA, ROE, NIM, Efficiency Ratio, Tier 1 Capital — applied across dynamically selected peer groups.',
    },
    {
        icon: '🤖',
        title: 'Gemini AI',
        desc: 'Context-aware analysis, executive briefs, and outreach generation — all grounded in the live financial data, never hallucinated.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6" style={{ background: '#0d1320' }}>
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    How It Works
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl"
                            style={{ background: '#111827', border: '1px solid #1f2937' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="text-4xl">{step.icon}</div>
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
