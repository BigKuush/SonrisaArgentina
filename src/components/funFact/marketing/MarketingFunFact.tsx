"use client";

import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  projects: string;
  customers: string;
  experiences: number;
  awards: number;
};

const MarketingFunFact = ({
  title,
  sub_title,
  description,
  projects,
  customers,
  experiences,
  awards,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="section-spacing-bottom" ref={containerRef}>
      <div className="inner-container">
        <div>
          <div className="grid gap-y-5 gap-x-[70px] justify-center sm:justify-end  md:me-[50px] 2xl:me-20 mb-[39px] md:mb-[59px] 2xl:mb-[89px] grid-cols-[auto] lg:grid-cols-[auto_690px] xl:grid-cols-[auto_770px]">
            <div className="mt-[20px]">
              <span
                className="has_fade_anim subtitle_bold text-[18px] font-plusjakartasans text-text"
                dangerouslySetInnerHTML={convertWithBrSpan(sub_title)}
              />
            </div>
            <div>
              <h2
                className="has_fade_anim text-[35px] md:text-[40px] lg:text-[46px] xl:text-[70px] 2xl:text-[80px] leading-[1.05]"
                data-delay="0.30"
                dangerouslySetInnerHTML={convertWithBrSpan(title)}
              />
              <p className="has_fade_anim mt-[20px] max-w-[400px]" data-delay="0.45">
                {description}
              </p>
            </div>
          </div>
          <div className="has_fade_anim">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8 place-items-center justify-items-center max-w-[1200px] mx-auto">
              <div
                className="has_fade_anim h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[24px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[44px] sm:text-[48px] xl:text-[72px] 2xl:text-[80px] leading-none max-w-full px-1">
                  {projects}
                </h3>
                <p className="text-[18px] sm:text-[20px] font-plusjakartasans text-text mt-[12px]">
                  <span className="font-bold">Enfoque</span> <br />
                  odontología
                </p>
              </div>
              <div
                className="has_fade_anim h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[24px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[44px] sm:text-[48px] xl:text-[72px] 2xl:text-[80px] leading-none max-w-full">
                  {customers}
                </h3>
                <p className="text-[18px] sm:text-[20px] font-plusjakartasans text-text mt-[12px]">
                  <span className="font-bold">Sitio + SEO</span> <br />
                  + reseñas
                </p>
              </div>
              <div
                className="has_fade_anim h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[24px] text-center"
                data-fade-from="left"
              >
                <h3
                  data-count={experiences}
                  className="has_count_anim text-[44px] sm:text-[48px] xl:text-[72px] 2xl:text-[80px] leading-none"
                >
                  {experiences}
                </h3>
                <p className="text-[18px] sm:text-[20px] font-plusjakartasans text-text mt-[12px]">
                  <span className="font-bold">Días</span> <br />
                  primera entrega
                </p>
              </div>
              <div
                className="has_fade_anim h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[24px] text-center"
                data-fade-from="left"
              >
                <h3 className="text-[44px] sm:text-[48px] xl:text-[72px] 2xl:text-[80px] leading-none">
                  {awards}h
                </h3>
                <p className="text-[18px] sm:text-[20px] font-plusjakartasans text-text mt-[12px]">
                  <span className="font-bold">Respuesta</span> <br />
                  por WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFunFact;
