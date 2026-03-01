'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['suite', 'architecture', 'philosophy', 'contact'];
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section top is past a certain threshold from the top of the viewport
                    if (rect.top <= 200) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger immediately
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Hide header if scrolling down and past 150px
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Add blur/background only after scrolling down a bit
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0a0f1e]/80 backdrop-blur-md border-b border-[#1f2937] shadow-lg"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <a href="#" className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-indigo flex items-center justify-center text-xs text-white">
                        V
                    </span>
                    <span className="hidden sm:inline-block">FDIC Intelligence Suite</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#suite" className={`text-sm font-medium transition-colors ${activeSection === 'suite' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                        The Suite
                    </a>
                    <a href="#architecture" className={`text-sm font-medium transition-colors ${activeSection === 'architecture' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                        Architecture
                    </a>
                    <a href="#philosophy" className={`text-sm font-medium transition-colors ${activeSection === 'philosophy' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>
                        Philosophy
                    </a>
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200"
                >
                    Contact
                </a>
            </div>
        </motion.header>
    );
}
