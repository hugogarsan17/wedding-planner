"use client";

import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/styles/buttons.css";
import "./contacto.css";
import { useTranslation } from "react-i18next";

export default function ContactoPage() {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<"es" | "en">(
    i18n.language?.startsWith("en") ? "en" : "es"
  );

  const changeLanguage = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  const [formValues, setFormValues] = useState({
  nombre: "",
  email: "",
  mensaje: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormValues((prev) => ({ ...prev, [name]: value }));
};


const isEmailValid = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isFormValid =
  formValues.nombre.trim() !== "" &&
  isEmailValid(formValues.email) &&
  formValues.mensaje.trim() !== "";


  return (
    <>
      {/* LANG SWITCHER */}
      <div className="lang-switcher">
        <button
          onClick={() => changeLanguage("es")}
          className={activeLang === "es" ? "active" : ""}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={activeLang === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>

      <div className="contact-page">
        <div className="contact-nav">
          <Navbar />
        </div>

        <main className="contact-main">
          <section className="contact-section">
            {/* INTRO */}
            <div className="contact-intro">
              <span className="eyebrow">
                {t("contactPage.eyebrow")}
              </span>

              <h1>{t("contactPage.title")}</h1>

              <p>{t("contactPage.intro.description")}</p>

              <a
                className="contact-email"
                href={`mailto:${t("contactPage.intro.email")}`}
              >
                {t("contactPage.intro.email")}
              </a>

              <p className="contact-note">
                {t("contactPage.intro.note")}
              </p>
            </div>

            {/* FORM */}
            <form
              className="contact-form"
              action="https://formsubmit.co/hello@theperfectmatch.es"
              method="POST"
              noValidate
            >
              {/* Anti-spam honeypot */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* FormSubmit config */}
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from website - The Perfect Match"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/gracias" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-grid">
                {/* NAME */}
                <label className="form-field">
                  <span className="label-text">
                    {t("contactPage.form.fields.name.label")}
                  </span>
<input
  type="text"
  name="nombre"
  autoComplete="name"
  required
  aria-required="true"
  value={formValues.nombre}
  onChange={handleChange}
  placeholder={t("contactPage.form.fields.name.placeholder")}
/>

                </label>

                {/* EMAIL */}
                <label className="form-field">
                  <span className="label-text">
                    {t("contactPage.form.fields.email.label")}
                  </span>
<input
  type="email"
  name="email"
  autoComplete="email"
  required
  aria-required="true"
  value={formValues.email}
  onChange={handleChange}
  placeholder={t("contactPage.form.fields.email.placeholder")}
/>

                </label>

                {/* PHONE */}
                <label className="form-field">
                  <span className="label-text">
                    {t("contactPage.form.fields.phone.label")}
                  </span>
                  <input
                    type="tel"
                    name="telefono"
                    autoComplete="tel"
                    placeholder={t(
                      "contactPage.form.fields.phone.placeholder"
                    )}
                  />
                </label>

                {/* DATE */}
                <label className="form-field full">
                  <span className="label-text">
                    {t("contactPage.form.fields.date.label")}
                  </span>
                  <input
                    type="text"
                    name="fecha"
                    placeholder={t(
                      "contactPage.form.fields.date.placeholder"
                    )}
                  />
                </label>

                {/* MESSAGE */}
                <label className="form-field full">
                  <span className="label-text">
                    {t("contactPage.form.fields.message.label")}
                  </span>
<textarea
  name="mensaje"
  rows={6}
  required
  aria-required="true"
  value={formValues.mensaje}
  onChange={handleChange}
  placeholder={t("contactPage.form.fields.message.placeholder")}
/>

                </label>

                {/* LINKS */}
                <label className="form-field full">
                  <span className="label-text">
                    {t("contactPage.form.fields.links.label")}
                  </span>
                  <input
                    type="url"
                    name="portfolioLink"
                    placeholder={t(
                      "contactPage.form.fields.links.placeholder"
                    )}
                  />
                </label>
              </div>

              {/* SUBMIT */}
              <div className="form-actions">
<button
  type="submit"
  className="btn primary btn-submit"
  disabled={!isFormValid}
  aria-disabled={!isFormValid}
>
  {t("contactPage.form.submit")}
</button>

              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
