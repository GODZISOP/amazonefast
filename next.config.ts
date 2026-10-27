import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/chase-bank', destination: '/services/chase-bank', permanent: true },
      { source: '/bank-of-america', destination: '/services/bank-of-america', permanent: true },
      { source: '/payoneer-wallet', destination: '/services/payoneer-wallet', permanent: true },
      { source: '/wise-wallet', destination: '/services/wise-wallet', permanent: true },
      { source: '/stripe-setup', destination: '/services/stripe-setup', permanent: true },
      { source: '/airwallex-wallet', destination: '/services/airwallex-wallet', permanent: true },
      { source: '/brand-approvals', destination: '/services/brand-approvals', permanent: true },
      { source: '/amazon-store-creation', destination: '/services/store-creation', permanent: true },
      { source: '/store-creation', destination: '/services/store-creation', permanent: true },
      { source: '/a-content-ebc', destination: '/services/a-content-ebc', permanent: true },
      { source: '/amazon-virtual-assistant', destination: '/services/amazon-account-creation', permanent: true },
      { source: '/wyoming-llc', destination: '/services/wyoming-llc', permanent: true },
      { source: '/florida-llc', destination: '/services/florida-llc', permanent: true },
      { source: '/texas-llc', destination: '/services/texas-llc', permanent: true },
      { source: '/llc-formation', destination: '/services/llc-formation', permanent: true },
      { source: '/product-hunting', destination: '/services/product-hunting', permanent: true },
      { source: '/listing-seo', destination: '/services/listing-seo', permanent: true },
      { source: '/account-reinstatement', destination: '/services/account-reinstatement', permanent: true },
      { source: '/amazon-account-creation', destination: '/services/amazon-account-creation', permanent: true },
      { source: '/amazon-ppc-advertising', destination: '/services/amazon-ppc-advertising', permanent: true },
      { source: '/amazon-private-label', destination: '/services/amazon-private-label', permanent: true },
      { source: '/amazon-wholesale-fba', destination: '/services/amazon-wholesale-fba', permanent: true },
      { source: '/trademark-brand-registry', destination: '/services/trademark-brand-registry', permanent: true },
    ];
  },
};

export default nextConfig;
