"use client";

import siteConfig from "@/config/siteConfig.json";
import FooterCta from "@/components/footer/FooterCta";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { SocialShare1 } from "../tools/Social";
import { useLang } from "@/hooks/useLang";

type Props = {
  footerNav: {
    id: number;
    name: string;
    path: string;
  }[];
};

const Footer4 = ({ footerNav }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info, social } = siteConfig;
  const { lang } = useLang();
  const copyrightText =
    lang === "es"
      ? "© 2026 Sonrisa Argentina. Todos los derechos reservados."
      : lang === "pt"
      ? "© 2026 Sonrisa Argentina. Todos os direitos reservados."
      : "© 2026 Sonrisa Argentina. All rights reserved.";

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <footer className="footer-area bg-background-3" ref={containerRef}>
      <FooterCta ctaText={footer_info.ctaText} ctaMail={footer_info.email} />
      <div className="inner-container large text-text-fixed-2 font-teko">
        <div className="flex justify-center pb-[28px] 2xl:pb-[38px]">
          <p className="text-text-fixed-2 text-[16px] xl:text-[18px] leading-none">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
