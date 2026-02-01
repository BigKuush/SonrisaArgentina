import BlogArea from "@/components/blog/BlogArea";
import BlogFeatureArea from "@/components/blog/BlogFeatureArea";
import FeaturedPost from "@/components/blog/FeaturedPost";
import SeoData from "@/components/tools/SeoData";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

const BlogPage = () => {
  const blogs = getAllPages("/blogs/branding");
  const sortedBlogs = [...blogs].sort(
    (a, b) => ((b.data as any)?.id || 0) - ((a.data as any)?.id || 0)
  );
  const { data: blogPage } = getMainPage("/blogs/branding/_index.mdx");
  const lastThreeBlogs = sortedBlogs.slice(0, 3);

  const { title, feature, blog_area, meta } = blogPage || {};
  const totalPosts = sortedBlogs.length;
  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
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
