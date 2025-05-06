import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Github, Mail, Twitter } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://caption.pocketutils.com/contact-us"
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="mt-16 max-w-lg mx-auto">
            <div className="space-y-8">
              {/* Email Contact */}
              <a
                href="mailto:hello@pocketutils.com"
                className="group block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-200">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600">hello@pocketutils.com</p>
                  </div>
                </div>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/souravdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-200">
                    <Twitter className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Follow us on Twitter
                    </h3>
                    <p className="mt-1 text-gray-600">@souravdotdev</p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/dsouravcom"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-200">
                    <Github className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Check our GitHub
                    </h3>
                    <p className="mt-1 text-gray-600">github.com/dsouravcom</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="text-sm text-purple-600 hover:text-purple-700 transition-colors duration-200"
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
