import { memo } from "react";

const FEATURES_DATA = [
    {
        title: "Lightning Fast",
        description:
            "Extract captions in milliseconds. Optimized for speed and efficiency.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
    },
    {
        title: "Secure & Private",
        description:
            "We don't store your data. Your privacy is our top priority.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
            </svg>
        ),
    },
    {
        title: "No Login Required",
        description:
            "Start using immediately. No accounts, no sign-ups, no hassle.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
        ),
    },
    {
        title: "100% Free",
        description:
            "Completely free forever. No hidden fees or premium tiers.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
] as const;

const Features = memo(function Features() {
    return (
        <section id="features" className="py-24 bg-surface-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4 space-y-8">
                        <h2 className="text-4xl font-serif font-medium text-primary leading-tight">
                            Designed for <br />
                            <span className="italic text-text-secondary">
                                simplicity.
                            </span>
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            We've stripped away the clutter to provide a tool
                            that does one thing perfectly.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FEATURES_DATA.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group p-8 rounded-3xl bg-surface border border-border-primary hover:border-brand-secondary/20 transition-all duration-500 hover:shadow-xl ${
                                        index % 2 === 1
                                            ? "md:translate-y-12"
                                            : ""
                                    }`}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-surface-secondary flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-medium mb-3 text-primary">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Features;
