"use client";

import { useState } from "react";

import "./Navbar.css";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#metodo", label: "Nuestro Método" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`nav ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className={`nav-toggle ${isOpen ? "is-active" : ""}`}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span className="sr-only">Abrir menú</span>
        <span aria-hidden className="nav-toggle-line" />
        <span aria-hidden className="nav-toggle-line" />
        <span aria-hidden className="nav-toggle-line" />
      </button>
      <nav
        id="primary-navigation"
        className={`nav-inner ${isOpen ? "is-open" : ""}`}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
