"use client";
import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Tool() {
    const [instagramUrl, setInstagramUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState("");
    const turnstileRef = useRef<any>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        // Clean up any browser extension attributes that might cause hydration issues
        const cleanUpExtensionAttributes = () => {
            const inputs = document.querySelectorAll(
                "input[data-np-intersection-state]"
            );
            inputs.forEach((input) => {
                input.removeAttribute("data-np-intersection-state");
            });
        };

        cleanUpExtensionAttributes();

        // Set up a mutation observer to clean up future additions
        const observer = new MutationObserver(() => {
            cleanUpExtensionAttributes();
        });

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ["data-np-intersection-state"],
        });

        return () => observer.disconnect();
    }, []);

    const extractCaption = async () => {
        await navigator.clipboard.writeText(caption);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 4000);
    };

    const fetchCaption = async () => {
        if (!instagramUrl.trim()) return;

        if (!turnstileToken) {
            setError("Please complete the verification challenge.");
            return;
        }

        setLoading(true);
        setError("");
        setCaption("");
        try {
            const response = await axios.post("/api/caption", {
                url: instagramUrl,
                token: turnstileToken,
            });
            const string = response.data.caption;
            const result = string.slice(2, string.length - 1);
            setCaption(result);

            // Smooth scroll to results after a brief delay
            setTimeout(() => {
                resultsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }, 100);

            // Reset turnstile after successful verification
            setTurnstileToken("");
            turnstileRef.current?.reset();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data?.error) {
                setError(error.response.data.error);
            } else {
                setError(
                    "An unexpected error occurred. Please try again later."
                );
            }
            // Reset turnstile on error
            setTurnstileToken("");
            turnstileRef.current?.reset();
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className=" flex flex-col items-center justify-center pt-10 pb-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-brand-accent/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 rounded-full bg-brand-secondary/5 blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-6 space-y-6">
                    <div className="flex flex-col items-center gap-3">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-border-primary text-sm font-medium text-text-secondary tracking-wide">
                            Free Instagram Caption Extractor
                        </span>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
                            <span className="w-1 h-1 rounded-full bg-success"></span>
                            100% Ads-Free Experience
                            <span className="w-1 h-1 rounded-full bg-success"></span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-primary tracking-tight leading-tight">
                        Extract captions <br />
                        <span className="italic text-text-secondary">
                            effortlessly.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
                        Simply paste your Instagram post URL below and let our
                        tool do the magic. No login required.
                    </p>
                </div>

                {/* Turnstile Widget */}
                {mounted && (
                    <div className="mt-4 flex justify-end mb-1">
                        <Turnstile
                            ref={turnstileRef}
                            siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                            }
                            onSuccess={(token) => setTurnstileToken(token)}
                            onError={() => {
                                setTurnstileToken("");
                                setError(
                                    "Verification failed. Please try again."
                                );
                            }}
                            onExpire={() => setTurnstileToken("")}
                            options={{
                                theme: "auto",
                                size: "normal",
                            }}
                        />
                    </div>
                )}

                <div className="bg-surface/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-2 md:p-4 transition-all duration-300 hover:shadow-3xl">
                    <div className="bg-surface rounded-2xl border border-border-primary overflow-hidden">
                        <div className="p-2 md:p-4 flex flex-col md:flex-row gap-2">
                            <div className="relative grow group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-text-tertiary group-focus-within:text-brand-primary transition-colors duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Paste Instagram URL here..."
                                    value={instagramUrl}
                                    onChange={(e) =>
                                        setInstagramUrl(e.target.value)
                                    }
                                    className="block w-full pl-12 pr-4 py-4 bg-transparent border-none focus:ring-0 text-primary placeholder-text-tertiary text-lg"
                                    suppressHydrationWarning
                                />
                            </div>
                            <button
                                disabled={
                                    loading || !instagramUrl || !turnstileToken
                                }
                                onClick={fetchCaption}
                                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Processing
                                    </span>
                                ) : (
                                    "Extract Caption"
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    {(caption || error) && (
                        <div
                            ref={resultsRef}
                            className="mt-4 animate-in fade-in slide-in-from-bottom-6 duration-500"
                        >
                            {error ? (
                                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {error}
                                </div>
                            ) : (
                                <div className="bg-surface rounded-2xl border border-border-primary overflow-hidden">
                                    <div className="flex justify-between items-center p-4 border-b border-border-secondary bg-surface-secondary/50">
                                        <span className="text-sm font-medium text-text-secondary">
                                            Extracted Content
                                        </span>
                                        <button
                                            onClick={extractCaption}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-primary hover:bg-surface-secondary transition-colors text-sm font-medium text-primary"
                                        >
                                            {copied ? (
                                                <>
                                                    <svg
                                                        className="h-4 w-4 text-success"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                        />
                                                    </svg>
                                                    Copy Text
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <textarea
                                            rows={8}
                                            value={caption}
                                            readOnly
                                            className="w-full bg-transparent border-none focus:ring-0 text-primary resize-none font-mono text-sm leading-relaxed"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
