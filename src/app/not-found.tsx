import { ArrowLeft, Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Ghost Icon */}
        <div className="relative mb-8">
          <div className="animate-bounce">
            <Ghost className="h-24 w-24 mx-auto text-purple-600" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-100 rounded-full blur-sm" />
        </div>

        {/* Error Message */}
        <h1 className="text-7xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! Looks like this page has vanished like a caption in thin air.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-purple-600 bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
          >
            Need Help?
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 opacity-20" />
      </div>
    </main>
  );
}
