'use client';
import { motion } from 'framer-motion';
import { Database, Activity, Sparkles, ArrowRight } from 'lucide-react';

const STEPS = [
    {
        icon: Database,
        title: 'FDIC API',
        desc: 'Live Call Report data ingested in real-time from the FDIC public API. Every metric is sourced from 4,500+ active institutions, updated quarterly.',
    },
    {
        icon: Activity,
        title: 'KPI Engine',
        desc: 'Client-side computation of 10+ financial metrics — ROA, ROE, NIM, Efficiency Ratio, Tier 1 Capital — applied across dynamically selected peer groups.',
    },
    {
        icon: Sparkles,
        title: 'Gemini AI',
        desc: 'Context-aware analysis, executive briefs, and outreach generation — all grounded in the live financial data, never hallucinated.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 bg-surface-alt">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    How It Works
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-surface border border-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
                            >
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-wide">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

                            {/* Connectors (desktop only) */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-gray-600">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
