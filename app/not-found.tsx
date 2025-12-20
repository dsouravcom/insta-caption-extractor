import { ArrowLeft, Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 bg-background relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-[20%] right-[20%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-stone-200/50 rounded-full blur-3xl" />
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                {/* Animated Ghost Icon */}
                <div className="relative mb-8">
                    <div className="animate-bounce">
                        <Ghost className="h-24 w-24 mx-auto text-primary" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-primary/10 rounded-full blur-sm" />
                </div>

                {/* Error Message */}
                <h1 className="font-serif text-8xl font-bold text-primary/20 mb-4">
                    404
                </h1>
                <h2 className="font-serif text-3xl font-semibold mb-4 text-foreground">
                    Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto font-light">
                    Oops! Looks like this page has vanished like a caption in
                    thin air. Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-foreground bg-surface border border-border-primary hover:bg-surface-secondary transition-all duration-300"
                    >
                        Need Help?
                    </Link>
                </div>
            </div>
        </main>
    );
}
