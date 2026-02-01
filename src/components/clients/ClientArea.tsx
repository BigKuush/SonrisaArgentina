"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ImageComponent from "../tools/ImageComponent";

type Props = {
  brands: {
    image: {
      dark: string;
      light: string;
    };
  }[];
};

const borderClassMap: Record<number, string | undefined> = {
  0: "md:border-b-0",
  1: "md:border-e-0",
  3: "md:border-s-0 md:border-e-0",
  4: "md:border-e-0",
  6: "md:border-t-0",
  7: "md:border-t-0 md:border-s-0 md:border-e-0",
  8: "md:border-t-0 md:border-e-0",
  9: "md:border-t-0",
  10: "md:border-s-0",
  11: "md:border-t-0",
};

const indexClassMap: Record<number, string | undefined> = {
  0: "md:col-start-2",
  1: "md:col-start-1",
  6: "md:col-start-2",
  11: "md:col-start-5",
};

const ClientArea = ({ brands }: Props) => {
  // Block скрыт по требованию
  return null;
};

export default ClientArea;
