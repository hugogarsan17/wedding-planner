// Navbar.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [atTop, setAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);
  const toggleMenu = () => setIsOpen(v => !v);
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
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!mounted || !atTop) return null;

  const header = (
    <header ref={navRef} className={`nav ${isOpen ? "is-open" : ""}`}>
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
        onClick={(e) => {
          const el = e.target as HTMLElement;
          if (el.tagName === "A") closeMenu();
        }}
      >
        {links.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );

  // 👉 Render fuera de cualquier wrapper que recorte
  return createPortal(header, document.body);
}
