import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caption.pocketutils.com"),
  title:
    "IExtract - Free Instagram Caption Extractor",
  description:
    "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly",
  keywords: [
    "Instagram caption extractor",
    "Instagram caption downloader",
    "IG caption grabber",
    "copy Instagram captions",
    "extract Instagram captions",
    "download Instagram post captions",
    "Instagram text grabber",
    "IExtract",
    "free Instagram tool",
    "social media caption extractor",
  ],
  openGraph: {
    title:
      "IExtract - Free Instagram Caption Extractor",
    description:
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly",
    type: "website",
    url: "https://caption.pocketutils.com/",
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
    title:
      "IExtract - Free Instagram Caption Extractor",
    description:
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly",
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
    'itemprop="name"':
      "IExtract - Free Instagram Caption Extractor",
    'itemprop="description"':
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly",
    'itemprop="image"': "/og-image.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#9c9c9c" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`antialiased`}>
        {children}

        {/* Schema.org */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "IExtract",
              description:
                "IExtract is a free tool that extracts captions from public Instagram posts",
              url: "https://caption.pocketutils.com/",
              operatingSystem: "Web",
              applicationCategory: "Social Media Tool",
              inLanguage: "en",
              browserRequirements:
                "Requires JavaScript. Works on all modern browsers.",
              image: {
                "@type": "ImageObject",
                url: "https://caption.pocketutils.com/og-image.webp",
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
            alt=""
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
                var sbSiteSecret = "25b3d697-79ae-4d10-8686-0bf64903d132";
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
