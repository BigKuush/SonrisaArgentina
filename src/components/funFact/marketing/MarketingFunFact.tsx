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
          <div className="has_fade_anim overflow-x-auto overflow-y-visible -mx-3 px-3 md:mx-0 md:px-0 md:overflow-visible">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:flex-nowrap md:items-start md:justify-center min-w-0">
              <div
                className="has_fade_anim h-[260px] w-[260px] shrink-0 xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[48px] xl:text-[80px] 2xl:text-[100px] leading-none max-w-full px-1">
                  {projects}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Enfoque</span> <br />
                  odontología
                </p>
              </div>
              <div
                className="has_fade_anim sm:ms-[-20px] md:ms-[-30px] lg:ms-[-50px] h-[260px] w-[260px] shrink-0 xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="right"
              >
                <h3 className="text-[48px] xl:text-[80px] 2xl:text-[100px] leading-none max-w-full">
                  {customers}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Sitio + SEO</span> <br />
                  + reseñas
                </p>
              </div>
              <div
                className="has_fade_anim sm:ms-[-20px] md:ms-[-30px] lg:ms-[-50px] h-[260px] w-[260px] shrink-0 xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="left"
              >
                <h3
                  data-count={experiences}
                  className="has_count_anim text-[48px] xl:text-[80px] 2xl:text-[100px] leading-none"
                >
                  {experiences}
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
                  <span className="font-bold">Días</span> <br />
                  primera entrega
                </p>
              </div>
              <div
                className="has_fade_anim sm:ms-[-20px] md:ms-[-30px] lg:ms-[-50px] h-[260px] w-[260px] shrink-0 xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px] border border-border-2 rounded-full flex justify-center items-center flex-col px-[30px] text-center"
                data-fade-from="left"
              >
                <h3 className="text-[48px] xl:text-[80px] 2xl:text-[100px] leading-none">
                  {awards}h
                </h3>
                <p className="text-[20px] font-plusjakartasans text-text mt-[15px]">
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
