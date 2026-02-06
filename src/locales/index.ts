import en from "./en";
import es from "./es";
import pt from "./pt";

export type Lang = "en" | "es" | "pt";

export const dictionaries: Record<Lang, any> = {
  en,
  es,
  pt,
};

export const getDictionary = (lang: Lang = "es") => dictionaries[lang] || dictionaries.es;

