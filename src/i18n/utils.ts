// utils.ts for i18n support in Astro
import { ui, defaultLang } from "./ui.ts";

/**
 * Determine language from the request URL.
 * Expected format: /en/... or /es/... ; defaults to defaultLang.
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, first] = url.pathname.split('/') ;
  if (first && first in ui) return first as keyof typeof ui;
  return defaultLang as keyof typeof ui;
}

/**
 * Return a translation function for the given language.
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // fallback to default language if missing
    return (ui[lang] && ui[lang][key]) || ui[defaultLang][key];
  };
}
