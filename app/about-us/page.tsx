import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Code2, Coffee, Heart, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Story Behind IExtract - Built by Sourav",
    description:
        "Meet the solo developer behind IExtract. A mission to provide a clean, ads-free Instagram caption extraction tool for everyone.",
    alternates: {
        canonical: "https://caption.dsourav.com/about-us",
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="grow">
                {/* Hero Section - SaaS Style */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Ambient Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-primary text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-8 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            A Solo Developer Project
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-8 tracking-tight leading-[1.1]">
                            Built for those who <br />
                            <span className="italic text-text-secondary">
                                hate annoying ads.
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            Hi, I&apos;m Sourav. I built IExtract because I
                            believe the best tools should be simple, fast, and
                            most importantly—uninterrupted.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-2xl text-primary-foreground bg-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Try the Tool
                                <Zap className="ml-2 h-4 w-4 fill-current" />
                            </Link>
                            <a
                                href="https://ko-fi.com/souravdotdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-2xl bg-surface border border-border-primary hover:bg-surface-secondary transition-all duration-300"
                            >
                                <Coffee className="mr-2 h-4 w-4" />
                                Support My Work
                            </a>
                        </div>
                    </div>
                </section>

                {/* The Philosophy Section */}
                <section className="py-24 bg-surface-secondary/50 border-y border-border-primary">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-serif text-4xl font-medium text-foreground mb-6">
                                    Why I built this.
                                </h2>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        Like you, I was tired of
                                        &quot;free&quot; tools that were
                                        impossible to use. Pop-ups every 5
                                        seconds, shady redirects, and slow
                                        loading times.
                                    </p>
                                    <p>
                                        As a developer, I knew there was a
                                        better way. I wanted to create a space
                                        where you can just get your work done
                                        and leave—no strings attached.
                                    </p>
                                    <div className="pt-4 flex items-center gap-4">
                                        <p className="text-sm font-medium text-foreground">
                                            Trusted by 10,000+ monthly users
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-surface rounded-3xl border border-border-primary shadow-sm">
                                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-serif text-lg font-semibold mb-2">
                                        Privacy First
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-light">
                                        No tracking, no data selling. Your links
                                        stay yours.
                                    </p>
                                </div>
                                <div className="p-6 bg-surface rounded-3xl border border-border-primary shadow-sm">
                                    <Zap className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-serif text-lg font-semibold mb-2">
                                        Pure Speed
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-light">
                                        Optimized code for near-instant
                                        extraction.
                                    </p>
                                </div>
                                <div className="p-6 bg-surface rounded-3xl border border-border-primary shadow-sm">
                                    <Code2 className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-serif text-lg font-semibold mb-2">
                                        Solo Built
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-light">
                                        Hand-crafted with attention to every
                                        pixel.
                                    </p>
                                </div>
                                <div className="p-6 bg-surface rounded-3xl border border-border-primary shadow-sm">
                                    <Sparkles className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="font-serif text-lg font-semibold mb-2">
                                        Zero Ads
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-light">
                                        Clean interface. No distractions, ever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personal Note Section */}
                <section className="py-24 max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block p-3 rounded-2xl bg-primary/5 mb-8">
                        <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
                        A personal note from Sourav
                    </h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed italic mb-12">
                        &quot;IExtract isn&apos;t a big company. It&apos;s just
                        me, sitting in my room, trying to make the web a little
                        bit cleaner. Every time someone uses this tool and saves
                        a few minutes of their day, it makes the late-night
                        coding sessions worth it.&quot;
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-surface-tertiary border border-border-primary flex items-center justify-center mb-4 overflow-hidden">
                            <span className="text-xl font-serif font-bold text-primary">
                                S
                            </span>
                        </div>
                        <p className="font-serif text-lg font-semibold text-foreground">
                            Sourav
                        </p>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">
                            Solo Developer
                        </p>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pb-24 px-4">
                    <div className="max-w-5xl mx-auto bg-surface border border-border-primary rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-soft">
                        {/* Decorative background elements that work in both themes */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        </div>

                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 relative z-10">
                            Ready to extract?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto font-light relative z-10 leading-relaxed">
                            Join thousands of creators who prefer a cleaner,
                            faster, and ads-free way to work with Instagram
                            content.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-medium rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Get Started Now
                            </Link>
                            <a
                                href="https://ko-fi.com/souravdotdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-4 bg-surface-secondary border border-border-primary text-foreground font-medium rounded-2xl hover:bg-surface-tertiary transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Coffee className="w-4 h-4" />
                                Buy me a coffee
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
