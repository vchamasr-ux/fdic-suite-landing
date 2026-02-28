import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    title: 'FDIC Intelligence Suite | Financial Analytics by Vincent Chamasrour',
    description:
        'A suite of four live fintech applications for banking benchmarking, M&A analysis, sales prospecting, and market mapping — all powered by real FDIC data and Gemini AI.',
    metadataBase: new URL('https://fdic-suite-landing.vercel.app'),
    openGraph: {
        type: 'website',
        url: 'https://fdic-suite-landing.vercel.app',
        title: 'FDIC Intelligence Suite | Financial Analytics by Vincent Chamasrour',
        description:
            'Four interconnected fintech tools for banking professionals. Live FDIC data. Gemini AI. No mock data.',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FDIC Intelligence Suite',
        description: 'Four interconnected fintech tools powered by live FDIC data and Gemini AI.',
        images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>{children}</body>
        </html>
    );
}
