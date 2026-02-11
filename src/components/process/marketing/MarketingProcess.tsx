"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";

type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  title: string;
  sub_title: string;
  steps: Step[];
};

const MarketingProcess = ({ title, sub_title, steps }: Props) => {
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
        <div className="text-center mb-[40px] md:mb-[60px]">
          <p className="has_fade_anim text-[16px] uppercase font-medium tracking-[0.08em] text-theme mb-[15px]">
            {sub_title}
          </p>
          <MarketingSectionTitle
            title={title}
            className="!font-light mx-auto max-w-[700px]"
          />
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="has_fade_anim border border-border rounded-[20px] p-[30px] md:p-[40px] transition-all duration-300 hover:border-theme"
              data-fade-from="bottom"
              data-delay={`${0.15 * (i + 1)}`}
            >
              <span className="text-[48px] md:text-[60px] font-light text-theme leading-none">
                {step.number}
              </span>
              <h3 className="text-[20px] md:text-[24px] font-medium mt-[20px] leading-[1.3]">
                {step.title}
              </h3>
              <p className="mt-[12px] text-text leading-[1.5]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingProcess;
