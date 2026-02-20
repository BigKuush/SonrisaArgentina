"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
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
          <span className="inline-flex items-center justify-center h-[44px] 2xl:h-[50px] px-[14px] bg-[#C9F31D] rounded-[12px] 2xl:rounded-[14px] text-[#121212] text-[13px] 2xl:text-[15px] font-bold tracking-[0.04em] leading-none whitespace-nowrap">
            Sonrisa Argentina
          </span>
        </Link>
        <div className="pos-center hidden xl:block">
          <Menu dict={dict.header} />
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="hidden md:block">
            <ButtonSwap
              link="/contact"
              bgColor={"bg-theme"}
              textColor={"text-text-fixed text-sm"}
              arrowWidthHeight="w-[40px] h-[40px]"
              textClassName="px-[22px] font-normal"
              rootClassName="wc-swap-btn-sm"
              buttonText="Contactar"
            />
          </div>
          <SideNavModal />
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
