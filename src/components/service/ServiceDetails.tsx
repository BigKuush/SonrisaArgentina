"use client";

import Image from "next/image";
import { useRef } from "react";
import { TServiceType } from "@/types";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import SectionTitle from "../sectionTitle/SectionTitle";

const ServiceDetails = ({ data }: TServiceType) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="pt-[80px] xl:pt-[100px]">
      <div className="container2" ref={containerRef}>
        <div className="thumb-main relative overflow-hidden rounded-[12px]">
          <Image
            src={data.image}
            alt="service-details-img"
            width={1290}
            height={630}
            className="w-full"
          />
        </div>
        <div className="grid items-center mt-[46px] lg:grid-cols-[1fr,460px] xl:grid-cols-[1fr,520px] gap-y-[20px] gap-x-[60px]">
          <SectionTitle
            title={data.title}
            className="text-[30px] sm:text-[35px] md:mt-[-11px] md:text-[40px] lg:mt-[-12px] lg:text-[44px] xl:mt-[-17px] xl:text-[60px]"
            heading1
          />
          <div className="p-0 mb-1 has_fade_anim">
            <ul className="grid leading-[1] sm:grid-cols-[auto_auto] sm:gap-x-[50px] gap-y-[10px] justify-start lg:justify-between p-0 m-0">
              {data.features.map((item: string, index: number) => (
                <li className="" key={index}>
                  <span className="mr-[13px]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
