import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const Footer = memo(function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-secondary border-t border-border-primary pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 mb-6"
                        >
                            <Image
                                src="https://img.icons8.com/cotton/64/instagram-new.png"
                                height={40}
                                width={40}
                                alt="IExtract Logo"
                                className="opacity-90"
                                loading="lazy"
                            />
                            <span className="text-2xl font-serif font-bold text-foreground tracking-tight">
                                IExtract
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm font-light leading-relaxed mb-6">
                            Extract Instagram captions instantly with our
                            elegant, free tool. Designed for creators,
                            marketers, and everyone in between.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about-us"
                                    className="text-muted-foreground hover:text-primary transition-colors font-light"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="text-muted-foreground hover:text-primary transition-colors font-light"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/terms-and-conditions"
                                    className="text-muted-foreground hover:text-primary transition-colors font-light"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sitemap.xml"
                                    className="text-muted-foreground hover:text-primary transition-colors font-light"
                                >
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border-primary pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground font-light">
                        &copy; {currentYear} IExtract. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/souravdotdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm font-light"
                        >
                            Built by Sourav
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
