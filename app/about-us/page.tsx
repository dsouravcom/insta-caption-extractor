import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Coffee, Heart, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - IExtract | Elegant Instagram Caption Tool",
    description:
        "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
    alternates: {
        canonical: "https://caption.dsourav.com/about-us",
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                {/* Hero Section */}
                <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -z-10 opacity-30">
                        <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    </div>

                    <div className="text-center mb-20">
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            Welcome to{" "}
                            <span className="text-primary italic">
                                IExtract
                            </span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                            The most elegant way to extract Instagram captions.
                            Simple, fast, and designed with care.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-3 text-sm font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Extracting
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Mission Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                                Simplicity First
                            </h3>
                            <p className="text-muted-foreground font-light">
                                We believe tools should be invisible. No complex
                                menus, no sign-ups, just paste and extract.
                            </p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                                Completely Free
                            </h3>
                            <p className="text-muted-foreground font-light">
                                Built for the community. No paywalls, no hidden
                                fees, just a useful tool for everyone.
                            </p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Coffee className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                                Support Us
                            </h3>
                            <p className="text-muted-foreground font-light">
                                If you love what we do, consider buying us a
                                coffee to keep the servers running smoothly.
                            </p>
                        </div>
                    </div>

                    {/* Story Section */}
                    <div className="bg-surface-secondary rounded-3xl p-8 md:p-12 border border-border-primary">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                <p>
                                    IExtract was born out of frustration. We
                                    needed a simple way to grab captions from
                                    Instagram posts for our own content
                                    planning, but every tool we found was either
                                    paid, riddled with ads, or required a login.
                                </p>
                                <p>
                                    So we built the solution we wanted to use. A
                                    clean, elegant, and fast tool that respects
                                    your privacy and your time.
                                </p>
                                <p>
                                    Today, IExtract helps thousands of creators,
                                    social media managers, and casual users save
                                    time and streamline their workflow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
