"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        // Return default values during SSR or when provider is not available
        return {
            theme: "system" as Theme,
            setTheme: () => {},
            resolvedTheme: "light" as "light" | "dark",
        };
    }
    return context;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "theme",
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    // Get the resolved theme (light or dark)
    const getResolvedTheme = (themeValue: Theme): "light" | "dark" => {
        if (themeValue === "system") {
            if (typeof window !== "undefined") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
            }
            return "light"; // Default for SSR
        }
        return themeValue;
    };

    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
        "light"
    );

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        const resolved = getResolvedTheme(newTheme);
        setResolvedTheme(resolved);

        // Update localStorage
        if (typeof window !== "undefined") {
            if (newTheme === "system") {
                localStorage.removeItem(storageKey);
            } else {
                localStorage.setItem(storageKey, newTheme);
            }
        }

        // Update DOM
        updateDOM(resolved);
    };

    const updateDOM = (resolvedTheme: "light" | "dark") => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            const root = document.documentElement;

            if (resolvedTheme === "dark") {
                root.classList.add("dark");
                root.style.colorScheme = "dark";
            } else {
                root.classList.remove("dark");
                root.style.colorScheme = "light";
            }
        }
    };

    useEffect(() => {
        // Initialize theme from localStorage or system preference
        let savedTheme: Theme = defaultTheme;

        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(storageKey) as Theme;
            if (stored && (stored === "light" || stored === "dark")) {
                savedTheme = stored;
            } else if (!stored) {
                savedTheme = "system";
            }
        }

        const resolved = getResolvedTheme(savedTheme);
        setThemeState(savedTheme);
        setResolvedTheme(resolved);
        updateDOM(resolved);
        setMounted(true);

        // Listen for system theme changes
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            const handleChange = () => {
                if (theme === "system") {
                    const resolved = getResolvedTheme("system");
                    setResolvedTheme(resolved);
                    updateDOM(resolved);
                }
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [defaultTheme, storageKey, theme]);

    // Prevent hydration mismatch by not rendering theme-dependent content until mounted
    if (!mounted) {
        return <div suppressHydrationWarning>{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
