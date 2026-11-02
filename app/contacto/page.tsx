import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";
import "./contacto.css";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contadnos cómo imagináis vuestra boda y os enviaremos una propuesta inicial según vuestro estilo, destino y presupuesto. Respondemos en menos de 48 horas laborables.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main id="contenido" tabIndex={-1} className="contact-page">
      <section className="contact-section">
        <ContactIntro />
        <ContactForm />
      </section>
    </main>
  );
}
