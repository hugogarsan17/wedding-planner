"use client";

import "./../fonts.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";
import Footer from "../Footer/Footer";
import Whatsapp from "../whatsapp/whatsapp";
import { weddings, type Wedding } from "@/data/weddings";

const serviceItems = [
  { key: "planning" },
  { key: "artDirection" },
  { key: "production" },
  { key: "coordination" },
  { key: "destination" },
  { key: "honeymoon" },
];

const pressLogos = [
  { src: "/press/lago.png", alt: "100 Layer Cake" },
  { src: "/press/wezoree.png", alt: "Wezoree" },
  { src: "/press/alai.png", alt: "Alai" },
  { src: "/press/mariee.svg", alt: "La Mariee aux Pieds Nus" },
  { src: "/press/together.png", alt: "Together Journal" },
];

export default function Home() {
  const [showUI, setShowUI] = useState(false);
  const [activeCollection, setActiveCollection] = useState<Wedding | null>(null);
  const { t, i18n } = useTranslation();
  const activeLang: "es" | "en" = i18n.language?.startsWith("en") ? "en" : "es";

  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const steps = document.querySelectorAll(".service-step");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeCollection) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCollection(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCollection]);

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="lang-switcher">
        <button
          type="button"
          onClick={() => changeLanguage("es")}
          className={activeLang === "es" ? "active" : ""}
          aria-pressed={activeLang === "es"}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={activeLang === "en" ? "active" : ""}
          aria-pressed={activeLang === "en"}
        >
          EN
        </button>
      </div>

      <main id="home" className="main-hero">
        <video
          className="background-video"
          src="/main-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={`hero-center ${showUI ? "fade-in" : "is-hidden"}`}>
          <div className="brand">
            <h1 className="brand-title">
              <span className="line">{t("hero.brandTitle1")} </span>
              <span className="line">{t("hero.brandTitle2")} </span>
              <span className="line">{t("hero.brandTitle3")}</span>
            </h1>
            <p className="brand-subtitle">{t("hero.subtitle")}</p>
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="/contacto">
              {t("hero.ctaPrimary")}
            </a>
            <a className="btn ghost" href="#portfolio">
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>

        <span className="scroll-indicator">{t("hero.scroll")}</span>
      </main>

      <div className="page-wrapper">
        <section className="section manifesto">
          <blockquote>{t("manifesto.quote")}</blockquote>
        </section>

        <section id="servicios" className="section services-story">
          <div className="section-heading align-left">
            <h2>{t("services.title")}</h2>
            <p className="services-sub">{t("services.subtitle")}</p>
          </div>

          <ol className="services-steps">
            {serviceItems.map((service, index) => (
              <li key={service.key} className="service-step">
                <div className="step-index">{String(index + 1).padStart(2, "0")}</div>

                <div className="step-content">
                  <h3 className="step-title">{t(`services.items.${service.key}.title`)}</h3>
                  <p className="step-desc">{t(`services.items.${service.key}.description`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="portfolio" className="section gallery">
          <div className="section-heading align-left">
            <span className="eyebrow">{t("portfolio.eyebrow")}</span>
            <h2>{t("portfolio.title")}</h2>
            <p>{t("portfolio.subtitle")}</p>
          </div>

          <div className="gallery-grid gallery-collections-grid">
            {weddings.map((wedding) => (
              <button
                key={wedding.slug}
                type="button"
                className="gallery-collection"
                onClick={() => setActiveCollection(wedding)}
                aria-label={t("portfolio.openCollection", {
                  title: wedding.title,
                })}
              >
                <div className="gallery-collection-media">
                  <Image
                    src={wedding.cover}
                    alt={`${wedding.title} wedding in ${wedding.location}`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gallery-photo"
                  />
                </div>

                <div className="collection-caption">
                  <p className="collection-location">{wedding.location}</p>
                  <h3>{wedding.title}</h3>
                  <span>{wedding.year}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section press">
          <div className="section-heading align-center">
            <span className="eyebrow">{t("press.eyebrow")}</span>
            <h2>{t("press.title")}</h2>
          </div>

          <div className="press-logos">
            {pressLogos.map((logo) => (
              <div key={logo.alt} className="press-logo">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={80}
                  className="press-logo-image"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="contact-inner">
            <span className="eyebrow">{t("contact.eyebrow")}</span>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>
            <div className="contact-actions">
              <a className="btn primary" href="/contacto">
                {t("contact.primaryCta")}
              </a>
              <a
                className="btn ghost"
                href="https://wa.me/34677049605"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.phoneCta")}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {activeCollection && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeCollection.title}
          onClick={() => setActiveCollection(null)}
        >
          <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveCollection(null)}
              aria-label={t("portfolio.closeCollection")}
            >
              ×
            </button>

            <div className="lightbox-header">
              <p className="lightbox-location">
                {activeCollection.location} · {activeCollection.year}
              </p>
              <h3>{activeCollection.title}</h3>
              <p className="lightbox-description">
                {activeCollection.description[activeLang]}
              </p>
            </div>

            <div className="lightbox-grid">
              {activeCollection.images.map((image, index) => (
                <figure key={`${activeCollection.slug}-${image}`} className="lightbox-card">
                  <div className="lightbox-image-frame">
                    <Image
                      src={image}
                      alt={`${activeCollection.title} gallery image ${index + 1}`}
                      fill
                      className="lightbox-image"
                      sizes="(max-width: 720px) 100vw, 33vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      <Whatsapp />
    </>
  );
}
