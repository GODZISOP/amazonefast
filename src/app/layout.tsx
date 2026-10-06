import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
