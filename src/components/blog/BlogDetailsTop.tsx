"use client";

import Image from "next/image";
import { TBlogType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MainSectionTitle from "../sectionTitle/MainSectionTitle";

const BlogDetailsTop = ({ data }: TBlogType) => {
  const { title, image } = data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="mb-[40px]">
        <MainSectionTitle
          title={title}
          heading1
          className="font-normal text-[36px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]"
        />
      </div>
      {image && (
        <div className="has_fade_anim overflow-hidden rounded-[20px]">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={700}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetailsTop;
