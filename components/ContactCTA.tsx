'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-react';

export default function ContactCTA() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('vchamasr@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            className="py-24 px-6 text-center"
            style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #111827 100%)' }}
        >
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Interested in the work?
                </motion.h2>
                <motion.p
                    className="text-gray-400 mb-12 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    I&apos;m currently on the market and open to conversations about fintech, SaaS, and
                    banking intelligence.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="https://www.linkedin.com/in/vincentchamasrour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
                        aria-label="Connect with Vincent on LinkedIn"
                    >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                    </a>
                    <a
                        href="https://github.com/vchamasr-ux"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-gray-300 border transition-all duration-200 hover:border-blue-500 hover:text-white"
                        style={{ borderColor: '#1f2937' }}
                        aria-label="View Vincent's GitHub profile"
                    >
                        <Github size={20} />
                        View GitHub
                    </a>
                    <button
                        onClick={handleCopyEmail}
                        className="flex items-center gap-3 px-8 py-4 text-sm font-medium text-gray-400 transition-colors hover:text-white relative group"
                        aria-label="Copy Vincent's email to clipboard"
                    >
                        <Mail size={18} />
                        vchamasr@gmail.com
                        <span className="flex items-center justify-center p-1.5 rounded-md bg-[#1f2937] text-gray-400 group-hover:text-white transition-colors">
                            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                            <span className="sr-only">{copied ? 'Email address copied' : 'Copy email address'}</span>
                        </span>
                        {/* Accessible live region for screen readers */}
                        <span aria-live="polite" className="sr-only">
                            {copied ? 'Copied to clipboard' : ''}
                        </span>
                        {/* Visual tooltip */}
                        {copied && (
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-400 bg-[#0d1320] px-3 py-1.5 rounded-md shadow-lg border border-[#1f2937]">
                                Copied!
                            </span>
                        )}
                    </button>
                </motion.div>

                <motion.p
                    className="text-gray-600 text-sm mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    © 2026 Vincent Chamasrour · Built with Next.js, Vercel, and live FDIC data.
                </motion.p>
            </div>
        </section>
    );
}
