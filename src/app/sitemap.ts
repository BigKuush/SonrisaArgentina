import { MetadataRoute } from "next";
import { getAllPages } from "@/lib/helper/contentConverter";

const BASE_URL = "https://sonrisarg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/seo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terminos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const dynamicPages: MetadataRoute.Sitemap = [];

  try {
    const posts = getAllPages("/blogs/branding");
    for (const post of posts) {
      dynamicPages.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  } catch {}

  try {
    const services = getAllPages("/services/marketing");
    for (const svc of services) {
      dynamicPages.push({
        url: `${BASE_URL}/service/marketing/${svc.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }
  } catch {}

  try {
    const works = getAllPages("/works/marketing");
    for (const w of works) {
      dynamicPages.push({
        url: `${BASE_URL}/work/marketing/${w.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  } catch {}

  return [...staticPages, ...dynamicPages];
}
