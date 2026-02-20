import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import MarketingAbout from "@/components/about/MarketingAbout";
import MarketingBlog from "@/components/blog/marketing/MarketingBlog";
// import MarketingClients from "@/components/clients/MarketingClients";
import MarketingFeature from "@/components/features/marketing/MarketingFeature";
import MarketingFunFact from "@/components/funFact/marketing/MarketingFunFact";
import MarketingHero from "@/components/hero/MarketingHero";
import MarketingImage from "@/components/image/MarketingImage";
import MarketingReport from "@/components/report/MarketingReport";
import MarketingService from "@/components/service/marketing/MarketingService";
// import MarketingTestimonial from "@/components/testimonial/marketing/MarketingTestimonial";
import SeoData from "@/components/tools/SeoData";
import MarketingWork from "@/components/work/marketing/MarketingWork";
import MarketingProcess from "@/components/process/marketing/MarketingProcess";
import MarketingFaq from "@/components/faq/marketing/MarketingFaq";
import MarketingCTA from "@/components/cta/MarketingCTA";

const HomePage = () => {
  const { data: hero } = getMainPage("/heros/marketing-hero.mdx");
  const { data: image } = getMainPage("/image/marketing-image.mdx");
  const { data: feature } = getMainPage("/features/marketing-features.mdx");
  const { data: service } = getMainPage("/services/marketing/_main.mdx");
  const services = getAllPages("/services/marketing");
  const works = getAllPages("/works/marketing");
  const { data: workMain } = getMainPage("/works/marketing/_main.mdx");
  const { data: about } = getMainPage("/about/marketing-about.mdx");
  const { data: funFact } = getMainPage("/funFact/marketing-fun-fact.mdx");
  const { data: process } = getMainPage("/process/marketing-process.mdx");
  const { data: faq } = getMainPage("/faqs/marketing-faqs.mdx");
  const { data: cta } = getMainPage("/cta/marketing-cta.mdx");
  const { data: report } = getMainPage("/report/marketing-report.mdx");
  const { data: blog } = getMainPage("/blogs/marketing/_main.mdx");
  const blogs = getAllPages("/blogs/branding");
  const latestBlogs = [...blogs]
    .sort((a, b) => ((b.data as any)?.id || 0) - ((a.data as any)?.id || 0))
    .slice(0, 3);

  return (
    <main>
      <SeoData
        title="Sonrisa Argentina — Marketing Digital Dental en Argentina"
        description="Agencia de marketing digital especializada en clinicas dentales. Mas pacientes nuevos con SEO, sitios web y gestion de resenas."
      />
      <MarketingHero {...hero} />
      <MarketingImage {...image} />
      <MarketingFeature {...feature} />
      <MarketingService {...service} services={services} />
      <MarketingProcess {...process} />
      <MarketingWork {...workMain} projects={works} />
      <MarketingAbout {...about} />
      <MarketingFaq {...faq} />
      <MarketingFunFact {...funFact} />
      <MarketingCTA {...cta} />
      <MarketingReport {...report} />
      <MarketingBlog blogs={latestBlogs} {...blog} />
    </main>
  );
};

export default HomePage;
