"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const services = [
  {
    title: "Diseño integral",
    description:
      "Creamos un universo propio para cada boda: atmósfera, ambientación y narrativa coherente de principio a fin.",
    highlights: [
      "Moodboards sensoriales y paletas personalizadas",
      "Selección curada de proveedores premium",
      "Coordinación total del gran día",
    ],
    icon: "✨",
  },
  {
    title: "Wedding weekend",
    description:
      "Planificamos experiencias inmersivas de varios días para sorprender a tus invitados y prolongar la magia.",
    highlights: [
      "Eventos previos y posteriores a medida",
      "Hospitality y logística impecables",
      "Regalos y detalles inolvidables",
    ],
    icon: "🌙",
  },
  {
    title: "Elopements boutique",
    description:
      "Para parejas que desean una celebración íntima y llena de simbolismo en destinos espectaculares.",
    highlights: [
      "Localizaciones secretas y escenografía a medida",
      "Producción fotográfica y audiovisual editorial",
      "Ceremonias diseñadas junto a celebrantes expertos",
    ],
    icon: "💞",
  },
];

const experiences = [
  {
    quote:
      "Nuestra boda fue una película mágica. Cada invitado sintió que vivía algo único y profundamente nuestro.",
    couple: "Carla & Bruno",
    detail: "Boda destino en Menorca",
  },
  {
    quote:
      "Convirtieron nuestras ideas en momentos tangibles. Su calma y creatividad hicieron que disfrutáramos cada paso.",
    couple: "Lucía & Andrés",
    detail: "Weekend celebration en La Rioja",
  },
  {
    quote:
      "Nunca imaginamos que nuestra historia pudiera contarse con tanta elegancia. Superaron todas las expectativas.",
    couple: "Paula & Nico",
    detail: "Elopement íntimo en los Pirineos",
  },
];

const journey = [
  {
    title: "Visión compartida",
    description:
      "Descubrimos vuestra esencia, exploramos referentes y diseñamos el concepto creativo que guiará cada decisión.",
  },
  {
    title: "Curaduría artesanal",
    description:
      "Seleccionamos proveedores excepcionales, negociamos por vosotros y elaboramos un plan maestro detallado.",
  },
  {
    title: "Producción exquisita",
    description:
      "Coordinamos y supervisamos cada montaje para que todo fluya con naturalidad, mientras vosotros vivís el momento.",
  },
  {
    title: "Recuerdos eternos",
    description:
      "Entregamos un dossier editorial con los highlights del evento y gestionamos la post-producción audiovisual.",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowUI(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
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

        <div className={`navbar-mount ${showUI ? "fade-in" : "is-hidden"}`}>
          <Navbar />
        </div>

        <div className={`hero-center ${showUI ? "fade-in" : "is-hidden"}`}>
          <span className="hero-badge">Wedding planners & storytellers</span>
          <h1>the perfect match</h1>
          <p>
            Diseñamos bodas sofisticadas y llenas de alma para parejas que
            desean una celebración inolvidable, cuidada hasta el último detalle.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">
              Reservar consultoría
            </a>
            <a className="btn ghost" href="#portfolio">
              Ver historias reales
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>120+</strong>
              <span>Bodas producidas en Europa</span>
            </div>
            <div>
              <strong>12 años</strong>
              <span>Creando experiencias memorables</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Parejas que nos recomiendan</span>
            </div>
          </div>
        </div>
        <span className="scroll-indicator">Desliza para descubrir</span>
      </main>

      <div className="page-wrapper">
        <section id="servicios" className="section services">
          <div className="section-heading">
            <span className="eyebrow">Servicios boutique</span>
            <h2>Planificación integral para una boda con carácter</h2>
            <p>
              Transformamos ideas en momentos inolvidables combinando diseño,
              producción y logística impecable. Cada celebración es única porque
              refleja la esencia de vuestra historia.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencias" className="section experiences">
          <div className="section-heading">
            <span className="eyebrow">Experiencias reales</span>
            <h2>Historias que laten con vuestra esencia</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <figure key={experience.couple}>
                <blockquote>“{experience.quote}”</blockquote>
                <figcaption>
                  <strong>{experience.couple}</strong>
                  <span>{experience.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="metodo" className="section journey">
          <div className="section-heading">
            <span className="eyebrow">Nuestro método</span>
            <h2>Una hoja de ruta serena y transparente</h2>
            <p>
              Os acompañamos personalmente desde el primer café hasta el último
              baile, cuidando cada hito con planificación estratégica.
            </p>
          </div>
          <ol className="journey-steps">
            {journey.map((step) => (
              <li key={step.title}>
                <div className="step-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="portfolio" className="section portfolio">
          <div className="section-heading">
            <span className="eyebrow">Portfolio curado</span>
            <h2>Bodas que se sienten como un sueño</h2>
            <p>
              Descubre algunos de nuestros proyectos recientes y cómo contamos
              la historia de cada pareja a través de espacios, texturas y
              momentos.
            </p>
          </div>
          <div className="portfolio-grid">
            <article className="portfolio-card">
              <div className="tag">Mallorca</div>
              <h3>Romance mediterráneo</h3>
              <p>
                Ceremonia al atardecer frente al mar con una recepción repleta
                de flores locales y gastronomía de autor.
              </p>
            </article>
            <article className="portfolio-card">
              <div className="tag">Madrid</div>
              <h3>Elegancia urbana</h3>
              <p>
                Transformamos un palacio histórico en un escenario contemporáneo
                combinando iluminación teatral y arte floral minimalista.
              </p>
            </article>
            <article className="portfolio-card">
              <div className="tag">San Sebastián</div>
              <h3>Sabores del norte</h3>
              <p>
                Weekend wedding con rutas gastronómicas, catas privadas y una
                gran fiesta frente a la bahía.
              </p>
            </article>
            <article className="portfolio-card">
              <div className="tag">Lisboa</div>
              <h3>Luz dorada</h3>
              <p>
                Elopement íntimo en miradores secretos con sesión editorial y un
                banquete entre azulejos portugueses.
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="contact-inner">
            <div>
              <span className="eyebrow">Empecemos a soñar</span>
              <h2>Agenda una videollamada privada</h2>
              <p>
                Cuéntanos cómo imagináis vuestro gran día y crearemos un
                dossier inicial con propuestas pensadas exclusivamente para
                vosotros.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:hola@lunaandco.com">
                hola@lunaandco.com
              </a>
              <a className="btn ghost" href="https://wa.me/34123456789">
                +34 123 456 789
              </a>
              <p className="availability">
                Consultorías disponibles de lunes a jueves, 10:00 a 19:00 CET.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Luna &amp; Co. Wedding Planners</p>
          <p>
            Produciendo bodas elegantes en España, Portugal, Francia e Italia.
          </p>
        </footer>
      </div>
    </>
  );
}
