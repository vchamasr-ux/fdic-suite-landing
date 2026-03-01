'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        if (process.env.NODE_ENV === 'development') {
            console.error('Unhandled application error:', error);
        } else {
            // TODO: Integrate robust remote logging (e.g., Sentry, Datadog)
            // Sentry.captureException(error);
        }
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1e] text-white px-6">
            <div className="max-w-md w-full bg-[#111827] border border-red-500 rounded-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-red-400">Application Error</h2>
                <p className="text-gray-300 text-sm">
                    {error.message || 'An unexpected error occurred. Missing data or a failed connection has triggered the Fail Loudly protocol.'}
                </p>
                <button
                    onClick={() => reset()}
                    className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
