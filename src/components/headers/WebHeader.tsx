"use client";

import Menu from "@/components/menu/Menu";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import GlobalSearch from "../tools/GlobalSearch";
import { getDictionary } from "@/locales";
import { useLang } from "@/hooks/useLang";

const WebHeader = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);
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

  return (
    <header className="border-b">
      <div className="inner-container large ">
        <div
          className={
            "flex h-[100px] items-center gap-[20px] relative justify-between"
          }
        >
          <div className="w-[64px] h-[64px]" aria-hidden />
          <div className="pos-center hidden xl:block">
            <Menu
              className="text-[22px] [&_button]:text-[22px] [&_a]:text-[22px] [&_svg]:w-4 [&_svg]:h-4 uppercase font-teko"
              dict={dict.header}
            />
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
                aria-label="Change language"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="pt">PT</option>
              </select>
            </div>
            <div>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setOpen(true)}
              >
                <Search size={20} />
              </Button>
            </div>
            <SideNavModal />
          </div>
        </div>
      </div>
      <GlobalSearch open={open} setOpen={setOpen} />
    </header>
  );
};

export default WebHeader;
