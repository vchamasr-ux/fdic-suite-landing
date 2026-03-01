'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-950"
        >
            {/* Ambient grid overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* AI Generated Abstract Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
                <Image
                    src="/images/hero-bg.png"
                    alt="Abstract premium tech background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto">
                <motion.h1
                    className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    The{' '}
                    <span className="bg-gradient-to-br from-accent-blue to-accent-indigo text-transparent bg-clip-text">
                        FDIC Intelligence
                    </span>{' '}
                    Suite.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                >
                    Four interconnected tools for the modern banking strategist. Built on live FDIC data,
                    powered by Gemini AI.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-4"
                >
                    <a
                        href="#suite"
                        className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 bg-gradient-to-br from-accent-blue to-accent-indigo shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                        aria-label="Explore the FDIC Intelligence Suite"
                    >
                        Explore the Suite →
                    </a>

                    {/* Trust badge */}
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                        <span
                            className="inline-block w-2 h-2 rounded-full bg-emerald-400"
                            style={{ animation: 'pulse 2s infinite' }}
                        />
                        Live data. Real institutions. Zero mock data.
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
