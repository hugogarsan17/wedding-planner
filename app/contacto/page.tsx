import Navbar from "../Components/Navbar/Navbar";
import "../Components/styles/buttons.css";
import "./contacto.css";

const contactHighlights = [
  {
    title: "Videollamada estratégica",
    description:
      "Un encuentro de 45 minutos para escuchar vuestra visión, resolver dudas iniciales y definir los siguientes pasos.",
    actionLabel: "Reservar agenda",
    actionHref: "https://cal.com/",
    external: true,
  },
  {
    title: "Email dedicado",
    description:
      "Respondemos personalmente a cada mensaje con una guía preliminar y propuestas de localización en menos de 48 horas.",
    actionLabel: "Escribir correo",
    actionHref: "mailto:hola@lunaandco.com",
    external: false,
  },
  {
    title: "Atención internacional",
    description:
      "Coordinamos bodas destino en español e inglés y nos adaptamos a vuestra zona horaria para las reuniones clave.",
    actionLabel: "Solicitar llamada",
    actionHref: "https://wa.me/34123456789",
    external: true,
  },
];

const faqs = [
  {
    question: "¿Qué preparáis antes de la primera reunión?",
    answer:
      "Analizamos vuestra visión, referencias e invitados para presentar ideas de estilo, destinos sugeridos y estimaciones iniciales de presupuesto.",
  },
  {
    question: "¿Trabajáis con bodas íntimas?",
    answer:
      "Sí, diseñamos desde elopements de dos personas hasta celebraciones de fin de semana con 150 invitados, siempre con un enfoque editorial y sostenible.",
  },
  {
    question: "¿Podemos concertar una reunión presencial?",
    answer:
      "Tras la videollamada inicial agendamos encuentros presenciales en Madrid o en la localización de la boda para avanzar en detalles logísticos y creativos.",
  },
];

export default function ContactoPage() {
  return (
    <div className="contact-page">
      <div className="contact-nav">
        <Navbar />
      </div>

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <span className="eyebrow">Contacto</span>
            <h1>Conversemos sobre vuestra boda soñada</h1>
            <p>
              Agenda una videollamada privada o escríbenos directamente. Nuestro
              equipo boutique diseña experiencias a medida en España y destinos
              europeos seleccionados.
            </p>
            <div className="contact-hero-actions">
              <a className="btn primary" href="mailto:hola@lunaandco.com">
                Escribir email
              </a>
              <a className="btn dark" href="https://cal.com/">
                Reservar videollamada
              </a>
            </div>
            <p className="contact-response">Respondemos en menos de 48 horas.</p>
          </div>
        </section>

        <section className="contact-details">
          <div className="contact-details-header">
            <h2>Cómo podemos empezar</h2>
            <p>
              Selecciona la vía que mejor se adapte a vuestro ritmo. Todas las
              consultas reciben una respuesta personalizada del equipo creativo.
            </p>
          </div>
          <div className="contact-grid">
            {contactHighlights.map((item) => (
              <article key={item.title} className="contact-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  className="contact-card-link"
                  href={item.actionHref}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.actionLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-faq">
          <div className="contact-faq-inner">
            <h2>Preguntas frecuentes</h2>
            <ul>
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
            <div className="contact-extra">
              <span>¿Preferís hablar por teléfono?</span>
              <a href="tel:+34123456789">+34 123 456 789</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
