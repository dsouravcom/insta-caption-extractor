import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="bg-surface shadow-custom py-4 transition-all duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                src="https://img.icons8.com/cotton/64/instagram-new.png"
                                alt="iextract logo "
                                height={100}
                                width={100}
                                className="h-10 w-10"
                            />

                            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-sans">
                                IExtract
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex space-x-6">
                            <a
                                href="#features"
                                className="text-secondary hover:text-primary transition-colors duration-200"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-secondary hover:text-primary transition-colors duration-200"
                            >
                                How It Works
                            </a>
                            <a
                                href="#faq"
                                className="text-secondary hover:text-primary transition-colors duration-200"
                            >
                                FAQ
                            </a>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
