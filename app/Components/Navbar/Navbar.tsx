// Navbar.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Navbar.css";

type LinkItem = { href: string; label: string };

const baseLinks: LinkItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/contacto", label: "Contacto" }, // página aparte
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false); // 👈 para animación de entrada
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Deja que el primer frame pinte y luego dispara la transición
    requestAnimationFrame(() => setEntered(true));
  }, []);

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

  // Oculta el navbar cuando no está montado o cuando no estás en el top (tu comportamiento original)
  if (!mounted || !atTop) return null;

  const isHome = typeof window !== "undefined" && window.location.pathname === "/";

  // En home, convierte "/#id" -> "#id" para evitar recarga
  const links: LinkItem[] = isHome
    ? baseLinks.map(l => l.href.startsWith("/#") ? { ...l, href: l.href.slice(1) } : l)
    : baseLinks;

const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  const a = target.closest("a");
  if (!a) return;

  const href = a.getAttribute("href") || "";

  // Detectar enlaces ancla (/#id o #id)
  const hash = href.startsWith("/#") ? href.slice(1) : href.startsWith("#") ? href : "";
  const isHome = window.location.pathname === "/";

  if (hash) {
    e.preventDefault();

    if (!isHome) {
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
        <img src="logo.jpeg" className="logo-nav" alt="" />
        {links.map(link => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );

  // Render fuera de wrappers que recorten
  return createPortal(header, document.body);
}
