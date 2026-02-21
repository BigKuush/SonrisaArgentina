import { MetadataRoute } from "next";
import { getAllPages } from "@/lib/helper/contentConverter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bloomex.agency";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/career`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = [];

  const blogCategories = ["branding", "ai", "seo", "design", "marketing", "web"];
  for (const cat of blogCategories) {
    try {
      const posts = getAllPages(`/blogs/${cat}`);
      const prefix = cat === "branding" ? "/blog" : `/blog/${cat}`;
      for (const post of posts) {
        dynamicPages.push({
          url: `${baseUrl}${prefix}/${post.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    } catch {}
  }

  const serviceCategories = [
    { folder: "marketing", prefix: "/service/marketing" },
    { folder: "web", prefix: "/service/web" },
    { folder: "seo", prefix: "/service/seo" },
    { folder: "ai", prefix: "/service/ai" },
    { folder: "design", prefix: "/service/design" },
    { folder: "branding", prefix: "/service/branding" },
    { folder: "video", prefix: "/service/video" },
    { folder: "main", prefix: "/service" },
  ];
  for (const { folder, prefix } of serviceCategories) {
    try {
      const services = getAllPages(`/services/${folder}`);
      for (const svc of services) {
        dynamicPages.push({
          url: `${baseUrl}${prefix}/${svc.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    } catch {}
  }

  const workCategories = ["marketing", "branding", "seo", "web", "main"];
  for (const cat of workCategories) {
    try {
      const works = getAllPages(`/works/${cat}`);
      const prefix = cat === "main" ? "/work" : `/work/${cat}`;
      for (const w of works) {
        dynamicPages.push({
          url: `${baseUrl}${prefix}/${w.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    } catch {}
  }

  try {
    const team = getAllPages("/team/main");
    for (const member of team) {
      dynamicPages.push({
        url: `${baseUrl}/team/${member.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  } catch {}

  try {
    const careers = getAllPages("/career");
    for (const c of careers) {
      dynamicPages.push({
        url: `${baseUrl}/career/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  } catch {}

  return [...staticPages, ...dynamicPages];
}
