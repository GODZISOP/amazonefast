import type { MetadataRoute } from "next";

const serviceSlugs = [
  "amazon-wholesale-fba",
  "amazon-private-label",
  "brand-approvals",
  "trademark-brand-registry",
  "trademark-logo",
  "trademark-word",
  "amazon-account-creation",
  "amazon-ppc-advertising",
  "product-hunting",
  "store-creation",
  "a-content-ebc",
  "listing-seo",
  "account-reinstatement",
  "payoneer-wallet",
  "wise-wallet",
  "airwallex-wallet",
  "stripe-setup",
  "chase-bank",
  "bank-of-america",
  "llc-formation",
  "wyoming-llc",
  "florida-llc",
  "texas-llc",
  "fba-store-automation"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amazonfastservices.com";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...mainPages, ...servicePages];
}
