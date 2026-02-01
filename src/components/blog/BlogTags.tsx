import Link from "next/link";

type Props = {
  tags: {
    name: string;
    link: string;
  }[];
};

const BlogTags = ({ tags }: Props) => {
  if (!tags?.length) return null;
  return null;
};

export default BlogTags;
