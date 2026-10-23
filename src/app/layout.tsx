import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amazonfastservices.com"),
  title: {
    default: "Amazon Fast Services | Expert Amazon Scaling & Marketing",
    template: "%s | Amazon Fast Services",
  },
  description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth with Amazon Fast Services.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Amazon Fast Services | Expert Amazon Scaling & Marketing",
    description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth with Amazon Fast Services.",
    url: "https://amazonfastservices.com",
    siteName: "Amazon Fast Services",
    images: [
      {
        url: "/amazon-fast-logo.png",
        width: 1200,
        height: 675,
        alt: "Amazon Fast Services - Expert Amazon Scaling & Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Fast Services | Expert Amazon Scaling & Marketing",
    description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth with Amazon Fast Services.",
    images: ["/amazon-fast-logo.png"],
  },
  verification: {
    google: "h0VQoiKNfg_sZJhEYVWmLABYaBAl5losKrl_NHu4-QU",
  },
};

import ClientLayoutManager from "@/components/ClientLayoutManager";
import InitialLoader from "@/components/InitialLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R9VYZR0NK8"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9VYZR0NK8');
          `}
        </Script>
        <meta name="google-site-verification" content="h0VQoiKNfg_sZJhEYVWmLABYaBAl5losKrl_NHu4-QU" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100,400;125,400&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet" />
        <link rel="preload" href="/amazon-fast-logo.png" as="image" />
        <link rel="preload" href="/homepage-hero.png" as="image" />
        <link rel="preload" href="/section2-highres.jpg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://amazonfastservices.com/#website",
                  "url": "https://amazonfastservices.com",
                  "name": "Amazon Fast Services",
                  "alternateName": [
                    "Amazon Fast Service",
                    "AmazonFast",
                    "AFS",
                    "amazonfastservices.com"
                  ],
                  "publisher": {
                    "@id": "https://amazonfastservices.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://amazonfastservices.com/#organization",
                  "name": "Amazon Fast Services",
                  "url": "https://amazonfastservices.com",
                  "logo": "https://amazonfastservices.com/amazon-fast-logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+92-332-2568950",
                    "contactType": "customer service",
                    "email": "info@amazonfastservices.com"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <InitialLoader />
        <ClientLayoutManager>
          {children}
        </ClientLayoutManager>
      </body>
    </html>
  );
}
