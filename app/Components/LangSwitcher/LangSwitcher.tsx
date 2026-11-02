"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, LANG_STORAGE_KEY, toLang, type Lang } from "../../i18n/client";

const LABELS: Record<Lang, string> = { es: "Español", en: "English" };

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();
  const activeLang = toLang(i18n.language);

  // Recupera el idioma elegido en visitas anteriores.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if ((saved === "es" || saved === "en") && saved !== toLang(i18n.language)) {
        i18n.changeLanguage(saved);
      }
    } catch {
      // Almacenamiento no disponible (modo privado): se queda en español.
    }
  }, [i18n]);

  // Mantiene <html lang> sincronizado para lectores de pantalla y traductores.
  useEffect(() => {
    document.documentElement.lang = activeLang;
  }, [activeLang]);

  const changeLanguage = (lng: Lang) => {
    i18n.changeLanguage(lng);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lng);
    } catch {
      // Ignorado: el cambio funciona igual durante la visita.
    }
  };

  return (
    <div className="lang-switcher" role="group" aria-label={t("lang.label")}>
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          lang={lng}
          aria-label={LABELS[lng]}
          aria-pressed={activeLang === lng}
          onClick={() => changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
