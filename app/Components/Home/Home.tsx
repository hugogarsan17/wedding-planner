"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const services = [
  {
    title: "Planning",
    description:
      "Comprehensive event planning from concept to execution, ensuring every detail flows perfectly.",
    icon: "🗓️",
  },
  {
    title: "Art Direction",
    description:
      "Creative direction and design to define a cohesive visual storytelling and atmosphere.",
    icon: "🎨",
  },
  {
    title: "Production",
    description:
      "Full-scale production and vendor management with our experienced team on-site.",
    icon: "⚙️",
  },
  {
    title: "Coordination",
    description:
      "Day-of coordination and seamless logistics so you can enjoy every moment stress-free.",
    icon: "🤍",
  },
];


const galleryImages = [
  {
    src: "/p8.jpeg",
    alt: "Pareja abrazada frente al mar al atardecer",
    span: "tall",
    label: "Menorca, golden hour",
  },
  {
    src: "/p7.jpeg",
    alt: "Boda íntima con mesa decorada en exterior",
    span: "wide",
  },
  {
    src: "/p6.jpeg",
    alt: "Detalle floral con velas sobre mesa",
    span: "standard",
  },
  {
    src: "/p5.jpeg",
    alt: "Brindis de recién casados",
    span: "tall",
    label: "Celebración en La Rioja",
  },
  {
    src: "/p4.jpeg",
    alt: "Novia con ramo en escalera histórica",
    span: "big",
  },
  {
    src: "/p3.jpeg",
    alt: "Mesa de banquete minimalista",
    span: "standard",
  },
  {
    src: "/p2.jpeg",
    alt: "Invitados bailando bajo luces cálidas",
    span: "wide",
  },
  {
    src: "/p1.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p9.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p10.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
    {
    src: "/p11.jpeg",
    alt: "Pareja caminando entre montañas",
    span: "standard",
    label: "Elopement en Pirineos",
  },
];

export default function Home() {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowUI(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <main id="home" className="main-hero">
        <video
          className="background-video"
          src="/main-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={`navbar-mount ${showUI ? "fade-in-top" : "is-hidden"}`}>
          <Navbar />
        </div>

        <div className={`hero-center ${showUI ? "fade-in" : "is-hidden"}`}>
          <h1>the perfect match</h1>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">
              Agenda una llamada
            </a>
            <a className="btn ghost" href="#portfolio">
              Ver portfolio
            </a>
          </div>
        </div>
        <span className="scroll-indicator">Desliza para descubrir</span>
      </main>

      <div className="page-wrapper">
        <section id="servicios" className="section intro">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">Visión</span>
              <h2>Bodas minimalistas con sensibilidad editorial</h2>
              <p>
                Seleccionamos localizaciones, diseñamos atmósferas y coordinamos
                cada gesto para que la belleza fluya sin esfuerzo.
              </p>
            </div>
            <div className="intro-points">
              <div>
                <span>01</span>
                <p>Producciones limitadas a 12 bodas al año.</p>
              </div>
              <div>
                <span>02</span>
                <p>Equipo creativo multidisciplinar y presencial.</p>
              </div>
              <div>
                <span>03</span>
                <p>Transparencia absoluta en presupuestos y tiempos.</p>
              </div>
            </div>
          </div>
        </section>
<section id="nosotros" className="section contact">
  <div className="section-heading align-left">
    <h2>Nosotros</h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <p>
        <p>
  Llevo tiempo creando, soñando y organizando <strong>bodas mágicas</strong>, pero siempre detrás de
  escena… hasta ahora. Si has estado por aquí un tiempo, es posible que me hayas visto en algunas
  fotos, sobre todo en las de mi propia boda (¡porque sí, también viví mi cuento de hadas!).
  <br /><br />
  Soy <strong>Anna</strong>, creativa por naturaleza, amante de los detalles y la persona al timón de
  <strong> The Perfect Match</strong>. Mi historia con las bodas comenzó hace ya varios años, mucho
  antes de dedicarme profesionalmente a organizarlas. Desde entonces, he tenido el privilegio de
  acompañar a parejas maravillosas en uno de los días más especiales de sus vidas, viviendo de
  cerca la emoción, los nervios y la magia que envuelven cada <em>“sí, quiero”</em>.
  <br /><br />
  Todo este camino me ha enseñado que una boda es mucho más que un evento: es la expresión más
  auténtica de una historia de amor. Por eso, cada proyecto que tomo lo vivo como si fuera único,
  plasmando en él sensibilidad, creatividad y ese toque personal que lo hace inolvidable.
  <br /><br />
  Así nació <strong>The Perfect Match</strong>: un espacio donde los sueños toman forma, los
  detalles cuentan historias y cada momento se convierte en un recuerdo imborrable. Si estás aquí,
  probablemente también crees en la magia de las pequeñas cosas.  
  <br /><br />
  <strong>Y tú, ¿te animas a crear juntos tu historia perfecta?</strong>
</p>

      </p>
    </div>

    <div className="about-image">
      <img
        src="/me.png"
        alt="Fotografía del equipo de la empresa sonriendo en la oficina"
        loading="lazy"
      />
    </div>
  </div>
</section>


        <section className="section services">
          <div id="#servicios" className="section-heading align-left">
            <h2>Servicios</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section gallery">
          <div className="section-heading align-left">
            <span className="eyebrow">Portfolio</span>
            <h2>Un mosaico de historias reales</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className={`gallery-item ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 720px) 70vw, (max-width: 1200px) 35vw, 360px"
                  className="gallery-photo"
                />
                {image.label && <figcaption>{image.label}</figcaption>}
              </figure>
            ))}
          </div>
        </section>

        <section className="section manifesto">
          <blockquote>
            “Menos guion, más emoción verdadera. Dejamos que la luz y el gesto
            cuenten la historia.”
          </blockquote>
        </section>

        <section id="contacto" className="section contact">
          <div className="contact-inner">
            <span className="eyebrow">Hablemos</span>
            <h2>Agenda una videollamada privada</h2>
            <p>
              Cuéntanos cómo imagináis vuestro gran día y prepararemos una guía
              inicial con direcciones y sensaciones a medida.
            </p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:hello@theperfectmatch.es">
                hello@theperfectmatch.es
              </a>
              <a className="btn ghost" href="https://wa.me/34123456789">
                +34 123 456 789
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Wedding Planners</p>
          <p>
            Produciendo bodas elegantes en España.
          </p>
        </footer>
      </div>
    </>
  );
}
