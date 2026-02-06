import WebAbout from "@/components/about/WebAbout";
import WebBlog from "@/components/blog/web/WebBlog";
import ClientSlider from "@/components/clients/ClientSlider";
import WebEnterPrise from "@/components/enterprise/web/WebEnterPrise";
import WebFaq from "@/components/faq/web/WebFaq";
import WebFeature from "@/components/features/web/WebFeature";
import WebHero from "@/components/hero/WebHero";
import WebService from "@/components/service/web/WebService";
import WebSkill from "@/components/skill/web/WebSkill";
import WebTeam from "@/components/team/web/WebTeam";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import SeoData from "@/components/tools/SeoData";

const HomePage = () => {
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const { data: about } = getMainPage("/about/web/main.mdx");
  const { data: feature } = getMainPage("/features/web-features.mdx");
  const { data: skill } = getMainPage("/skill/web-skill.mdx");
  const { data: enterprise } = getMainPage("/enterprise/web-enterprise.mdx");
  const { data: service } = getMainPage("/services/web/_main.mdx");
  const services = getAllPages("/services/web");
  const { data: team } = getMainPage("/team/web/_main.mdx");
  const { data: faqsData } = getMainPage("/faqs/web-faqs.mdx");
  const { data: blog } = getMainPage("/blogs/web/_main.mdx");
  const blogs = getAllPages("/blogs/branding");
  const latestBlogs = [...blogs]
    .sort((a, b) => ((b.data as any)?.id || 0) - ((a.data as any)?.id || 0))
    .slice(0, 3);

  return (
    <div>
      <BindBtnMoveEffect />
      <SeoData
        title="Bloomex — Web Agency Buenos Aires"
        description="Bloomex builds fast, SEO-optimized websites for service businesses in Buenos Aires, Argentina."
      />
      <WebHero />
      <ClientSlider
        clients={clients.brands}
        shapeImage="/assets/imgs/shape/img-s-65.png"
      />
      <WebAbout data={{ ...about }} />
      <WebFeature {...feature} />
      <WebSkill {...skill} />
      <WebEnterPrise {...enterprise} />
      <WebService {...service} services={services} />
      <WebTeam teamMembers={[]} {...team} />
      <WebFaq {...faqsData} />
      <WebBlog blogs={latestBlogs} {...blog} />
    </div>
  );
};

export default HomePage;
