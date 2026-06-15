import type { Metadata } from "next";
import SeoAbout from "@/components/about/SeoAbout";
import SeoBlog from "@/components/blog/seo/SeoBlog";
import MarketingCTA from "@/components/cta/MarketingCTA";
import MarketingFaq from "@/components/faq/marketing/MarketingFaq";
import SeoFeatures from "@/components/features/seo/SeoFeatures";
import SeoFunFact from "@/components/funFact/seo/SeoFunFact";
import SeoHero from "@/components/hero/SeoHero";
import SeoReport from "@/components/report/SeoReport";
import SeoService from "@/components/service/seo/SeoService";
import SeoTeam from "@/components/team/seo/SeoTeam";
import SeoTestimonial from "@/components/testimonial/seo/SeoTestimonial";
import { buildPageMetadata } from "@/lib/seo/metadata";
import JsonLd, { faqSchema, localBusinessSchema } from "@/components/tools/JsonLd";
import SeoWork from "@/components/work/seo/SeoWork";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

export const metadata: Metadata = buildPageMetadata({
  title: "SEO local para clínicas dentales en Argentina | Sonrisa Argentina",
  description:
    "SEO local en Buenos Aires y Argentina: visibilidad en Google para captar pacientes nuevos y más primeras consultas en tu consultorio.",
  path: "/seo",
});

const SEO_BLOG_SLUGS = [
  "seo-local-buenos-aires-clinicas-dentales",
  "google-maps-clinicas-dentales",
  "copy-paginas-servicio-seo-dental",
  "estructura-paginas-servicio-seo-dental",
];

const Seo = () => {
  const { data: hero } = getMainPage("/heros/seo-hero.mdx");
  const { data: features } = getMainPage("/features/seo-features.mdx");
  const { data: about } = getMainPage("/about/seo-about.mdx");
  const { data: service } = getMainPage("/services/seo/_main.mdx");
  const services = getAllPages("/services/marketing");
  const { data: report } = getMainPage("/report/seo-report.mdx");
  const { data: work } = getMainPage("/works/marketing/_main.mdx");
  const works = getAllPages("/works/marketing");
  const { data: funFact } = getMainPage("/funFact/seo-fun-fact.mdx");
  const { data: clientFeedback } = getMainPage("/testimonial/seo/_main.mdx");
  const { data: testimonials } = getMainPage(
    "/testimonial/seo-testimonial.mdx"
  );
  const { data: blog } = getMainPage("/blogs/seo/_main.mdx");
  const allBlogs = getAllPages("/blogs/branding");
  const seoBlogs = SEO_BLOG_SLUGS.map((slug) =>
    allBlogs.find((post) => post.slug === slug)
  ).filter(Boolean) as typeof allBlogs;
  const { data: teamSection } = getMainPage("/team/seo/_main.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: faq } = getMainPage("/faqs/seo-faqs.mdx");
  const { data: cta } = getMainPage("/cta/marketing-cta.mdx");

  return (
    <main>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(faq.faqs)} />
      <SeoHero {...hero} />
      <SeoFeatures {...features} />
      <SeoAbout {...about} />
      <SeoService services={services} {...service} />
      <SeoReport {...report} />
      <SeoWork works={works} {...work} />
      <SeoFunFact {...funFact} />
      <SeoTestimonial
        clientFeedbackSection={clientFeedback}
        testimonials={testimonials.testimonials}
      />
      <SeoTeam teamMember={teamMembers} {...teamSection} />
      <MarketingFaq {...faq} />
      <SeoBlog blogs={seoBlogs} {...blog} />
      <MarketingCTA {...cta} />
    </main>
  );
};

export default Seo;
