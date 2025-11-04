"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#experiencias", label: "Experiencias" },
  { href: "/#metodo", label: "Nuestro Método" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${isOpen ? "is-open" : ""}`}>
      {/* Botón hamburguesa (3 líneas) */}
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

      {/* Menú */}
      <nav
        id="primary-navigation"
        className={`nav-inner ${isOpen ? "is-open" : ""}`}
        aria-label="Navegación principal"
        onClick={(e) => {
          const el = (e.target as HTMLElement).closest("a");
          if (el) closeMenu();
        }}
      >
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
