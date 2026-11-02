"use client";

import { useTranslation } from "react-i18next";
import { SITE } from "@/lib/site";

export default function ContactIntro() {
  const { t } = useTranslation();

  return (
    <div className="contact-intro">
      <span className="eyebrow">{t("contactPage.eyebrow")}</span>
      <h1>{t("contactPage.title")}</h1>
      <p>{t("contactPage.intro.description")}</p>
      <a className="contact-email" href={`mailto:${SITE.email}`}>
        {SITE.email}
      </a>
      <p className="contact-note">{t("contactPage.intro.note")}</p>
    </div>
  );
}
