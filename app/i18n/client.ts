"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      lng: "es",
      fallbackLng: "es",
      resources: {
        es: { translation: es },
        en: { translation: en },
      },
      interpolation: { escapeValue: false },
    });
}

export default i18n;
