import { MetadataRoute } from "next";
import siteConfig from "@/config/siteConfig.json";

const BASE_URL = siteConfig.site_info.base_url;

const DISALLOW = [
  "/api/",
  "/career",
  "/team",
  "/work",
  "/work/branding",
  "/work/seo",
  "/work/web",
  "/design",
  "/branding",
  "/video",
  "/marketing",
  "/ai-agency",
  "/portfolio",
  "/about-bold",
  "/contact-bold",
  "/service/ai",
  "/service/design",
  "/service/branding",
  "/service/video",
  "/service/seo",
  "/service/web",
  "/blog/ai",
  "/blog/seo",
  "/blog/design",
  "/blog/marketing",
  "/blog/web",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: DISALLOW,
    },
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
