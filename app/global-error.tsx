'use client'; // Error components must be Client Components

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1e] text-white px-6">
                    <div className="max-w-md w-full bg-[#111827] border border-red-500 rounded-xl p-8 text-center space-y-6">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🛑</span>
                        </div>
                        <h2 className="text-2xl font-bold text-red-500">Critical System Error</h2>
                        <p className="text-gray-300 text-sm">
                            {error.message || 'A catastrophic error occurred at the root level. The system has purposefully halted execution.'}
                        </p>
                        <button
                            onClick={() => reset()}
                            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Recover Application
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
