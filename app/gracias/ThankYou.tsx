"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <div className="contact-intro">
      <span className="eyebrow">{t("thankYou.eyebrow")}</span>
      <h1>{t("thankYou.title")}</h1>
      <p>{t("thankYou.description")}</p>
      <div className="form-actions">
        <Link className="btn btn-dark" href="/">
          {t("thankYou.cta")}
        </Link>
      </div>
    </div>
  );
}
