import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Github, Mail, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IExtract - Free Instagram Caption Extractor - Contact Us",
    description:
        "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle | contact us.",
    alternates: {
        canonical: "https://caption.dsourav.com/contact-us",
    },
};

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Get in Touch
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Have questions or feedback? We'd love to hear from
                            you.
                        </p>
                    </div>

                    <div className="mt-16 max-w-lg mx-auto">
                        <div className="space-y-8">
                            {/* Email Contact */}
                            <a
                                href="mailto:hello@dsourav.com"
                                className="group block p-6 bg-surface rounded-2xl shadow-custom hover:shadow-custom-md transition-all duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:bg-purple-100 dark:group-hover:bg-purple-800/50 transition-colors duration-200">
                                        <Mail className="h-6 w-6 text-brand" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-lg font-semibold">
                                            Email Us
                                        </h3>
                                        <p className="mt-1 text-secondary">
                                            hello@dsourav.com
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://twitter.com/souravdotdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-surface rounded-2xl shadow-custom hover:shadow-custom-md transition-all duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:bg-purple-100 dark:group-hover:bg-purple-800/50 transition-colors duration-200">
                                        <Twitter className="h-6 w-6 text-brand" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-lg font-semibold">
                                            Follow us on Twitter
                                        </h3>
                                        <p className="mt-1 text-secondary">
                                            @souravdotdev
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/dsouravcom"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 bg-surface rounded-2xl shadow-custom hover:shadow-custom-md transition-all duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:bg-purple-100 dark:group-hover:bg-purple-800/50 transition-colors duration-200">
                                        <Github className="h-6 w-6 text-brand" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="text-lg font-semibold">
                                            Check our GitHub
                                        </h3>
                                        <p className="mt-1 text-secondary">
                                            github.com/dsouravcom
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                href="/"
                                className="text-sm text-brand hover:text-brand-secondary transition-colors duration-200"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
