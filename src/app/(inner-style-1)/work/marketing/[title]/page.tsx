import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MDXContent from "@/components/tools/MDXContent";
import WorkDetails from "@/components/work/WorkDetails";
import WorkDetailNav from "@/components/elements/workDetails/WorkDetailNav";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/works/marketing");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export function generateMetadata({ params }: Props): Metadata {
  const works = getAllPages("/works/marketing");
  const work = works.find((item) => item.slug === params.title);

  if (!work?.data) {
    return {};
  }

  const { title, meta } = work.data;

  return buildPageMetadata({
    title: meta?.meta_title || title,
    description: meta?.meta_description,
    path: `/work/marketing/${params.title}`,
    image: work.data.image,
  });
}

const work = ({ params }: Props) => {
  const works = getAllPages("/works/marketing");
  const slugs = works.map((item) => item.slug);

  if (!(works && works.length)) {
    notFound();
  }
  const work = works.find((item) => item.slug === params.title);

  if (!(work && work.data)) {
    notFound();
  }

  return (
    <main>
      <WorkDetails {...work} />
      <div className="container2 result-area">
        <MDXContent content={work.content} />
      </div>
      <WorkDetailNav slugs={slugs} params={params} />
    </main>
  );
};

export default work;
