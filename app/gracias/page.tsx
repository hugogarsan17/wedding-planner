"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/styles/buttons.css";
import "../contacto/contacto.css";

export default function GraciasPage() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-nav">
        <Navbar />
      </div>

      <main className="contact-main">
        <section className="contact-section">
          <div className="contact-intro">
            <span className="eyebrow">{t("thankYou.eyebrow")}</span>
            <h1>{t("thankYou.title")}</h1>
            <p>{t("thankYou.description")}</p>
            <div className="form-actions">
              <Link className="btn primary" href="/">
                {t("thankYou.cta")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
