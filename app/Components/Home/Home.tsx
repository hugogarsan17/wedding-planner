"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const services = [
  {
    title: "Dirección creativa",
    description:
      "Concepto global, mood y diseño floral para un storytelling coherente.",
    icon: "✨",
  },
  {
    title: "Producción completa",
    description:
      "Gestión integral de agenda, proveedores y montaje con un equipo senior.",
    icon: "🌙",
  },
  {
    title: "Experiencias destino",
    description:
      "Elopements y fines de semana inmersivos en localizaciones singulares.",
    icon: "💞",
  },
];

const galleryImages = [
  {
    src: "/p8.jpeg",
    alt: "Pareja abrazada frente al mar al atardecer",
    span: "tall",
    label: "Menorca, golden hour",
  },
  {
    src: "/p7.jpeg",
    alt: "Boda íntima con mesa decorada en exterior",
    span: "wide",
  },
  {
    src: "/p6.jpeg",
    alt: "Detalle floral con velas sobre mesa",
    span: "standard",
  },
  {
    src: "/p5.jpeg",
    alt: "Brindis de recién casados",
    span: "tall",
    label: "Celebración en La Rioja",
  },
  {
    src: "/p4.jpeg",
    alt: "Novia con ramo en escalera histórica",
    span: "big",
  },
  {
    src: "/p3.jpeg",
    alt: "Mesa de banquete minimalista",
    span: "standard",
  },
  {
    src: "/p2.jpeg",
    alt: "Invitados bailando bajo luces cálidas",
    span: "wide",
  },
  {
    src: "/p1.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p9.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p10.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p11.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
];

export default function Home() {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowUI(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <main id="home" className="main-hero">
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
          <h1>the perfect match</h1>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">
              Agenda una llamada
            </a>
            <a className="btn ghost" href="#portfolio">
              Ver portfolio
            </a>
          </div>
        </div>
        <span className="scroll-indicator">Desliza para descubrir</span>
      </main>

      <div className="page-wrapper">
        <section id="servicios" className="section intro">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">Visión</span>
              <h2>Bodas minimalistas con sensibilidad editorial</h2>
              <p>
                Seleccionamos localizaciones, diseñamos atmósferas y coordinamos
                cada gesto para que la belleza fluya sin esfuerzo.
              </p>
            </div>
            <div className="intro-points">
              <div>
                <span>01</span>
                <p>Producciones limitadas a 12 bodas al año.</p>
              </div>
              <div>
                <span>02</span>
                <p>Equipo creativo multidisciplinar y presencial.</p>
              </div>
              <div>
                <span>03</span>
                <p>Transparencia absoluta en presupuestos y tiempos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="section-heading align-left">
            <span className="eyebrow">Servicios</span>
            <h2>Dirección integral con alma boutique</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
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
            <span className="eyebrow">Portfolio</span>
            <h2>Un mosaico de historias reales</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
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
            “Menos guion, más emoción verdadera. Dejamos que la luz y el gesto
            cuenten la historia.”
          </blockquote>
        </section>

        <section id="contacto" className="section contact">
          <div className="contact-inner">
            <span className="eyebrow">Hablemos</span>
            <h2>Agenda una videollamada privada</h2>
            <p>
              Cuéntanos cómo imagináis vuestro gran día y prepararemos una guía
              inicial con direcciones y sensaciones a medida.
            </p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:hola@theperfectmatch.com">
                hola@lunaandco.com
              </a>
              <a className="btn ghost" href="https://wa.me/34123456789">
                +34 123 456 789
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Wedding Planners</p>
          <p>
            Produciendo bodas elegantes en España.
          </p>
        </footer>
      </div>
    </>
  );
}
