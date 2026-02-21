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
  url: "https://bloomex.agency",
  logo: "https://bloomex.agency/assets/imgs/logo/logo.png",
  description:
    "Agencia de marketing digital especializada en clínicas dentales en Argentina. Sitios web, SEO local y gestión de reseñas.",
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

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sonrisa Argentina",
  url: "https://bloomex.agency",
  image: "https://bloomex.agency/assets/imgs/logo/logo.png",
  description:
    "Agencia de marketing digital especializada en clínicas dentales en Argentina.",
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
    image: image || "https://bloomex.agency/assets/imgs/og/og-image.png",
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
        url: "https://bloomex.agency/assets/imgs/logo/logo.png",
      },
    },
  };
}
