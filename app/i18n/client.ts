"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

export const LANGUAGES = ["es", "en"] as const;
export type Lang = (typeof LANGUAGES)[number];
export const LANG_STORAGE_KEY = "tpm-lang";

export const toLang = (value: string | undefined): Lang =>
  value?.startsWith("en") ? "en" : "es";

// Se inicia siempre en español para que el HTML del servidor y el primer
// render del cliente coincidan; el idioma guardado se aplica tras montar
// (ver LangSwitcher).
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "es",
    fallbackLng: "es",
    supportedLngs: LANGUAGES,
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    interpolation: { escapeValue: false },
  });
}

export default i18n;
