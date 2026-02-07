"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

type LinkItem = { href: string; label: string };

const baseLinks = [
  { href: "/", key: "nav.home" },
    { href: "/about", key: "nav.aboutme" },
  { href: "#servicios", key: "nav.services" },
  { href: "#portfolio", key: "nav.portfolio" },
  { href: "/contacto", key: "nav.contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [entered, setEntered] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
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

  // proteger acceso a window para SSR
  const isHome =
    typeof window !== "undefined" ? window.location.pathname === "/" : false;

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

    const hash = href.startsWith("/#")
      ? href.slice(1)
      : href.startsWith("#")
      ? href
      : "";
    const isHomePath =
      typeof window !== "undefined" && window.location.pathname === "/";

    if (hash) {
      e.preventDefault();

      if (!isHomePath) {
        // Si no estás en home, navega al home con el hash (causa recarga, pero llega al ancla)
        window.location.href = href;
        return;
      }

      // scroll suave si ya estás en home
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
      return;
    }

    // navegación normal
    closeMenu();
  };

  return (
   <header
  ref={navRef}
  className={`nav ${entered ? "is-enter" : ""} ${
    atTop ? "" : "is-hidden"
  }`}
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
        // accessibilidad: aria-hidden en desktop no tiene sentido; en móvil el menú cerrado estará hidden por CSS
        aria-hidden={false}
      >
<Image
  src="/logo.jpeg"
  alt="Logo"
  width={48}
  height={48}
  className="logo-nav"
/>
        <div className="nav-content">
          {/* Links para escritorio: inline; para móvil se convierten en dropdown */}
          <div className={`nav-links ${isOpen ? "is-open" : ""}`} role="menu">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                tabIndex={0}
                onClick={() => {
                  /* el onClick real lo maneja onNavClick en el nav padre */
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
