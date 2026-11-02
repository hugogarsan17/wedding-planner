"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../Hero/Hero";
import { toLang } from "../../i18n/client";
import { weddings, type Wedding } from "@/data/weddings";
import { whatsappLink } from "@/lib/site";
import "./Home.css";

const serviceItems = [
  "planning",
  "artDirection",
  "production",
  "coordination",
  "destination",
  "honeymoon",
] as const;

const pressLogos = [
  { src: "/press/lago.png", alt: "100 Layer Cake" },
  { src: "/press/wezoree.png", alt: "Wezoree" },
  { src: "/press/alai.png", alt: "Alai" },
  { src: "/press/mariee.svg", alt: "La Mariée aux Pieds Nus" },
  { src: "/press/together.png", alt: "Together Journal" },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = toLang(i18n.language);
  const [activeCollection, setActiveCollection] = useState<Wedding | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Aparición de los servicios al hacer scroll.
  useEffect(() => {
    const steps = document.querySelectorAll(".service-step");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      steps.forEach((step) => step.classList.add("is-visible"));
      return undefined;
    }

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

  // <dialog> nativo: atrapa el foco, cierra con Escape y devuelve el foco al cerrar.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeCollection && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [activeCollection]);

  const closeCollection = () => dialogRef.current?.close();

  return (
    <main id="contenido" tabIndex={-1}>
      <Hero>
        <h1 className="hero-title">
          <span className="line">{t("hero.brandTitle1")}</span>{" "}
          <span className="line">{t("hero.brandTitle2")}</span>{" "}
          <span className="line">{t("hero.brandTitle3")}</span>
        </h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contacto">
            {t("hero.ctaPrimary")}
          </Link>
          <a className="btn btn-ghost" href="#portfolio">
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </Hero>

      <section className="section manifesto">
        <blockquote>{t("manifesto.quote")}</blockquote>
      </section>

      <section id="servicios" className="section services-story">
        <div className="section-heading">
          <h2>{t("services.title")}</h2>
          <p className="services-sub">{t("services.subtitle")}</p>
        </div>

        <ol className="services-steps">
          {serviceItems.map((key, index) => (
            <li key={key} className="service-step">
              <div className="step-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="step-content">
                <h3 className="step-title">{t(`services.items.${key}.title`)}</h3>
                <p className="step-desc">{t(`services.items.${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="portfolio" className="section gallery">
        <div className="section-heading">
          <span className="eyebrow">{t("portfolio.eyebrow")}</span>
          <h2>{t("portfolio.title")}</h2>
          <p>{t("portfolio.subtitle")}</p>
        </div>

        <ul className="gallery-grid">
          {weddings.map((wedding) => (
            <li key={wedding.slug}>
              <button
                type="button"
                className="gallery-collection"
                onClick={() => setActiveCollection(wedding)}
                aria-haspopup="dialog"
              >
                <span className="gallery-collection-media">
                  <Image
                    src={wedding.cover}
                    alt=""
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gallery-photo"
                  />
                </span>

                <span className="collection-caption">
                  <span className="collection-location">{wedding.location[lang]}</span>
                  <span className="collection-title">{wedding.title}</span>
                  <span className="collection-year">{wedding.year}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section press">
        <div className="section-heading align-center">
          <span className="eyebrow">{t("press.eyebrow")}</span>
          <h2>{t("press.title")}</h2>
        </div>

        <ul className="press-logos">
          {pressLogos.map((logo) => (
            <li key={logo.alt} className="press-logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={80}
                className="press-logo-image"
                style={{ width: "auto", height: "auto" }}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="contacto" className="section home-contact">
        <div className="home-contact-inner">
          <span className="eyebrow">{t("contact.eyebrow")}</span>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.description")}</p>
          <div className="home-contact-actions">
            <Link className="btn btn-primary" href="/contacto">
              {t("contact.primaryCta")}
            </Link>
            <a
              className="btn btn-ghost"
              href={whatsappLink(t("whatsapp.message"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.phoneCta")}
            </a>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onClose={() => setActiveCollection(null)}
        onClick={(event) => {
          // Clic en el fondo (fuera de la tarjeta) cierra la galería.
          if (event.target === event.currentTarget) closeCollection();
        }}
      >
        {activeCollection && (
          <div className="lightbox-shell">
            <button
              type="button"
              className="lightbox-close"
              onClick={closeCollection}
              aria-label={t("portfolio.closeCollection")}
            >
              ×
            </button>

            <div className="lightbox-header">
              <p className="lightbox-location">
                {activeCollection.location[lang]}, {activeCollection.year}
              </p>
              <h3 id="lightbox-title">{activeCollection.title}</h3>
              <p className="lightbox-description">
                {activeCollection.description[lang]}
              </p>
            </div>

            <div className="lightbox-grid">
              {activeCollection.images.map((image, index) => (
                <figure key={`${activeCollection.slug}-${image}`} className="lightbox-card">
                  <div className="lightbox-image-frame">
                    <Image
                      src={image}
                      alt={t("portfolio.imageAlt", {
                        title: activeCollection.title,
                        n: index + 1,
                        total: activeCollection.images.length,
                      })}
                      fill
                      className="lightbox-image"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}
