"use client";
import Image from "next/image";

interface KofiButtonProps {
    className?: string;
    showText?: boolean;
}

const KofiButton = ({ className = "", showText = false }: KofiButtonProps) => {
    return (
        <div className={`relative group/kofi ${className}`}>
            <a
                href="https://ko-fi.com/souravdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:scale-105 transition-all duration-300"
                aria-label="Support me on Ko-fi"
            >
                {showText ? (
                    <Image
                        src="/ko-fi-big.png"
                        alt="Support me on Ko-fi"
                        width={80}
                        height={32}
                        className="w-auto h-8"
                    />
                ) : (
                    <div className="w-6 h-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Ko-Fi"
                            role="img"
                            viewBox="0 0 512 512"
                        >
                            <rect
                                width="512"
                                height="512"
                                rx="15%"
                                fill="#478db1"
                            />
                            <path
                                fill="#fff"
                                d="M371 140H100c-18 0-20 20 -20 20v184s3 40 40 40h188c41 0 40-40 40 -40v-26h23a89 89 0 000-178m0 132h-23v-86h23a43 43 0 010 86"
                            />
                            <path
                                fill="#f1464d"
                                d="M286 219c-10-30-63-33-77 3-15-36-67-33-77-3-7 19-4 35 9 54s68 64 68 64 56-45 68-64 15-35 9-54"
                            />
                        </svg>
                    </div>
                )}
            </a>

            {/* Tooltip */}
            <div className="absolute top-full left-0 sm:left-1/2 sm:-translate-x-1/2 pt-2 opacity-0 invisible group-hover/kofi:opacity-100 group-hover/kofi:visible transition-all duration-200 whitespace-nowrap z-100 scale-95 group-hover/kofi:scale-100 origin-top">
                <div className="relative px-3 py-2 bg-surface border border-border-primary text-foreground text-[11px] sm:text-xs font-medium rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span>Support this website to keep it running <span className="text-primary font-bold">ads-free</span></span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-1 left-4 sm:left-1/2 sm:-translate-x-1/2 w-2 h-2 bg-surface border-t border-l border-border-primary rotate-45"></div>
                </div>
            </div>
        </div>
    );
};

export default KofiButton;
