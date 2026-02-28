'use client';
import { motion } from 'framer-motion';

const STATS = [
    { value: '4,500+', label: 'Banks Analyzed' },
    { value: '16', label: 'Quarters of History' },
    { value: '100%', label: 'Live FDIC Data' },
    { value: 'Gemini 2.5', label: 'AI Engine' },
];

export default function TrustBar() {
    return (
        <section
            className="border-y py-10 px-6"
            style={{ borderColor: '#1f2937', background: '#0d1320' }}
        >
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div
                            className="text-3xl font-black mb-1"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
