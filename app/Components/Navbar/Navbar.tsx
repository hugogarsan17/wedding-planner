// Navbar.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

type LinkItem = { href: string; label: string };

const baseLinks = [
  { href: "/", key: "nav.home" },
  { href: "/#servicios", key: "nav.services" },
  { href: "/#portfolio", key: "nav.portfolio" },
  { href: "/contacto", key: "nav.contact" }, // página aparte
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [entered, setEntered] = useState(false); // 👈 para animación de entrada
  const navRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Deja que el primer frame pinte y luego dispara la transición
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const isAtTop = window.scrollY <= 2;
      setAtTop(isAtTop);
      if (!isAtTop && isOpen) closeMenu();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const isHome = typeof window !== "undefined" && window.location.pathname === "/";

  const translatedLinks: LinkItem[] = useMemo(
    () => baseLinks.map(({ href, key }) => ({ href, label: t(key) })),
    [t]
  );

  // En home, convierte "/#id" -> "#id" para evitar recarga
  const links: LinkItem[] = isHome
    ? translatedLinks.map((l) =>
        l.href.startsWith("/#") ? { ...l, href: l.href.slice(1) } : l
      )
    : translatedLinks;

  const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const a = target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href") || "";

    // Detectar enlaces ancla (/#id o #id)
    const hash = href.startsWith("/#")
      ? href.slice(1)
      : href.startsWith("#")
        ? href
        : "";
    const isHomePath = window.location.pathname === "/";

    if (hash) {
      e.preventDefault();

      if (!isHomePath) {
        // 🚀 Navega al home con el hash → /#servicios o /#portfolio
        window.location.href = href;
        return;
      }

      // Si ya estás en home, scroll suave
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
      return;
    }

    // Navegación normal (Inicio o /contacto)
    closeMenu();
  };

  // Oculta el navbar cuando no estás en el top (tu comportamiento original)
  if (!atTop) return null;

  const header = (
    <header
      ref={navRef}
      className={`nav ${isOpen ? "is-open" : ""} ${entered ? "is-enter" : ""}`}
    >
      <button
        type="button"
        className={`nav-toggle ${isOpen ? "is-active" : ""}`}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <span className="nav-toggle-line" aria-hidden="true"></span>
        <span className="nav-toggle-line" aria-hidden="true"></span>
        <span className="nav-toggle-line" aria-hidden="true"></span>
      </button>

      <nav
        id="primary-navigation"
        className={`nav-inner ${isOpen ? "is-open" : ""}`}
        aria-label="Navegación principal"
        role="navigation"
        onClick={onNavClick}
      >
        <Image src="/logo.jpeg" className="logo-nav" alt="" width={72} height={72} />
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );

  // Render fuera de wrappers que recorten
return header;
}
