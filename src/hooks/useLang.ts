import { useEffect, useState } from "react";
import { Lang } from "@/locales";

const getLangFromCookie = (): Lang => {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const val = match?.[1];
  if (val === "es" || val === "pt" || val === "en") return val;
  return "en";
};

export const useLang = () => {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    setLang(getLangFromCookie());
  }, []);

  return { lang, setLang };
};

