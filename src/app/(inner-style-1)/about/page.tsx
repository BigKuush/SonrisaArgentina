import type { Metadata } from "next";
import AboutAward from "@/components/about/AboutAward";
import AboutFaqs from "@/components/about/AboutFaqs";
import AboutHero from "@/components/about/AboutHero";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import AboutTeam from "@/components/team/AboutTeam";
import TeamCounterArea from "@/components/team/TeamCounterArea";
import PricingArea from "@/components/pricing/PricingArea";
import ClientArea from "@/components/clients/ClientArea";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ContactBanner from "@/components/banner/ContactBanner";
import AboutBanner from "@/components/banner/AboutBanner";

export function generateMetadata(): Metadata {
  const { data: about } = getMainPage("/about/branding-about.mdx");
  const { meta } = about || {};

  return buildPageMetadata({
    title: meta?.meta_title,
    description: meta?.meta_description,
    path: "/about",
  });
}

const About = () => {
  const { data: about } = getMainPage("/about/branding-about.mdx");
  const { data: aboutBanner } = getMainPage("/banner/about-banner.mdx");
  const { data: testimonial } = getMainPage(
    "/testimonial/about_testimonial.mdx"
  );
  const { data: aboutFaqs } = getMainPage("/faqs/about-faqs.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: pricingData } = getMainPage("/pricings/main-pricing.mdx");
  const { data: contactBanner } = getMainPage("/banner/contact-banner.mdx");
  const { data: brands } = getMainPage("/brands/brands1.mdx");

  const { title, hero, counter_area, award_area, team_area } = about || {};

  return (
    <main>
      <AboutHero {...hero} />
      <TeamCounterArea {...counter_area} />
      <AboutAward {...award_area} />
      <AboutBanner {...aboutBanner} />
      <AboutTestimonial
        testimonials={testimonial.testimonials}
        icons={testimonial.icon}
      />
      <AboutFaqs {...aboutFaqs} />
      <AboutTeam teamMembers={teamMembers} {...team_area} />
      <PricingArea {...pricingData.pricing} />
      <ContactBanner {...contactBanner} />
      <ClientArea brands={brands.brands} />
    </main>
  );
};

export default About;
