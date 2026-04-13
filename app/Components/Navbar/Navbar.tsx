"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

type NavItem = { href: string; label: string };

const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.aboutme" },
  { href: "/#servicios", key: "nav.services" },
  { href: "/#portfolio", key: "nav.portfolio" },
  { href: "/contacto", key: "nav.contact" },
] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const links = useMemo<NavItem[]>(
    () =>
      NAV_LINKS.map(({ href, key }) => ({
        href,
        label: t(key),
      })),
    [t]
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);


  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isOpen || !navRef.current) {
        return;
      }

      if (!navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest("a");

    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute("href") ?? "";
    const normalizedHash = href.startsWith("/#")
      ? href.slice(1)
      : href.startsWith("#")
      ? href
      : "";

    if (normalizedHash && pathname === "/") {
      event.preventDefault();
      const sectionId = normalizedHash.replace("#", "");
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsOpen(false);
  };

  return (
    <header ref={navRef} className={`nav ${mounted ? "is-mounted" : ""}`}>
      <div className={`nav-inner ${isOpen ? "menu-open" : ""}`}>
        <Link className="nav-logo" href="/" aria-label="Ir al inicio">
          <Image src="/logo.jpeg" alt="Logo" width={44} height={44} className="logo-nav" />
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? "is-active" : ""}`}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="nav-toggle-line" aria-hidden="true" />
          <span className="nav-toggle-line" aria-hidden="true" />
          <span className="nav-toggle-line" aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
          onClick={handleNavClick}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
