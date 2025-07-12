import { ArrowLeft, Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Animated Ghost Icon */}
                <div className="relative mb-8">
                    <div className="animate-bounce">
                        <Ghost className="h-24 w-24 mx-auto text-brand" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-sm" />
                </div>

                {/* Error Message */}
                <h1 className="text-7xl font-bold text-brand mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-lg text-secondary mb-8 max-w-md mx-auto">
                    Oops! Looks like this page has vanished like a caption in
                    thin air. Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-inverse bg-brand hover:bg-brand-secondary transition-colors duration-200"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-brand bg-surface hover:bg-secondary transition-colors duration-200"
                    >
                        Need Help?
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-gradient opacity-20" />
                <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-gradient opacity-20" />
            </div>
        </main>
    );
}
