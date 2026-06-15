"use client";

import { TServiceType } from "@/types";
import ImageComponent from "../tools/ImageComponent";
import Link from "next/link";
import { convertWithBrSpan } from "@/lib/helper/converter";

type Props = {
  service: TServiceType;
  linkPrefix?: string;
};

const ServiceInnerCard = ({ service, linkPrefix = "/service/" }: Props) => {
  const { icon, title, features, image } = service?.data || {};

  const iconSrc =
    typeof icon === "object"
      ? icon?.dark
      : typeof icon === "string"
        ? icon
        : image;

  const iconLightSrc =
    typeof icon === "object" ? icon?.light : iconSrc;

  return (
    <div className="px-[30px] xl:px-[70px] border-s border-[#ECE7E4] dark:border-[#252525]">
      {iconSrc ? (
        <div className="pb-[25px] xl:pb-12">
          <ImageComponent
            src={iconSrc}
            darkSrc={iconLightSrc}
            width={60}
            height={60}
            alt={title || "Servicio"}
            className="object-contain"
          />
        </div>
      ) : null}
      <Link href={`${linkPrefix}${service?.slug}`}>
        <h2
          className="text-[24px] xl:text-[30px] pb-[25px] leading-[1.08]"
          dangerouslySetInnerHTML={convertWithBrSpan(title) || { __html: "" }}
        />
      </Link>
      {features?.length ? (
        <ul className="list-disc list-inside">
          {features.map((item, index) => (
            <li
              className="text-[18px] text-text-3 font-light pb-[15px]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ServiceInnerCard;
