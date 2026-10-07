import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Amazon Fast Services',
  description: 'Amazon Fast Services is a top-tier e-commerce marketing agency dedicated to scaling brands, automating FBA businesses, and delivering unmatched ROAS globally.',
  keywords: 'Amazon FBA, E-commerce, Marketing Agency, Wholesale, Private Label, Amazon Fast Services',
  openGraph: {
    title: 'About Us | Amazon Fast Services',
    description: 'Scaling Amazon brands globally with end-to-end management.',
    type: 'website',
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
