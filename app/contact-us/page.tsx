import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Github, Mail, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - IExtract | Elegant Instagram Caption Tool",
    description:
        "Have questions or feedback? Get in touch with the IExtract team. We'd love to hear from you.",
    alternates: {
        canonical: "https://caption.dsourav.com/contact-us",
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
                    {/* Decorative background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl opacity-30 pointer-events-none">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-200/50 rounded-full blur-3xl" />
                    </div>

                    <div className="text-center mb-16 relative z-10">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                            Have questions, feedback, or just want to say hello?
                            We're always happy to chat.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-lg mx-auto relative z-10">
                        {/* Email Contact */}
                        <a
                            href="mailto:hello@dsourav.com"
                            className="group flex items-center p-6 bg-surface rounded-2xl border border-border-primary shadow-soft hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 p-4 bg-surface-secondary rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="ml-6">
                                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    Email Us
                                </h3>
                                <p className="text-muted-foreground font-light">
                                    hello@dsourav.com
                                </p>
                            </div>
                        </a>

                        {/* Twitter Contact */}
                        <a
                            href="https://twitter.com/souravdotdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-surface rounded-2xl border border-border-primary shadow-soft hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 p-4 bg-surface-secondary rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                                <Twitter className="h-6 w-6 text-primary" />
                            </div>
                            <div className="ml-6">
                                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    Twitter
                                </h3>
                                <p className="text-muted-foreground font-light">
                                    @souravdotdev
                                </p>
                            </div>
                        </a>

                        {/* GitHub Contact */}
                        <a
                            href="https://github.com/souravdotdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center p-6 bg-surface rounded-2xl border border-border-primary shadow-soft hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 p-4 bg-surface-secondary rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                                <Github className="h-6 w-6 text-primary" />
                            </div>
                            <div className="ml-6">
                                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                    GitHub
                                </h3>
                                <p className="text-muted-foreground font-light">
                                    Check out our code
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
