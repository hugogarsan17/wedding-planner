"use client";

import { useTranslation } from "react-i18next";
import { SITE } from "@/lib/site";
import "./Footer.css";

function InstagramIcon() {
  return (
    <svg
      className="footer-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p>
        <a
          className="footer-link"
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t("footer.instagram")} ${t("a11y.newTab")}`}
        >
          <InstagramIcon />
          <span>{SITE.instagramHandle}</span>
        </a>
      </p>
      <p>{t("footer.line1", { year: new Date().getFullYear() })}</p>
      <p>{t("footer.line2")}</p>
    </footer>
  );
}
