"use client";

import "./../fonts.css";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";
import Whatsapp from "../whatsapp/whatsapp";

export default function About() {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<"es" | "en">(() =>
    i18n.language?.startsWith("en") ? "en" : "es"
  );

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
      <Navbar />
      <main id="home" className="main-hero">
        <video
          className="background-video"
          src="/main-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero-center fade-in">
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
        <Footer />
      </div>
      <Whatsapp />
    </>
  );
}
