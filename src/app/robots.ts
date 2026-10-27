import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin-portal",
        "/admin-portal/*",
        "/portal",
        "/portal/*",
        "/api/*",
        "/login"
      ],
    },
    sitemap: "https://amazonfastservices.com/sitemap.xml",
  };
}
