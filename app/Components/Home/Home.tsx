"use client";

import "./../fonts.css";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Whatsapp from "../whatsapp/whatsapp";
const serviceItems = [
  {
    key: "planning",
    title: "Planificación completa",
    description: "Diseño del calendario, presupuesto y coordinación con proveedores para que todo suceda.",
    icon: "🗓️",
  },
  {
    key: "artDirection",
    title: "Dirección artística",
    description: "Concepto visual, paleta, floristería y montaje para una boda con identidad.",
    icon: "🎨",
  },
  {
    key: "production",
    title: "Producción & logística",
    description: "Montaje técnico, coordinación de montaje y supervisión in situ el día D.",
    icon: "⚙️",
  },
  {
    key: "coordination",
    title: "Coordinación del día",
    description: "Gestión del timing y del equipo para que los novios se olviden del resto.",
    icon: "🤍",
  },
  {
    key: "destination",
    title: "Destination Weddings",
    description: "Organización integral para bodas fuera: viajes, alojamientos y trámites.",
    icon: "✈️",
  },
  {
    key: "honeymoon",
    title: "Luna de miel",
    description: "Diseño de experiencias y reservas a medida para una escapada inolvidable.",
    icon: "🌴",
  },
];


const galleryImages = [
  { src: "/p8.jpeg", span: "tall", key: "p8" },
  { src: "/p7.jpeg", span: "wide", key: "p7" },
  { src: "/p6.jpeg", span: "standard", key: "p6" },
  { src: "/p5.jpeg", span: "tall", key: "p5" },
  { src: "/p4.jpeg", span: "big", key: "p4" },
  { src: "/p3.jpeg", span: "standard", key: "p3" },
  { src: "/p2.jpeg", span: "wide", key: "p2" },
  { src: "/p1.jpeg", span: "standard", key: "p1" },
  { src: "/p9.jpeg", span: "standard", key: "p9" },
  { src: "/p10.jpeg", span: "standard", key: "p10" },
  { src: "/p11.jpeg", span: "standard", key: "p11" },
];

export default function Home() {
  const [showUI, setShowUI] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<"es" | "en">(() =>
    i18n.language?.startsWith("en") ? "en" : "es"
  );

  // Controla si el navbar debe mostrarse (solo cuando estamos muy arriba)
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // anima solo una vez
        }
      });
    },
    {
      threshold: 0.15, // cuando se ve un 15%
    }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const threshold = 20; // px desde top
    const onScroll = () => {
      setNavVisible(window.scrollY <= threshold);
    };
    // Inicial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

const [activeImage, setActiveImage] = useState(null);


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
      <main id="home" className="main-hero">
      

        <video
          className="background-video"
          src="/main-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Navbar: visible SOLO cuando navVisible === true (y cuando showUI true para respetar la animación inicial) */}
        <div
          className={`navbar-mount ${showUI ? "fade-in-top" : "is-hidden"} ${
            navVisible ? "" : "hidden"
          }`}
        >
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
        {/* ... resto del contenido idéntico ... */}
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

        {/* ... resto de secciones (sin cambios) ... */}
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

        <section id="servicios" className="section services">
  <div className="section-heading align-left">
    <h2>{t("services.title")}</h2>
    <p className="services-sub">{t("services.subtitle") || ""}</p>
  </div>

  <div className="service-grid">
    {serviceItems.map((service) => (
      <article key={service.key} className="service-card" tabIndex={0} aria-labelledby={`svc-${service.key}-title`}>
        <div className="service-card-head">
          <span className="service-icon" aria-hidden="true">{service.icon}</span>
          <h3 id={`svc-${service.key}-title`} className="service-title">
            {t(`services.items.${service.key}.title`, service.title)}
          </h3>
        </div>

        <p className="service-desc">
          {t(`services.items.${service.key}.description`, service.description)}
        </p>

        {/* CTA interna: puede abrir modal, anclar o navegar a detalle */}
        <div className="service-cta">
          <a className="btn primary fullwidth" href={`/contacto`} onClick={() => {/* optional analytics */}}>
            {t("services.ctaContact") || "Consultanos"}
          </a>
        </div>
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
  onClick={() => setActiveImage(image)}
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
        <section className="section press">
  <div className="section-heading align-center">
    <span className="eyebrow">{t("press.eyebrow") || "Prensa"}</span>
    <h2>{t("press.title") || "Hablan de nosotros"}</h2>
  </div>

  <div className="press-logos">
    <img src="/press/lago.png" alt="100 Layer Cake" />
    <img src="/press/wezoree.png" alt="Wezoree" />
    <img src="/press/alai.png" alt="Alai" />
    <img src="/press/mariee.svg" alt="La Mariée aux Pieds Nus" />
    <img src="/press/together.png" alt="Together Journal" />
  </div>
</section>
{activeImage && (
  <div className="lightbox" onClick={() => setActiveImage(null)}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <button
        className="lightbox-close"
        onClick={() => setActiveImage(null)}
      >
        ×
      </button>

      <Image
        src={activeImage.src}
        alt={activeImage.alt}
        fill
        className="lightbox-image"
        sizes="100vw"
      />

      {activeImage.label && (
        <p className="lightbox-caption">{activeImage.label}</p>
      )}
    </div>
  </div>
)}



        <section className="section manifesto">
          <blockquote>{t("manifesto.quote")}</blockquote>
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
              <a className="btn ghost" href="https://wa.me/34677049605">
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
      <Whatsapp />
    </>
  );
}
