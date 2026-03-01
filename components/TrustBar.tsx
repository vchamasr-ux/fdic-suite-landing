'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

import { STATS } from '@/lib/constants';

interface CountUpProps {
    value: number;
    suffix: string;
    prefix: string;
}

function CountUp({ value, suffix, prefix }: CountUpProps) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (v) =>
        Math.round(v).toLocaleString()
    );
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (isInView) {
            animate(motionValue, value, { duration: 1.8, ease: 'easeOut' });
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function TrustBar() {
    return (
        <section
            className="border-y py-10 px-6"
            style={{ borderColor: '#1f2937', background: '#0d1320' }}
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                            <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
