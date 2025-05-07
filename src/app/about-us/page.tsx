import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Coffee, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IExtract - Free Instagram Caption Extractor - About Us",
  description:
    "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle | about us.",
  alternates: {
    canonical: 'https://caption.pocketutils.com/about-us',
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome to <span className="text-purple-600">IExtract</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Looking for a simple way to copy Instagram captions? IExtract is
              the best Instagram caption extractor that lets you grab captions
              from public posts instantly. No logins, no tracking—just a fresh,
              clean UI that gets the job done.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
                <Sparkles className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Simple & Fast
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Get captions instantly with our optimized tool
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
                <Heart className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">No Ads</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Clean interface without any distracting advertisements
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm">
                <Coffee className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Community Driven
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Supported by users like you
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Support Our Work
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              IExtract is completely free and ad-free. If you find our tool
              helpful, consider supporting us to keep it running.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href="https://ko-fi.com/souravdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Buy us a coffee
              </a>
              <div className="mt-6 flex gap-6 justify-center">
                <a
                  href="https://twitter.com/souravdotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/dsouravcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  GitHub
                </a>
                <Link
                  href="/contact-us"
                  className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
