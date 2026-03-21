"use client";

import siteConfig from "@/config/siteConfig.json";
import { usePathname } from "next/navigation";

const SeoData = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_description } = siteConfig.metadata;
  const { base_url } = siteConfig.site_info;
  const pathname = usePathname();

  // Auto-generate canonical URL if not provided
  const canonicalUrl = canonical || `${base_url}${pathname}`;

  return (
    <>
      {/* title */}
      <title>
        {meta_title ? meta_title : title ? title : siteConfig.site_info.title}
      </title>

      {/* canonical url - always include */}
      <link rel="canonical" href={canonicalUrl} />

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={description ? description : meta_description}
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={
          meta_title ? meta_title : title ? title : siteConfig.site_info.title
        }
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={description ? description : meta_description}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={siteConfig.site_info.logo_text || siteConfig.site_info.title}
      />
      <meta property="og:locale" content="es_AR" />
      <meta
        property="og:url"
        content={canonicalUrl}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={
          meta_title ? meta_title : title ? title : siteConfig.site_info.title
        }
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={description ? description : meta_description}
      />

      {/* og-image */}
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoData;
