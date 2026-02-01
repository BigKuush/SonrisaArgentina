import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import BlogDetailsTop from "@/components/blog/BlogDetailsTop";
import BlogTags from "@/components/blog/BlogTags";
import BlogInnerArea from "@/components/blog/BlogInnerArea";
import SeoData from "@/components/tools/SeoData";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/ai");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const blog = ({ params }: Props) => {
  const blogs = getAllPages("/blogs/ai");

  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);

  if (!(blog && blog.data)) {
    notFound();
  }

  const { title, tags, meta } = blog?.data || {};

  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <div className="container2">
        <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px]">
          <BlogDetailsTop {...blog} />
          <div className="mt-[60px] lg:mt-20 xl:mt-[100px]">
            <div className="mdx-body text-[18px] leading-[1.8] space-y-5 max-w-[960px]">
              <MDXContent content={blog.content} />
            </div>
            <BlogTags tags={tags} />
          </div>
          <BlogInnerArea blogs={blogs.slice(0, 3)} />
        </div>
      </div>
    </main>
  );
};

export default blog;
