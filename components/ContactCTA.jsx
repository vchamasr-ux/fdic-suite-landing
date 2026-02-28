'use client';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function ContactCTA() {
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
                    <a
                        href="mailto:vchamasr@gmail.com"
                        className="flex items-center gap-3 px-8 py-4 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                        aria-label="Send Vincent an email"
                    >
                        <Mail size={18} />
                        vchamasr@gmail.com
                    </a>
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
