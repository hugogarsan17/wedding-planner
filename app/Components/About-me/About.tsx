"use client";

import Image from "next/image";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Hero from "../Hero/Hero";
import { SITE } from "@/lib/site";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.body", { returnObjects: true }) as string[];

  return (
    <main id="contenido" tabIndex={-1}>
      <Hero compact>
        <h1 className="hero-title">{t("about.title")}</h1>
      </Hero>

      <section className="section about-section">
        <div className="about-content">
          <div className="about-text">
            {paragraphs.map((_, index) => (
              <p key={index}>
                <Trans
                  i18nKey={`about.body.${index}`}
                  components={{
                    ig: (
                      <a
                        className="about-link"
                        href={SITE.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t("a11y.newTab")}
                      />
                    ),
                  }}
                />
              </p>
            ))}
          </div>

          <div className="about-image">
            <Image
              src="/me.png"
              alt={t("about.imageAlt")}
              width={618}
              height={839}
              sizes="(max-width: 720px) 90vw, 420px"
              className="about-photo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
