import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Amazon Fast Services for expert Amazon scaling, account setup, FBA management, and corporate formation consultation.",
  openGraph: {
    title: "Contact Us | Amazon Fast Services",
    description: "Contact Amazon Fast Services for expert Amazon scaling, account setup, FBA management, and corporate formation consultation.",
    url: "https://amazonfastservices.com/contact-us",
    siteName: "Amazon Fast Services",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
