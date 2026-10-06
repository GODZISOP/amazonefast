import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmazonFast | Expert Amazon Scaling & Marketing",
  description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth.",
  openGraph: {
    title: "AmazonFast | Expert Amazon Scaling & Marketing",
    description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth.",
    url: "https://amazonfastservices.com",
    siteName: "AmazonFast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "AmazonFast - Expert Amazon Scaling & Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AmazonFast | Expert Amazon Scaling & Marketing",
    description: "Scale your brand on Amazon with smart FBA strategies, advertising, and automated growth.",
    images: ["/og-image.jpg"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
