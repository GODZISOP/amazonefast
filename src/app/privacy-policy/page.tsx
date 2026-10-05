import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative font-sans bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: October 5, 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/70 prose-a:text-[#ff6b35] hover:prose-a:text-[#e85c2b]">
          
          <p>
            At Amazon Fast Services, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">1. Information We Collect</h2>
          <p className="mb-4 text-white/70">
            We may collect personal information that you provide to us when you fill out contact forms, subscribe to our newsletter, or book a consultation. This includes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-white/70 flex flex-col gap-2">
            <li>Name and Contact Information (Email address, Phone number)</li>
            <li>Business Information (Amazon Seller Central details, Company name)</li>
            <li>Payment details (processed securely via third-party gateways)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">2. How We Use Your Information</h2>
          <p className="mb-4 text-white/70">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-white/70 flex flex-col gap-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve, personalize, and expand our offerings.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you, either directly or through our partners, for customer service, updates, and marketing.</li>
            <li>Process transactions securely.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">3. Data Protection & Security</h2>
          <p className="mb-4 text-white/70">
            We implement advanced security measures to protect your personal and business data. We do not sell, trade, or rent your personal identification information to others. Amazon Seller Central credentials provided for management purposes are kept strictly confidential and used solely for the agreed-upon services.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">4. Cookies and Tracking</h2>
          <p className="mb-4 text-white/70">
            Our website uses cookies to enhance user experience and track website analytics. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain parts of our site.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">5. Changes to This Privacy Policy</h2>
          <p className="mb-4 text-white/70">
            Amazon Fast Services reserves the right to update this Privacy Policy at any time. We encourage users to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Contact Us</h2>
          <p className="mb-4 text-white/70">
            If you have any questions about this Privacy Policy, please contact us at: <br/>
            <strong>Email:</strong> <a href="mailto:info@amazonfastservices.com">info@amazonfastservices.com</a> <br/>
            <strong>Phone:</strong> +92-332-2568950
          </p>

        </div>
      </div>
    </div>
  );
}
