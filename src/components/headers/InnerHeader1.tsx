"use client";
import Image from "next/image";
import Link from "next/link";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import ButtonFlip from "../elements/button/ButtonFlip";
import Menu from "../menu/Menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  onlyLight?: boolean;
};

const InnerHeader1 = ({ onlyLight = false }: Props) => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <>
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="container">
          <div className="flex h-[80px] 2xl:h-[100px] items-center gap-[20px] relative justify-between">
            <Link href="/" className="flex items-center gap-0 relative">
              <span className="inline-flex items-center justify-center w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px] bg-[#c8f542] rounded-[20px] 2xl:rounded-[24px] text-black text-[15px] 2xl:text-[17px] font-semibold tracking-[0.08em] [writing-mode:vertical-rl] rotate-180 leading-none whitespace-nowrap z-[1]">
                Bloomex
              </span>
              <span className="relative inline-block -ms-10 w-[130px] h-[130px] 2xl:w-[140px] 2xl:h-[140px] z-[10]">
                <Image
                  src="/assets/imgs/shape/img-s-60.png"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain"
                  alt="Bloomex"
                />
              </span>
            </Link>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-text", onlyLight && "text-text-fixed-2")}
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="hidden md:block">
                <ButtonFlip
                  btnText="Get Started"
                  link="/contact"
                  className={cn(
                    "text-[14px] py-3 px-7 bg-background-2 hover:bg-background-2 text-text-2 hover:text-text-2 [border-radius:0_20px_0_20px] font-medium",
                    onlyLight &&
                      "bg-background-fixed-2 text-text-fixed hover:bg-background-fixed-2 hover:text-text-fixed"
                  )}
                />
              </div>
              <SideNavModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default InnerHeader1;
