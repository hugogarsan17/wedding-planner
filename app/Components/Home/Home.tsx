"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    // Versión simple y fiable: retraso fijo
    const t = setTimeout(() => setShowUI(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main id="home" className="main-hero">
      <video
        ref={videoRef}
        className="background-video"
        src="/main-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navbar retrasado */}
      <div className={`navbar-mount ${showUI ? "fade-in" : "is-hidden"}`}>
        <Navbar />
      </div>

      {/* Título centrado y retrasado */}
      <div className={`hero-center ${showUI ? "fade-in" : "is-hidden"}`}>
        <h1>the perfect match</h1>
      </div>
    </main>
  );
}
