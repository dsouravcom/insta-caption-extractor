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
        <div className="sticky top-0 z-50 w-full">
            {/* Elegant Modern SaaS Announcement Banner */}
            <div className="relative overflow-hidden bg-zinc-950 border-b border-white/5 py-2.5">
                {/* Full-area shine effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 w-[50%] h-full bg-linear-to-r from-transparent via-white/8 to-transparent animate-shine" />
                </div>

                {/* Subtle animated background pulse */}
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />

                <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-center">
                    <a
                        href="https://www.reelsload.com/?ref=caption.dsourav.com"
                        target="_blank"
                        rel="follow"
                        className="group flex items-center gap-3 text-white transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-2 py-0.5 rounded-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-wider uppercase text-white">
                                New
                            </span>
                        </div>

                        <p className="text-[11px] sm:text-xs font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">
                            Need high-quality downloads?{" "}
                            <span className="text-white font-bold underline decoration-white/30 underline-offset-4">
                                Try our Pro Instagram Reels Downloader
                            </span>
                        </p>

                        <div className="flex items-center gap-1.5 ml-1">
                            <span className="h-4 w-px bg-white/10 hidden sm:block" />
                            <span className="text-[10px] text-zinc-500 hidden sm:block group-hover:text-zinc-300 transition-colors">
                                reelsload.com
                            </span>
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 17l10-10M7 7h10v10" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <nav className="bg-surface/95 backdrop-blur-md border-b border-border-primary shadow-sm">
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
                    style={{ top: "calc(64px + 41px)" }}
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
        </div>
    );
}
