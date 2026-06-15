import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MDXContent from "@/components/tools/MDXContent";
import ServiceDetails from "@/components/service/ServiceDetails";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";
import JsonLd, { serviceSchema } from "@/components/tools/JsonLd";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const services = getAllPages("/services/marketing");
  const paths = services.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export function generateMetadata({ params }: Props): Metadata {
  const services = getAllPages("/services/marketing");
  const service = services.find((item) => item.slug === params.title);

  if (!service?.data) {
    return {};
  }

  const { title, meta } = service.data;

  return buildPageMetadata({
    title: meta?.meta_title || title,
    description: meta?.meta_description,
    path: `/service/marketing/${params.title}`,
  });
}

const service = ({ params }: Props) => {
  const services = getAllPages("/services/marketing");

  if (!(services && services.length)) {
    notFound();
  }
  const service = services.find((item) => item.slug === params.title);

  if (!(service && service.data)) {
    notFound();
  }

  const { title, meta, faqs, faq_title, contactTitle, btn_text } =
    service.data || {};

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: meta?.meta_title || title,
          description: meta?.meta_description || title,
          url: `https://sonrisarg.com/service/marketing/${params.title}`,
        })}
      />
      <ServiceDetails {...service} />
      <div className="service-details-inner">
        <MDXContent content={service.content} />
        <ServiceDetailsFaq faqs={faqs} faqTitle={faq_title} />
        <ContactBanner contactTitle={contactTitle} btn_text={btn_text} />
      </div>
    </main>
  );
};

export default service;
