import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IExtract - Terms and Conditions | Free Instagram Caption Extractor",
    description:
        "Terms and Conditions for IExtract - Free Instagram caption extractor tool. Read our terms of service, privacy policy, and usage guidelines.",
    alternates: {
        canonical: "https://caption.dsourav.com/terms-and-conditions",
    },
};

export default function Terms() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-surface">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Terms and Conditions
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Last updated:{" "}
                            {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-secondary mb-4">
                                By accessing and using IExtract ("the Service"),
                                you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not
                                agree to abide by the above, please do not use
                                this service.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                2. Description of Service
                            </h2>
                            <p className="text-secondary mb-4">
                                IExtract is a free web-based tool that allows
                                users to extract and copy captions from public
                                Instagram posts by providing the post URL. The
                                service is provided free of charge and requires
                                no user registration or login.
                            </p>
                            <ul className="list-disc pl-6 text-secondary space-y-2">
                                <li>
                                    Extract captions from public Instagram posts
                                    only
                                </li>
                                <li>No registration or login required</li>
                                <li>Free to use with no hidden charges</li>
                                <li>Clean and simple user interface</li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                3. Acceptable Use Policy
                            </h2>
                            <p className="text-secondary mb-4">
                                You agree to use IExtract only for lawful
                                purposes and in accordance with these Terms. You
                                agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-secondary space-y-2">
                                <li>
                                    Use the service to extract content from
                                    private or restricted Instagram accounts
                                </li>
                                <li>
                                    Use extracted content for commercial
                                    purposes without proper attribution
                                </li>
                                <li>
                                    Violate Instagram's Terms of Service or any
                                    applicable laws
                                </li>
                                <li>
                                    Attempt to reverse engineer, modify, or
                                    create derivative works of the service
                                </li>
                                <li>
                                    Use the service to harass, spam, or engage
                                    in any harmful activities
                                </li>
                                <li>
                                    Overload our servers with excessive requests
                                    or automated tools
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                4. Intellectual Property Rights
                            </h2>
                            <p className="text-secondary mb-4">
                                The content extracted through IExtract remains
                                the property of the original Instagram post
                                creators. Users are responsible for ensuring
                                they have the right to use any extracted content
                                and must respect copyright laws.
                            </p>
                            <p className="text-secondary mb-4">
                                IExtract and its original content, features, and
                                functionality are owned by the service provider
                                and are protected by international copyright,
                                trademark, patent, trade secret, and other
                                intellectual property laws.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                5. Privacy and Data Collection
                            </h2>
                            <p className="text-secondary mb-4">
                                IExtract is designed with privacy in mind:
                            </p>
                            <ul className="list-disc pl-6 text-secondary space-y-2">
                                <li>
                                    We do not require user registration or
                                    collect personal information
                                </li>
                                <li>
                                    Instagram URLs provided are processed
                                    temporarily and not stored permanently
                                </li>
                                <li>
                                    We do not track users or use invasive
                                    analytics
                                </li>
                                <li>
                                    No cookies are used for tracking purposes
                                </li>
                                <li>
                                    Extracted captions are not saved on our
                                    servers
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                6. Disclaimer of Warranties
                            </h2>
                            <p className="text-secondary mb-4">
                                IExtract is provided "as is" without any
                                representations or warranties, express or
                                implied. We make no representations or
                                warranties in relation to this service or the
                                information and materials provided.
                            </p>
                            <ul className="list-disc pl-6 text-secondary space-y-2">
                                <li>
                                    We do not guarantee the service will be
                                    uninterrupted or error-free
                                </li>
                                <li>
                                    We are not responsible for changes in
                                    Instagram's API or policies
                                </li>
                                <li>
                                    The accuracy and completeness of extracted
                                    content is not guaranteed
                                </li>
                                <li>
                                    We do not warrant that the service will meet
                                    your specific requirements
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-secondary mb-4">
                                In no event shall IExtract, its operators, or
                                affiliates be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages, including without limitation, loss of
                                profits, data, use, goodwill, or other
                                intangible losses, resulting from your use of
                                the service.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                8. Third-Party Services
                            </h2>
                            <p className="text-secondary mb-4">
                                IExtract interacts with Instagram's publicly
                                available content. We are not affiliated with,
                                endorsed by, or sponsored by Instagram or Meta
                                Platforms, Inc. Instagram is a trademark of Meta
                                Platforms, Inc.
                            </p>
                            <p className="text-secondary mb-4">
                                Users must comply with Instagram's Terms of
                                Service when using content extracted through our
                                service.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                9. Service Modifications
                            </h2>
                            <p className="text-secondary mb-4">
                                We reserve the right to modify or discontinue
                                IExtract at any time without notice. We may also
                                update these Terms and Conditions periodically.
                                Continued use of the service after changes
                                constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                10. Termination
                            </h2>
                            <p className="text-secondary mb-4">
                                We may terminate or suspend access to our
                                service immediately, without prior notice or
                                liability, for any reason whatsoever, including
                                without limitation if you breach the Terms.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                11. Governing Law
                            </h2>
                            <p className="text-secondary mb-4">
                                These Terms shall be interpreted and governed by
                                the laws of the jurisdiction in which the
                                service is operated, without regard to its
                                conflict of law provisions.
                            </p>
                        </div>

                        <div className="bg-surface rounded-xl shadow-custom p-8 mb-8 border border-tertiary">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">
                                12. Contact Information
                            </h2>
                            <p className="text-secondary mb-4">
                                If you have any questions about these Terms and
                                Conditions, please contact us:
                            </p>
                            <ul className="list-disc pl-6 text-secondary space-y-2">
                                <li>
                                    Email:{" "}
                                    <a
                                        href="mailto:hello@dsourav.com"
                                        className="text-brand hover:underline"
                                    >
                                        hello@dsourav.com
                                    </a>
                                </li>
                                <li>
                                    Website:{" "}
                                    <a
                                        href="https://caption.dsourav.com"
                                        className="text-brand hover:underline"
                                    >
                                        caption.dsourav.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                                Important Notice
                            </h3>
                            <p className="text-yellow-700 dark:text-yellow-300">
                                By using IExtract, you acknowledge that you have
                                read, understood, and agree to be bound by these
                                Terms and Conditions. This service is provided
                                free of charge for legitimate use only. Please
                                respect content creators' rights and Instagram's
                                community guidelines.
                            </p>
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full text-white bg-brand hover:bg-brand-secondary transition-colors duration-200"
                            >
                                Back to IExtract
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
