'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { APPS } from '@/lib/constants';

export default function AppCards() {
    return (
        <section id="suite" className="py-24 px-6 bg-background">
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
                            className="rounded-xl overflow-hidden flex flex-col bg-surface border border-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
                        >
                            {/* Screenshot Preview */}
                            {app.screenshot ? (
                                <div className="relative w-full h-44 overflow-hidden">
                                    <Image
                                        src={app.screenshot}
                                        alt={`Screenshot of ${app.name} dashboard`}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={i <= 1}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-surface" />
                                </div>
                            ) : (
                                <div className="w-full h-44 flex items-center justify-center bg-surface-alt">
                                    <span className="text-gray-600 text-sm font-medium">In Development</span>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                    App {app.number}
                                </span>
                                <h3 className="text-xl font-bold text-white">{app.name}</h3>
                                <span className="self-start px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/15 text-blue-300">
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
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 bg-gradient-to-br from-accent-blue to-accent-indigo"
                                            aria-label={`Launch ${app.name} application`}
                                        >
                                            Launch App →
                                        </a>
                                    ) : (
                                        <a
                                            href={`mailto:vchamasr@gmail.com?subject=Waitlist:%20${encodeURIComponent(app.name)}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-400 border border-gray-700 transition-all duration-200 hover:border-gray-500 hover:text-white"
                                            aria-label={`Join waitlist for ${app.name}`}
                                        >
                                            Join Waitlist
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
