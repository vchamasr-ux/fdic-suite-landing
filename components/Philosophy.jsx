'use client';
import { motion } from 'framer-motion';

const PRINCIPLES = [
    {
        keyword: '"Fail Loudly"',
        desc: 'If data is missing, the app crashes visibly. No silent defaults. No fake zeros. Every broken state surfaces as a visible error.',
    },
    {
        keyword: '"Live Connections Only"',
        desc: 'Every metric is sourced from real FDIC API calls. No CSV fallbacks. No mock data. If the source goes down, we fix the source.',
    },
    {
        keyword: '"Pitchbook-Ready"',
        desc: 'Every app exports professional-grade PDFs suitable for boardrooms and investor decks. Built for executives, not just engineers.',
    },
];

export default function Philosophy() {
    return (
        <section className="py-24 px-6" style={{ background: '#0d1320' }}>
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
                            className="p-6 rounded-xl"
                            style={{
                                background: '#111827',
                                border: '1px solid #1f2937',
                                borderLeftWidth: '4px',
                                borderLeftColor: '#3b82f6',
                            }}
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
