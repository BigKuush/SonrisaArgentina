"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import FaqSection from "@/components/faq/branding/FaqSection";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const MarketingFaq = ({ title, sub_title, description, faqs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="section-spacing" ref={containerRef}>
      <div className="inner-container">
        <div className="grid gap-y-[40px] gap-x-[60px] grid-cols-1 lg:grid-cols-[1fr,600px] xl:grid-cols-[1fr,740px]">
          <div>
            <p className="has_fade_anim text-[16px] uppercase font-medium tracking-[0.08em] text-theme mb-[15px]">
              {sub_title}
            </p>
            <MarketingSectionTitle
              title={title}
              className="!font-light max-w-[400px]"
            />
            <div className="mt-[22px]">
              <p className="has_fade_anim max-w-[350px] text-text leading-[1.6]">
                {description}
              </p>
            </div>
          </div>
          <div className="has_fade_anim" data-delay="0.45">
            <FaqSection faqs={faqs} className="font-plusjakartasans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFaq;
