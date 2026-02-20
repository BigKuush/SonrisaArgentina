import { useEffect, useState } from "react";
import { Lang } from "@/locales";

const DEFAULT_LANG: Lang = "es";

const getLangFromCookie = (): Lang => {
  if (typeof document === "undefined") return DEFAULT_LANG;
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const val = match?.[1];
  if (val === "es" || val === "pt" || val === "en") return val;
  // No cookie set yet — set default and return it
  document.cookie = `lang=${DEFAULT_LANG}; path=/; max-age=31536000`;
  return DEFAULT_LANG;
};

export const useLang = () => {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLang(getLangFromCookie());
  }, []);

  return { lang, setLang };
};
