"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tool() {
    const [instagramUrl, setInstagramUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

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
        setLoading(true);
        setError("");
        setCaption("");
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}`,
                {
                    url: instagramUrl,
                }
            );
            const string = response.data.caption;
            const result = string.slice(2, string.length - 1);
            setCaption(result);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data?.error) {
                setError(error.response.data.error);
            } else {
                setError(
                    "An unexpected error occurred. Please try again later."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-6 md:py-14 bg-secondary transition-colors duration-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6 md:mb-12">
                    <h2 className="text-3xl font-bold">Try It For Free</h2>
                    <h1 className="mt-4 text-xl text-secondary">
                        Extract Instagram captions easily with IExtract by
                        pasting the post URL
                    </h1>
                </div>

                <div className="bg-surface rounded-2xl shadow-custom-xl overflow-hidden transition-colors duration-200">
                    {/* <!-- Input Form --> */}
                    <div className="p-6 sm:p-10 border-b border-secondary">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-muted"
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
                                    placeholder="Paste Instagram post URL here"
                                    value={instagramUrl}
                                    onChange={(e) =>
                                        setInstagramUrl(e.target.value)
                                    }
                                    className="block w-full pl-10 pr-4 py-2 md:py-4 border border-primary rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-surface transition-colors duration-200"
                                    suppressHydrationWarning
                                />
                            </div>
                            <button
                                disabled={loading || !instagramUrl}
                                onClick={fetchCaption}
                                className="px-8 cursor-pointer py-2 md:py-4 bg-brand-gradient text-inverse font-medium rounded-lg hover:shadow-custom-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition duration-300"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-inverse"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <span className="text-white">Extract Caption</span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* <!-- Results Section --> */}
                    <div className="px-6 py-2 md:px-10 md:py-5 bg-secondary transition-colors duration-200">
                        {error ? (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 text-red-700 dark:text-red-400 rounded">
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-error mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            </div>
                        ) : null}

                        <div className="mb-4 md:mb-6">
                            <div className="flex justify-between items-center mb-2 md:mb-4">
                                <h3 className="md:text-lg font-semibold text-secondary">
                                    Extracted Caption
                                </h3>
                                <button
                                    onClick={extractCaption}
                                    className="inline-flex items-center px-4 py-2 border border-primary shadow-custom text-sm font-medium rounded-md text-secondary bg-surface hover-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                                    disabled={!caption || loading}
                                >
                                    {copied ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-success"
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
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-muted"
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
                                    )}
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                            <div className="bg-surface rounded-lg border border-secondary shadow-custom transition-colors duration-200">
                                <textarea
                                    rows={10}
                                    value={caption}
                                    className="w-full px-4 py-3 rounded-lg bg-transparent focus:outline-none"
                                    disabled
                                ></textarea>
                            </div>
                            {caption && !error ? (
                                <div className="mt-4 flex items-center text-sm text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-brand"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>
                                        {caption
                                            ? "Tap 'Copy to Clipboard' to use your caption anywhere."
                                            : "Enter an Instagram URL above to extract the caption."}
                                    </span>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
