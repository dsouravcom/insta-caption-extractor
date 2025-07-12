import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://caption.dsourav.com"),
    keywords: [
        "instagram caption extractor",
        "instagram caption downloader",
        "iG caption grabber",
        "copy Instagram captions",
        "extract Instagram captions",
        "download Instagram post captions",
        "instagram text grabber",
        "iExtract",
        "free Instagram tool",
        "social media caption extractor",
    ],
    openGraph: {
        title: "IExtract - Free Instagram Caption Extractor",
        description:
            "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
        type: "website",
        url: "https://caption.dsourav.com/",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "IExtract Open Graph Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "IExtract - Free Instagram Caption Extractor",
        description:
            "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "IExtract Twitter Image",
            },
        ],
    },
    other: {
        'itemprop="name"': "IExtract - Free Instagram Caption Extractor",
        'itemprop="description"':
            "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
        'itemprop="image"': "/og-image.webp",
        "apple-mobile-web-app-title": "IExtract",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <ThemeProvider defaultTheme="system">{children}</ThemeProvider>

                {/* Schema.org */}
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            name: "IExtract",
                            description:
                                "IExtract is a free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
                            url: "https://caption.dsourav.com/",
                            operatingSystem: "Web",
                            applicationCategory: "UtilityApplication",
                            inLanguage: "en",
                            browserRequirements:
                                "Requires JavaScript. Works on all modern browsers.",
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                            },
                            featureList: [
                                "Extract captions from public Instagram posts",
                                "No login required",
                                "Simple and clean interface",
                                "Copy to clipboard functionality",
                                "Fast and reliable",
                            ],
                            screenshot: {
                                "@type": "ImageObject",
                                url: "https://caption.dsourav.com/og-image.webp",
                                width: 1200,
                                height: 630,
                            },
                        }),
                    }}
                />

                {/* 100% privacy-first analytics  */}
                <Script
                    async
                    defer
                    src="https://scripts.simpleanalyticscdn.com/latest.js"
                />
                <noscript>
                    <img
                        src="https://queue.simpleanalyticscdn.com/noscript.gif"
                        alt="simpleanalytics noscript"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </noscript>

                {/* Site behaviour tracking
        This script tracks user behaviour on the site. */}
                <Script
                    id="site-behaviour-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                var sbSiteSecret = "ecfa7c9e-f109-4694-9adb-d8e9f9bb7772";
                window.sitebehaviourTrackingSecret = sbSiteSecret;
                var scriptElement = document.createElement('script');
                scriptElement.async = true;
                scriptElement.id = 'site-behaviour-script-v2';
                scriptElement.src = "https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=" + sbSiteSecret;
                document.head.appendChild(scriptElement); 
              })();
            `,
                    }}
                />
            </body>
        </html>
    );
}
