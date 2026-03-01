'use client';
import { motion } from 'framer-motion';

import { STACK } from '@/lib/constants';

export default function TheStack() {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-white text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Built With
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {STACK.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            className="px-6 py-3 rounded-full text-sm font-medium text-gray-300 bg-surface border border-border cursor-default"
                            style={{
                                background: '#111827',
                                border: '1px solid #1f2937',
                                borderLeft: `3px solid ${tech.color}`
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ borderColor: tech.color, color: '#ffffff', background: '#1f2937' }}
                        >
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}80` }}
                            />
                            {tech.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
