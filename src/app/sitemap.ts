import { MetadataRoute } from "next";
import { getAllPages } from "@/lib/helper/contentConverter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bloomex.agency";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-bold`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = getAllPages("/blogs/branding");
    blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (e) {
    // If blogs fail to load, continue without them
  }

  // Services
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const services = getAllPages("/services/web");
    servicePages = services.map((service) => ({
      url: `${baseUrl}/service/web/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (e) {
    // If services fail to load, continue without them
  }

  return [...staticPages, ...blogPages, ...servicePages];
}
