import type { Metadata } from "next";
import BlogArea from "@/components/blog/BlogArea";
import BlogFeatureArea from "@/components/blog/BlogFeatureArea";
import FeaturedPost from "@/components/blog/FeaturedPost";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const { data: blogPage } = getMainPage("/blogs/branding/_index.mdx");
  const { title, meta } = blogPage || {};

  return buildPageMetadata({
    title: meta?.meta_title || title,
    description: meta?.meta_description,
    path: "/blog",
  });
}

const BlogPage = () => {
  const blogs = getAllPages("/blogs/branding");
  const sortedBlogs = [...blogs].sort(
    (a, b) => ((b.data as any)?.id || 0) - ((a.data as any)?.id || 0)
  );
  const { data: blogPage } = getMainPage("/blogs/branding/_index.mdx");
  const lastThreeBlogs = sortedBlogs.slice(0, 3);

  const { feature, blog_area } = blogPage || {};
  const totalPosts = sortedBlogs.length;
  return (
    <main>
      <BlogFeatureArea
        {...feature}
        total_post={totalPosts}
        writer_count={0}
      />
      <FeaturedPost blogs={lastThreeBlogs} />
      <BlogArea blogs={sortedBlogs} {...blog_area} />
    </main>
  );
};

export default BlogPage;
