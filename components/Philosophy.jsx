'use client';
import { motion } from 'framer-motion';

const PRINCIPLES = [
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

export default function Philosophy() {
    return (
        <section className="py-24 px-6 bg-surface-alt">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The Philosophy
                </motion.h2>
                <div className="flex flex-col gap-6">
                    {PRINCIPLES.map((p, i) => (
                        <motion.div
                            key={p.keyword}
                            className="p-6 rounded-xl bg-surface border border-border border-l-4 border-l-accent-blue"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-xl font-black text-white block mb-2">{p.keyword}</span>
                            <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
