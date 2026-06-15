import type { Metadata } from "next";
import siteConfig from "@/config/siteConfig.json";

const BASE_URL = siteConfig.site_info.base_url;
const DEFAULT_IMAGE = siteConfig.metadata.meta_image;
const SITE_NAME = siteConfig.site_info.logo_text || siteConfig.site_info.title;

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const pageTitle = title || SITE_NAME;
  const pageDescription =
    description || siteConfig.metadata.meta_description;
  const canonical = `${BASE_URL}${path === "/" ? "" : path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return {
    title: pageTitle,
    description: pageDescription,
    authors: [{ name: siteConfig.metadata.meta_author }],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export function noIndexMetadata(path: string): Metadata {
  return buildPageMetadata({ path, noindex: true });
}
