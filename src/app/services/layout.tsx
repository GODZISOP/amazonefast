import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore professional Amazon FBA scaling, brand management, PPC advertising, LLC registration, and global banking services by Amazon Fast Services.",
  openGraph: {
    title: "Services | Amazon Fast Services",
    description: "Explore professional Amazon FBA scaling, brand management, PPC advertising, LLC registration, and global banking services by Amazon Fast Services.",
    url: "https://amazonfastservices.com/services",
    siteName: "Amazon Fast Services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
