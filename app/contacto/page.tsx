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

          {/* Form configured to send to your email via FormSubmit.co */}
          <form
            className="contact-form"
            action="https://formsubmit.co/hello@theperfectmatch.es"
            method="POST"
            noValidate
          >
            {/* Anti-spam honeypot (hidden) */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Optional: customise subject / redirect after submission */}
            <input type="hidden" name="_subject" value="Nueva consulta desde web - The Perfect Match" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="/gracias" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-grid">
              <label className="form-field">
                <span className="label-text">Nombre completo</span>
                <input
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  required
                  aria-required="true"
                  placeholder="Ej. Ana García &amp; Pablo López"
                />
              </label>

              <label className="form-field">
                <span className="label-text">Email de contacto</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  placeholder="ejemplo@dominio.com"
                />
              </label>

              <label className="form-field">
                <span className="label-text">Teléfono (opcional)</span>
                <input
                  type="tel"
                  name="telefono"
                  autoComplete="tel"
                  placeholder="+34 600 000 000"
                />
              </label>

              <label className="form-field full">
                <span className="label-text">Fecha aproximada / temporada</span>
                <input
                  type="text"
                  name="fecha"
                  placeholder="Ej. Julio 2026, Primavera, 20/08/2026 (opcional)"
                />
              </label>

              <label className="form-field full">
                <span className="label-text">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  aria-required="true"
                  placeholder="Contadnos el estilo que os gusta, número aproximado de invitados, destino, presupuesto..."
                ></textarea>
              </label>

              <label className="form-field full">
                <span className="label-text">Adjuntar enlace a dossier / fotos (opcional)</span>
                <input
                  type="url"
                  name="portfolioLink"
                  placeholder="https://(link a Google Drive / Pinterest / album...)"
                />
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn primary btn-submit">
                Enviar consulta
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
