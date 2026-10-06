import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | AmazonFast",
  description: "Privacy Policy for Amazon Fast Services",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm tracking-wide uppercase font-medium">Last Updated: 01/09/2026</p>
        </div>

        <div className="prose prose-invert prose-orange max-w-none text-white/70">
          <p className="text-lg leading-relaxed mb-8">
            At Amazon Fast Servies, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services related to Amazon FBA consulting, LLC registration, and USA bank account opening.
          </p>
          <p className="text-lg leading-relaxed mb-12">
            By accessing or using our website, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business details</li>
            <li>Billing and payment information</li>
            <li>Identification documents (only when required for LLC registration or bank account setup)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white/90 mt-6 mb-3">Non-Personal Information</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent on the website</li>
            <li>Cookies and usage data</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Provide Amazon FBA services and consultations</li>
            <li>Assist with LLC registration and legal documentation</li>
            <li>Facilitate USA bank account opening</li>
            <li>Communicate updates, service information, and support</li>
            <li>Process payments and invoices</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Cookies and Tracking Technologies</h2>
          <p className="mb-4">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Enhance website performance</li>
            <li>Analyze traffic and user behavior</li>
            <li>Remember user preferences</li>
          </ul>
          <p className="mb-8">
            You may disable cookies through your browser settings, but some features of the website may not function properly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell or rent your personal information. We may share information only with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Trusted third-party service providers (e.g., legal, banking, or compliance partners)</li>
            <li>Government authorities or regulators when required by law</li>
            <li>Payment processors for secure transactions</li>
          </ul>
          <p className="mb-8">All third parties are required to maintain the confidentiality of your information.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Data Security</h2>
          <p className="mb-8">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Data Retention</h2>
          <p className="mb-4">We retain your personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Fulfill the purposes outlined in this Privacy Policy</li>
            <li>Meet legal, accounting, or regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Your Privacy Rights</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for data processing</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mb-8">
            To exercise these rights, contact us at <a href="mailto:info@amazonfastservices.com" className="text-[#ff6b35] hover:underline">info@amazonfastservices.com</a>
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Third-Party Links</h2>
          <p className="mb-8">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. Please review their privacy policies separately.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Children’s Privacy</h2>
          <p className="mb-8">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Changes to This Privacy Policy</h2>
          <p className="mb-8">
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">11. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8">
            <p className="mb-2"><strong className="text-white">Company Name:</strong> Amazon Fast Services</p>
            <p className="mb-2"><strong className="text-white">Email:</strong> <a href="mailto:info@amazonfastservices.com" className="text-[#ff6b35] hover:underline">info@amazonfastservices.com</a></p>
            <p className="mb-2"><strong className="text-white">Website:</strong> <Link href="/" className="text-[#ff6b35] hover:underline">https://amazonfastservices.com/</Link></p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
