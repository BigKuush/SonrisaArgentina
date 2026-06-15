import siteConfig from "@/config/siteConfig.json";

const BASE_URL = siteConfig.site_info.base_url;

type JsonLdProps = {
  data: Record<string, unknown>;
};

const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sonrisa Argentina",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/imgs/logo/logo.png`,
  description:
    "Marketing digital para clínicas dentales en Argentina: más pacientes nuevos y primeras consultas con SEO local, web y reputación.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5491127792717",
    contactType: "sales",
    availableLanguage: ["Spanish"],
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sonrisa Argentina",
  url: BASE_URL,
  inLanguage: "es-AR",
  publisher: {
    "@type": "Organization",
    name: "Sonrisa Argentina",
    url: BASE_URL,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Sonrisa Argentina",
  url: BASE_URL,
  image: `${BASE_URL}/assets/imgs/logo/logo.png`,
  description:
    "Estrategia digital para consultorios en Buenos Aires y Argentina: captación y conversión enfocadas en odontología.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  telephone: "+5491127792717",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "19:30",
  },
};

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Sonrisa Argentina",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: "Marketing digital dental",
  };
}

export function blogPostSchema({
  title,
  description,
  url,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image: image || `${BASE_URL}/assets/imgs/og/og-image.png`,
    datePublished: datePublished || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Sonrisa Argentina",
    },
    publisher: {
      "@type": "Organization",
      name: "Sonrisa Argentina",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/assets/imgs/logo/logo.png`,
      },
    },
  };
}
