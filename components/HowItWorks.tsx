'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { STEPS } from '@/lib/constants';

export default function HowItWorks() {
    return (
        <section id="architecture" className="py-16 md:py-20 px-6 bg-surface-alt">
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
                                className="w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl relative overflow-hidden"
                                style={{ background: '#0a0f1e', border: '1px solid #1f2937' }}
                            >
                                <Image
                                    src={step.iconSrc}
                                    alt={step.title}
                                    fill
                                    className="object-cover hover:opacity-90 transition-opacity"
                                />
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
