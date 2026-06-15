import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ClientArea from "@/components/clients/ClientArea";
import ClientSlider from "@/components/clients/ClientSlider";
import ServiceInnerArea from "@/components/service/ServiceInnerArea";
import PricingArea from "@/components/pricing/PricingArea";
import ContactBanner from "@/components/banner/ContactBanner";
import AboutBanner from "@/components/banner/AboutBanner";

export function generateMetadata(): Metadata {
  const { data: hero } = getMainPage("/services/main/_index.mdx");
  const { title, meta } = hero || {};

  return buildPageMetadata({
    title: meta?.meta_title || title,
    description: meta?.meta_description,
    path: "/service",
  });
}

const Services = () => {
  const { data: hero } = getMainPage("/services/main/_index.mdx");
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const services = getAllPages("/services/marketing");
  const { data: aboutBanner } = getMainPage("/banner/about-banner.mdx");
  const { data: pricingData } = getMainPage("/pricings/main-pricing.mdx");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");

  const { title, title2, description2 } = hero || {};

  return (
    <main>
      <ServicesHero {...hero} />
      <ClientSlider clients={clients.brands} />
      <ServiceInnerArea
        title={title2}
        description={description2}
        services={services}
        linkPrefix="/service/marketing/"
      />
      <AboutBanner {...aboutBanner} />
      <PricingArea {...pricingData.pricing} />
      <ContactBanner {...contactBanner} />
      <ClientArea brands={brands.brands} />
    </main>
  );
};

export default Services;
