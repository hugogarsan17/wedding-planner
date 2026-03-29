"use client";

import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p>{t("footer.line1", { year: new Date().getFullYear() })}</p>
      <p>{t("footer.line2")}</p>
    </footer>
  );
}
