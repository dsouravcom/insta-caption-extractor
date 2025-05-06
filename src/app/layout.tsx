import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caption.pocketutils.com"),
  description:
    "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
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
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
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
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
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
      "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
    'itemprop="image"': "/og-image.webp",
    'apple-mobile-web-app-title': 'IExtract',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}

        {/* Schema.org */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "name": "IExtract",
                  "description": "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
                  "url": "https://caption.pocketutils.com/",
                  "operatingSystem": "Web",
                  "applicationCategory": "SocialMediaApplication",
                  "inLanguage": "en",
                  "browserRequirements": "Requires JavaScript. Works on all modern browsers.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "Extract captions from public Instagram posts",
                    "No login required",
                    "Simple and clean interface",
                    "Copy to clipboard functionality",
                    "Fast and reliable"
                  ],
                  "screenshot": {
                    "@type": "ImageObject",
                    "url": "https://caption.pocketutils.com/og-image.webp",
                    "width": 1200,
                    "height": 630
                  }
                },
                {
                  "@type": "Organization",
                  "name": "IExtract",
                  "url": "https://caption.pocketutils.com",
                  "logo": "https://caption.pocketutils.com/logo.png",
                  "sameAs": [
                    "https://twitter.com/souravdotdev",
                    "https://github.com/dsouravcom"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "url": "https://caption.pocketutils.com/contact-us"
                  }
                },
                {
                  "@type": "WebSite",
                  "name": "IExtract - Free Instagram Caption Extractor",
                  "url": "https://caption.pocketutils.com/",
                  "description": "IExtract is a free Instagram caption extractor that lets you copy captions from any public Instagram post instantly. it free no-login tool. Clean interface, fast results, zero hassle.",
                  "inLanguage": "en",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://caption.pocketutils.com/"
                    },
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "IExtract",
                  "applicationCategory": "UtilityApplication",
                  "operatingSystem": "Web",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://caption.pocketutils.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "About Us",
                      "item": "https://caption.pocketutils.com/about-us"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Contact Us",
                      "item": "https://caption.pocketutils.com/contact-us"
                    }
                  ]
                }
              ]
            })
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
