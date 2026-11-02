"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

type HeroProps = {
  children: React.ReactNode;
  /** Altura menor para páginas interiores. */
  compact?: boolean;
};

export default function Hero({ children, compact = false }: HeroProps) {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Con "reducir movimiento" el vídeo se queda en el poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className={`hero ${compact ? "hero-compact" : ""}`}>
      <video
        ref={videoRef}
        className="hero-video"
        poster="/video/hero-poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">{children}</div>

      <button
        type="button"
        className="hero-toggle"
        onClick={toggleVideo}
        aria-label={playing ? t("hero.pauseVideo") : t("hero.playVideo")}
      >
        <span className={playing ? "icon-pause" : "icon-play"} aria-hidden="true" />
      </button>

      <span className="hero-scroll" aria-hidden="true">
        {t("hero.scroll")}
      </span>
    </section>
  );
}
