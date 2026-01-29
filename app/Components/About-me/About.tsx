"use client";

import "./../fonts.css";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";
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

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
  span: string;
  key: string;
};


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

export default function About() {
  const [showUI, setShowUI] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<"es" | "en">(() =>
    i18n.language?.startsWith("en") ? "en" : "es"
  );

  // Controla si el navbar debe mostrarse (solo cuando estamos muy arriba)
  const [navVisible, setNavVisible] = useState(true);

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
              <span className="line">{t("about.title")} </span>

            </h1>
          </div>
        </div>
        <span className="scroll-indicator">{t("hero.scroll")}</span>
      </main>

      <div className="page-wrapper">
        <section id="nosotros" className="section contact">

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
                width={700}
                height={700}
                className="about-photo"
                priority={false}
              />
            </div>
          </div>
        </section>
        </div>
      <Whatsapp />
    </>
  );
}
