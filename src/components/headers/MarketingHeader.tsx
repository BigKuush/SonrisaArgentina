"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ButtonSwap from "../elements/button/ButtonSwap";
import { getDictionary } from "@/locales";

const MarketingHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const dict = getDictionary("es");

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <header className="container large">
      <div
        className={
          "flex h-[80px] 2xl:h-[100px] border-b items-center gap-5 relative justify-between"
        }
      >
        <Link href="/" className="flex items-center gap-[10px]">
          <Image
            src={isLight ? "/assets/imgs/logo/logo-light.png" : "/assets/imgs/logo/logo.png"}
            alt="Sonrisa Argentina"
            width={44}
            height={44}
            className="2xl:w-[50px] 2xl:h-[50px]"
            priority
          />
          <span className="hidden sm:inline text-[15px] 2xl:text-[17px] font-bold tracking-[0.02em] leading-none whitespace-nowrap">
            Sonrisa Argentina
          </span>
        </Link>
        <div className="pos-center hidden xl:block">
          <Menu dict={dict.header} />
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="hidden md:block">
            <ButtonSwap
              link="whatsapp://send?phone=5491127792717&text=Hola!%20Me%20interesa%20el%20marketing%20dental%20para%20mi%20cl%C3%ADnica."
              bgColor={"bg-theme"}
              textColor={"text-text-fixed text-sm"}
              arrowWidthHeight="w-[40px] h-[40px]"
              textClassName="px-[22px] font-normal"
              rootClassName="wc-swap-btn-sm"
              buttonText="Contactar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
