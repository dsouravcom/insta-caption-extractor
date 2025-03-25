import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "IExtract - Free Instagram Caption Extractor | Copy IG Post Captions Instantly",
  description:
    "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. No ads, no tracking—just paste the post URL and get the caption hassle-free!",
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
        <meta
          name="description"
          content="Unlock Instagram captions easily with our free extractor tool. Copy captions from posts, reels, and stories to boost content & engagement. Try it now!"
        />
        <meta
          name="keywords"
          content="Instagram caption extractor, Instagram caption downloader, IG caption grabber, copy Instagram captions, extract Instagram captions, download Instagram post captions, Instagram text grabber, IExtract, free Instagram tool, social media caption extractor."
        />
      </Head>
      <body className={`antialiased`}>
        {children}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "IExtract",
              description:
                "IExtract is a free tool that extracts captions from public Instagram posts. No ads, no tracking—just paste the post URL and get the caption instantly.",
              url: "https://caption.pocketutils.com/",
              operatingSystem: "Web",
              applicationCategory: "Social Media Tool",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
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
