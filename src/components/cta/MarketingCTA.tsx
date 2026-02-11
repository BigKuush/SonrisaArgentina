"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import FlexibleForm from "@/components/form/branding/FlexibleForm";

type Props = {
  title: string;
  sub_title: string;
  description: string;
};

const MarketingCTA = ({ title, sub_title, description }: Props) => {
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
        <div className="bg-background-3 rounded-[30px] p-[30px] md:p-[50px] lg:p-[70px] xl:p-[90px]">
          <div className="grid gap-y-[40px] gap-x-[60px] grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="has_fade_anim text-[16px] uppercase font-medium tracking-[0.08em] text-theme mb-[15px]">
                {sub_title}
              </p>
              <MarketingSectionTitle
                title={title}
                className="!font-light text-text-fixed-2 max-w-[500px]"
              />
              <p className="has_fade_anim mt-[20px] text-text-fixed-3 leading-[1.6] max-w-[450px]">
                {description}
              </p>
            </div>
            <div className="has_fade_anim" data-delay="0.30">
              <FlexibleForm btnText="Enviar consulta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingCTA;
