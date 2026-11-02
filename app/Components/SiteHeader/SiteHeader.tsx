"use client";

import { useTranslation } from "react-i18next";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Navbar from "../Navbar/Navbar";

export default function SiteHeader() {
  const { t } = useTranslation();

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t("a11y.skip")}
      </a>
      <LangSwitcher />
      <Navbar />
    </>
  );
}
