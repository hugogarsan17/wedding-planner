"use client";


import "./../fonts.css";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import "./Home.css";


const serviceItems = [
  { key: "planning", icon: "🗓️" },
  { key: "artDirection", icon: "🎨" },
  { key: "production", icon: "⚙️" },
  { key: "coordination", icon: "🤍" },
  { key: "Destination Weddings", icon: "🤍" },
  { key: "Wedding Honeymoon", icon: "🤍" },
];


const galleryImages = [
  {
    src: "/p8.jpeg",
    span: "tall",
    key: "p8",
  },
  {
    src: "/p7.jpeg",
    span: "wide",
    key: "p7",
  },
  {
    src: "/p6.jpeg",
    span: "standard",
    key: "p6",
  },
  {
    src: "/p5.jpeg",
    span: "tall",
    key: "p5",
  },
  {
    src: "/p4.jpeg",
    span: "big",
    key: "p4",
  },
  {
    src: "/p3.jpeg",
    span: "standard",
    key: "p3",
  },
  {
    src: "/p2.jpeg",
    span: "wide",
    key: "p2",
  },
  {
    src: "/p1.jpeg",
    span: "standard",
    key: "p1",
  },
  {
    src: "/p9.jpeg",
    span: "standard",
    key: "p9",
  },
  {
    src: "/p10.jpeg",
    span: "standard",
    key: "p10",
  },
  {
    src: "/p11.jpeg",
    span: "standard",
    key: "p11",
  },
];

export default function Home() {
  const [showUI, setShowUI] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<"es" | "en">(() =>
    i18n.language?.startsWith("en") ? "en" : "es"
  );



  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    setActiveLang(lng); // mantenemos el estado de los botones alineado
  };

  const translatedServices = useMemo(
    () =>
      serviceItems.map(({ key, icon }) => ({
        title: t(`services.items.${key}.title`),
        description: t(`services.items.${key}.description`),
        icon,
      })),
    [t]
  );

  const translatedGallery = useMemo(
    () =>
      galleryImages.map((image) => ({
        ...image,
        alt: t(`portfolio.images.${image.key}.alt`),
        label: t(`portfolio.images.${image.key}.label`),
      })),
    [t]
  );

  return (
    <>
      <main id="home" className="main-hero">
        
        <div className="lang-switcher">
            <button
              onClick={() => changeLanguage("es")}
              className={activeLang === "es" ? "active" : ""}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={activeLang === "en" ? "active" : ""}
            >
              EN
            </button>
          </div>
        <video
          className="background-video"
          src="/main-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={`navbar-mount ${showUI ? "fade-in-top" : "is-hidden"}`}>
          <Navbar />
          
        </div>
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
            <a className="btn primary" href="#contacto">
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
        <section id="servicios" className="section intro">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">{t("vision.eyebrow")}</span>
              <h2>{t("vision.title")}</h2>
              <p>{t("vision.description")}</p>
            </div>
            <div className="intro-points">
              <div>
                <span>01</span>
                <p>{t("vision.points.one")}</p>
              </div>
              <div>
                <span>02</span>
                <p>{t("vision.points.two")}</p>
              </div>
              <div>
                <span>03</span>
                <p>{t("vision.points.three")}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="section contact">
          <div className="section-heading align-left">
            <h2>{t("about.title")}</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("about.body").replace(/\n/g, "<br />"),
                }}
              />
            </div>

            <div className="about-image">
              <Image
                src="/me.png"
                alt={t("about.imageAlt")}
                width={720}
                height={900}
                className="about-photo"
                priority={false}
              />
            </div>
          </div>
        </section>


        <section className="section services">
          <div id="servicios" className="section-heading align-left">
            <h2>{t("services.title")}</h2>
          </div>
          <div className="service-grid">
            {translatedServices.map((service) => (
              <article key={service.title} className="service-card">
                <span className="icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section gallery">
          <div className="section-heading align-left">
            <span className="eyebrow">{t("portfolio.eyebrow")}</span>
            <h2>{t("portfolio.title")}</h2>
          </div>
          <div className="gallery-grid">
            {translatedGallery.map((image) => (
              <figure
                key={image.src}
                className={`gallery-item ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 720px) 70vw, (max-width: 1200px) 35vw, 360px"
                  className="gallery-photo"
                />
                {image.label && <figcaption>{image.label}</figcaption>}
              </figure>
            ))}
          </div>
        </section>

        <section className="section manifesto">
          <blockquote>
            {t("manifesto.quote")}
          </blockquote>
        </section>

        <section id="contacto" className="section contact">
          <div className="contact-inner">
            <span className="eyebrow">{t("contact.eyebrow")}</span>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:hello@theperfectmatch.es">
                {t("contact.emailCta")}
              </a>
              <a className="btn ghost" href="https://wa.me/34123456789">
                {t("contact.phoneCta")}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>{t("footer.line1", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.line2")}</p>
        </footer>
      </div>
    </>
  );
}
