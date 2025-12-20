import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions - IExtract | Elegant Instagram Caption Tool",
    description:
        "Terms and Conditions for IExtract. Read our terms of service, privacy policy, and usage guidelines.",
    alternates: {
        canonical: "https://caption.dsourav.com/terms-and-conditions",
    },
};

export default function Terms() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-muted-foreground font-light">
                            Last updated:{" "}
                            {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft">
                            <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                By accessing and using IExtract ("the Service"),
                                you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not
                                agree to abide by the above, please do not use
                                this service.
                            </p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft">
                            <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                                2. Description of Service
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                IExtract provides a free tool for extracting
                                captions from public Instagram posts. The
                                service is provided "as is" and is intended for
                                personal and fair use only. We are not
                                affiliated, associated, authorized, endorsed by,
                                or in any way officially connected with
                                Instagram or Meta Platforms, Inc.
                            </p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft">
                            <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                                3. User Conduct
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed mb-4">
                                You agree not to use the Service for any
                                unlawful purpose or in any way that could
                                damage, disable, overburden, or impair the
                                Service. Specifically, you agree not to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light ml-4">
                                <li>Use the service to scrape data in bulk</li>
                                <li>
                                    Attempt to bypass any rate limits or
                                    security measures
                                </li>
                                <li>
                                    Use the service for any illegal activities
                                </li>
                                <li>
                                    Infringe upon the intellectual property
                                    rights of others
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft">
                            <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                                4. Privacy Policy
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                We respect your privacy. We do not store any of
                                the links you submit or the content you extract.
                                We do not use cookies for tracking purposes. The
                                service operates in real-time and does not
                                retain user data.
                            </p>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-border-primary shadow-soft">
                            <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                                5. Disclaimer of Warranties
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                The Service is provided on an "AS IS" and "AS
                                AVAILABLE" basis. IExtract makes no
                                representations or warranties of any kind,
                                express or implied, as to the operation of the
                                Service or the information, content, or
                                materials included therein.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
