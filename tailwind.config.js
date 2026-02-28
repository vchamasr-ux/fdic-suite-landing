/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0f1e',
                surface: '#111827',
                border: '#1f2937',
                'accent-blue': '#3b82f6',
                'accent-indigo': '#6366f1',
                'text-primary': '#f9fafb',
                'text-muted': '#9ca3af',
                'success-green': '#10b981',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
