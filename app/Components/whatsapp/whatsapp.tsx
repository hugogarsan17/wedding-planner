"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { whatsappLink } from "@/lib/site";
import "./whatsapp.css";

export default function Whatsapp() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="whatsapp-widget">
      {open && (
        <div
          id="whatsapp-popup"
          className="whatsapp-popup"
          role="region"
          aria-label={t("whatsapp.title")}
        >
          <div className="whatsapp-popup-header">
            <span>{t("whatsapp.title")}</span>
            <button
              type="button"
              className="whatsapp-popup-close"
              onClick={() => setOpen(false)}
              aria-label={t("whatsapp.close")}
            >
              ×
            </button>
          </div>
          <div className="whatsapp-popup-body">
            <p>{t("whatsapp.body")}</p>
            <a
              href={whatsappLink(t("whatsapp.message"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("whatsapp.cta")}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-fab"
        onClick={() => setOpen((value) => !value)}
        aria-label={t("whatsapp.open")}
        aria-expanded={open}
        aria-controls="whatsapp-popup"
      >
        <span className="whatsapp-icon">
          <Image src="/logo-wass.png" alt="" width={24} height={24} />
        </span>
      </button>
    </div>
  );
}
