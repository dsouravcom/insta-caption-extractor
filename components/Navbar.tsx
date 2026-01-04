"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import KofiButton from "./KofiButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Features", href: "/#features" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border-primary shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2 md:gap-3 ">
                            <Link
                                href="/"
                            className="flex items-center gap-2 md:gap-3 z-50"
                                onClick={closeMenu}
                            >
                                <div className="relative w-7 h-7 md:w-9 md:h-9 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="https://img.icons8.com/cotton/64/instagram-new.png"
                                        alt="IExtract Logo"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <span className="text-lg md:text-xl font-serif font-semibold text-foreground">
                                    IExtract
                                </span>
                            </Link>
                            <KofiButton
                                className="ml-1 mt-1 hidden sm:flex"
                                showText={true}
                            />
                            <KofiButton
                                className="ml-1 mt-1 flex sm:hidden"
                                showText={false}
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pl-4 border-l border-border-primary">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-3 md:hidden">
                            <ThemeToggle />
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-lg text-foreground hover:bg-surface-secondary transition-colors"
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isOpen}
                            >
                                {isOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mounted && (
                <div
                    className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{ top: "64px" }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    {/* Menu Panel */}
                    <div
                        className={`relative bg-surface h-full shadow-2xl transition-transform duration-300 ease-out ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="flex flex-col h-full p-6">
                            <nav className="flex-1 flex flex-col justify-center space-y-6">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 border-b border-border-primary last:border-0"
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Footer */}
                            <div className="pt-6 border-t border-border-primary text-center">
                                <p className="text-sm text-muted-foreground">
                                    © {new Date().getFullYear()} IExtract
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
