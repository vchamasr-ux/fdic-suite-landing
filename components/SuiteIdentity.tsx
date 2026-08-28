'use client';

import { useEffect, useState } from 'react';

type SuiteUser = { sub: string; name?: string; email?: string; picture?: string };

const AUTH_ORIGIN = 'https://bank-value-benchmark-mvp.vercel.app';
const STORAGE_KEY = 'fdic_suite_user';
const CHECK_KEY = 'fdic_suite_sso_check';
const PRODUCTION_ORIGINS = new Set([
    'https://bank-value-benchmark-mvp.vercel.app',
    'https://bank-ma-radar.vercel.app',
    'https://fintechprospector.vercel.app',
    'https://de-novo-whitespace-explorer.vercel.app',
    'https://fdic-suite-landing.vercel.app',
]);

function cleanParams() {
    const url = new URL(window.location.href);
    ['sso_ticket', 'sso_checked', 'sso_status', 'sso_logged_out'].forEach((key) => url.searchParams.delete(key));
    window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}

function returnUrl() {
    const url = new URL(window.location.href);
    ['sso_ticket', 'sso_checked', 'sso_status', 'sso_logged_out'].forEach((key) => url.searchParams.delete(key));
    return url.toString();
}

function supportsSso() {
    return PRODUCTION_ORIGINS.has(window.location.origin) || ['localhost', '127.0.0.1'].includes(window.location.hostname);
}

export default function SuiteIdentity() {
    const [user, setUser] = useState<SuiteUser | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const resolve = async () => {
            const params = new URLSearchParams(window.location.search);
            if (params.get('sso_logged_out') === '1') {
                localStorage.removeItem(STORAGE_KEY);
                cleanParams();
                sessionStorage.setItem(CHECK_KEY, String(Date.now()));
                setChecking(false);
                return;
            }

            const ticket = params.get('sso_ticket');
            if (ticket) {
                try {
                    const response = await fetch(`${AUTH_ORIGIN}/api/auth/sso-exchange`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ticket }),
                    });
                    const data = await response.json();
                    if (!response.ok || !data.user) throw new Error(data.error || 'Suite sign-in failed');
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.user));
                    setUser(data.user);
                    cleanParams();
                    sessionStorage.setItem(CHECK_KEY, String(Date.now()));
                } catch (error) {
                    console.error('Suite ticket exchange failed:', error);
                    cleanParams();
                } finally {
                    setChecking(false);
                }
                return;
            }

            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    setUser(JSON.parse(stored));
                    setChecking(false);
                    return;
                }
            } catch {
                localStorage.removeItem(STORAGE_KEY);
            }

            if (params.get('sso_status') === 'anonymous' || !supportsSso()) {
                cleanParams();
                sessionStorage.setItem(CHECK_KEY, String(Date.now()));
                setChecking(false);
                return;
            }

            const priorCheck = sessionStorage.getItem(CHECK_KEY);
            if (priorCheck === 'in-progress' || (Number(priorCheck) > 0 && Date.now() - Number(priorCheck) < 30_000)) {
                setChecking(false);
                return;
            }

            const authorize = new URL('/api/auth/sso-authorize', AUTH_ORIGIN);
            authorize.searchParams.set('return_to', returnUrl());
            sessionStorage.setItem(CHECK_KEY, 'in-progress');
            window.location.replace(authorize.toString());
        };
        resolve();
    }, []);

    const signIn = () => {
        const start = new URL('/api/auth/sso-start', AUTH_ORIGIN);
        start.searchParams.set('return_to', returnUrl());
        start.searchParams.set('consent', '1');
        window.location.href = start.toString();
    };

    const signOut = () => {
        localStorage.removeItem(STORAGE_KEY);
        const logout = new URL('/api/auth/sso-logout', AUTH_ORIGIN);
        logout.searchParams.set('return_to', `${window.location.origin}/`);
        window.location.href = logout.toString();
    };

    if (checking) return <span className="hidden sm:inline text-xs text-gray-500">Checking sign-in…</span>;

    return user ? (
        <button onClick={signOut} className="px-3 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10" title="Sign out of the FDIC Intelligence Suite">
            {user.name?.split(' ')[0] || 'Account'} · Sign out
        </button>
    ) : (
        <button onClick={signIn} className="px-3 py-2 rounded-lg text-xs font-semibold text-blue-200 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20">
            Sign in
        </button>
    );
}
