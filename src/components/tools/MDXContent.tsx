import { MDXRemote } from "next-mdx-remote/rsc";
import mdx from "./mdx";

const MDXContent = ({ content }: { content: any }) => {


  return (
    <>
      {/* @ts-ignore */}
      <MDXRemote source={content} components={mdx} options={{ blockJS: false }} />
    </>
  );
};

export default MDXContent;
