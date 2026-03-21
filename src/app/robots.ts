import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: "https://sonrisarg.com",
    sitemap: "https://sonrisarg.com/sitemap.xml",
  };
}
