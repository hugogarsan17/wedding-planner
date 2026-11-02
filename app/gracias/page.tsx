import type { Metadata } from "next";
import ThankYou from "./ThankYou";
import "../contacto/contacto.css";

export const metadata: Metadata = {
  title: "Mensaje recibido",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main id="contenido" tabIndex={-1} className="contact-page">
      <section className="contact-section">
        <ThankYou />
      </section>
    </main>
  );
}
