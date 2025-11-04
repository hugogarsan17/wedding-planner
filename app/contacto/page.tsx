import Navbar from "../Components/Navbar/Navbar";
import "../Components/styles/buttons.css";
import "./contacto.css";

export default function ContactoPage() {
  return (
    <div className="contact-page">
      <div className="contact-nav">
        <Navbar />
      </div>

      <main className="contact-main">
        <section className="contact-section">
          <div className="contact-intro">
            <span className="eyebrow">Contacto</span>
            <h1>Cuéntanos vuestra historia</h1>
            <p>
              Completa el formulario y diseñaremos una propuesta inicial en base a
              vuestro estilo, destino y presupuesto. Si preferís escribirnos
              directamente, siempre podéis hacerlo al correo del estudio.
            </p>
            <a className="contact-email" href="mailto:hello@theperfectmatch.es">
              hello@theperfectmatch.es
            </a>
            <p className="contact-note">Respondemos en menos de 48 horas laborables.</p>
          </div>

          <form
            className="contact-form"
            action="mailto:hello@theperfectmatch.es"
            method="post"
            encType="text/plain"
          >
            <div className="form-grid">
              <label>
                Nombre completo
                <input type="text" name="nombre" autoComplete="name" required />
              </label>
              <label>
                Email de contacto
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Teléfono (opcional)
                <input type="tel" name="telefono" autoComplete="tel" />
              </label>
              <label className="full">
                Mensaje
                <textarea name="mensaje" rows={5} required></textarea>
              </label>
            </div>
            <button type="submit" className="btn primary">
              Enviar consulta
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}