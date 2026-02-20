"use client";

import Image from "next/image";
import { useRef } from "react";
import siteConfig from "@/config/siteConfig.json";
import EmailInput2 from "@/components/elements/input/EmailInput2";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/useLang";

type Props = {
  data: {
    title: string;
    subtitle: string;
    locationData: {
      id: number;
      city: string;
      address: string;
    }[];

    navData: {
      id: number;
      name: string;
      path: string;
    }[];
  };
  TitleclassName?: string;
};

const Footer2 = ({ data, TitleclassName }: Props) => {
  const { title, subtitle, locationData, navData } = data;
  const { copyright } = siteConfig.footer_info;
  const { lang } = useLang();
  const copyrightText =
    lang === "es"
      ? "© 2026 Sonrisa Argentina. Todos los derechos reservados."
      : lang === "pt"
      ? "© 2026 Sonrisa Argentina. Todos os direitos reservados."
      : copyright.label;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <footer className="bg-background-3 overflow-hidden">
      <div className="container2" ref={containerRef}>
        <div className="relative z-10 section-spacing-top">
          <div className="hidden md:block absolute top-0 start-[calc(100%-235px)] -z-10 w-[350px] xl:w-[550px]">
            <Image
              src="/assets/imgs/shape/img-s-33.png"
              width={550}
              height={508}
              alt="shape_1"
              className="h-auto max-w-full inline-block"
            />
          </div>

          <div>
            <div>
              <h2
                className={cn(
                  "leading-none text-text-fixed-2 text-[35px] md:text-[40px] lg:text-[70px] xl:text-[100px] -mt-2 md:-mt-[9px] lg:-mt-[17px] xl:-mt-[25px] has_text_mov_anim",
                  TitleclassName
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title)}
              />
            </div>
            <div className="mt-[18px]">
              <p className="has_fade_anim text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[30px] max-w-[850px] text-text-fixed-3 font-light">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="border-t border-[#ffffff14] mt-10 md:mt-[50px] 2xl:mt-[60px] py-[39px] md:py-[59px] 2xl:pb-[79px] grid gap-y-[30px] gap-x-10 xl:gap-x-[120px] md:grid-cols-[150px_150px_1fr] lg:grid-cols-[190px_190px_1fr]">
            {locationData.map((item, i) => (
              <div key={item.id}>
                <h2 className="text-[20px] text-text-fixed-2 leading-[1.5]">
                  {item.city}
                </h2>
                <ul className=" mt-[11px]">
                  <li className="text-[16px] leading-[1.46] text-text-fixed-3">
                    {item.address}
                  </li>
                </ul>
              </div>
            ))}

            <EmailInput2 />
          </div>
        </div>
      </div>

      <div className="bg-background-3">
        <div className="container2">
          <div className="border-t border-[#ffffff14] flex justify-center items-center py-[35px]">
            <p className="text text-[14px] md:text-[16px] leading-[1.37] text-text-fixed-3 text-center">
              {copyrightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
