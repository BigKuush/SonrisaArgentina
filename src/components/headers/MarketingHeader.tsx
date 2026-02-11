"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ButtonSwap from "../elements/button/ButtonSwap";
import { useLang } from "@/hooks/useLang";
import { getDictionary } from "@/locales";

const MarketingHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const { lang: langFromCookie } = useLang();
  const [lang, setLang] = useState("es");
  const dict = getDictionary(lang as "en" | "es" | "pt");

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  useEffect(() => {
    setLang(langFromCookie);
  }, [langFromCookie]);

  const ctaText =
    lang === "es" ? "Contactar" : lang === "pt" ? "Contato" : "Contact";

  return (
    <header className="container large">
      <div
        className={
          "flex h-[80px] 2xl:h-[100px] border-b items-center gap-5 relative justify-between"
        }
      >
        <Link href="/" className="flex items-center gap-0 relative">
          <span className="inline-flex items-center justify-center w-[60px] h-[60px] 2xl:w-[70px] 2xl:h-[70px] bg-[#E85C30] rounded-[16px] 2xl:rounded-[20px] text-white text-[12px] 2xl:text-[14px] font-semibold tracking-[0.08em] [writing-mode:vertical-rl] rotate-180 leading-none whitespace-nowrap z-[1]">
            Bloomex
          </span>
          <span className="relative inline-block -ms-8 w-[100px] h-[100px] 2xl:w-[110px] 2xl:h-[110px] z-[10]">
            <Image
              src="/assets/imgs/shape/img-s-60.png"
              width={110}
              height={110}
              className="w-full h-full object-contain"
              alt="Bloomex"
            />
          </span>
        </Link>
        <div className="pos-center hidden xl:block">
          <Menu dict={dict.header} />
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="hidden sm:block">
            <select
              value={lang}
              onChange={(e) => {
                const val = e.target.value;
                setLang(val);
                document.cookie = `lang=${val}; path=/; max-age=31536000`;
                window.location.reload();
              }}
              className="border border-border rounded-full px-3 py-1 text-xs uppercase tracking-[0.08em] bg-background cursor-pointer"
              aria-label="Cambiar idioma"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="pt">PT</option>
            </select>
          </div>
          <div className="hidden md:block">
            <ButtonSwap
              link="/contact"
              bgColor={"bg-theme"}
              textColor={"text-text-fixed text-sm"}
              arrowWidthHeight="w-[40px] h-[40px]"
              textClassName="px-[22px] font-normal"
              rootClassName="wc-swap-btn-sm"
              buttonText={ctaText}
            />
          </div>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
