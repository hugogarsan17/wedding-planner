"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SITE } from "@/lib/site";

type RequiredField = "nombre" | "email" | "mensaje";
type FormValues = Record<RequiredField, string>;
type FormErrors = Partial<Record<RequiredField, string>>;

const FIELD_ORDER: RequiredField[] = ["nombre", "email", "mensaje"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const nextRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<FormValues>({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [attempted, setAttempted] = useState(false);

  const validate = (current: FormValues): FormErrors => {
    const result: FormErrors = {};
    if (!current.nombre.trim()) result.nombre = t("contactPage.form.fields.name.required");
    if (!EMAIL_PATTERN.test(current.email.trim()))
      result.email = t("contactPage.form.fields.email.required");
    if (!current.mensaje.trim()) result.mensaje = t("contactPage.form.fields.message.required");
    return result;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Tras el primer intento, los errores se actualizan mientras se escribe.
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const found = validate(values);
    setAttempted(true);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      event.preventDefault();
      const element = formRef.current?.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    // FormSubmit necesita una URL absoluta para redirigir tras el envío.
    if (nextRef.current) nextRef.current.value = `${window.location.origin}/gracias`;
  };

  const errorProps = (field: RequiredField) =>
    errors[field]
      ? { "aria-invalid": true as const, "aria-describedby": `${field}-error` }
      : {};

  const errorMessage = (field: RequiredField) =>
    errors[field] ? (
      <span id={`${field}-error`} className="field-error">
        {errors[field]}
      </span>
    ) : null;

  return (
    <form
      ref={formRef}
      className="contact-form"
      action={SITE.formEndpoint}
      method="POST"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Trampa anti-spam: los bots la rellenan, las personas no la ven. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" hidden />
      <input type="hidden" name="_subject" value="Nueva consulta desde la web - The Perfect Match" />
      <input type="hidden" name="_template" value="table" />
      <input ref={nextRef} type="hidden" name="_next" defaultValue={`${SITE.url}/gracias`} />

      <div className="form-grid">
        <label className="form-field">
          <span className="label-text">{t("contactPage.form.fields.name.label")}</span>
          <input
            type="text"
            name="nombre"
            autoComplete="name"
            required
            value={values.nombre}
            onChange={handleChange}
            placeholder={t("contactPage.form.fields.name.placeholder")}
            {...errorProps("nombre")}
          />
          {errorMessage("nombre")}
        </label>

        <label className="form-field">
          <span className="label-text">{t("contactPage.form.fields.email.label")}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder={t("contactPage.form.fields.email.placeholder")}
            {...errorProps("email")}
          />
          {errorMessage("email")}
        </label>

        <label className="form-field">
          <span className="label-text">{t("contactPage.form.fields.phone.label")}</span>
          <input
            type="tel"
            name="telefono"
            autoComplete="tel"
            placeholder={t("contactPage.form.fields.phone.placeholder")}
          />
        </label>

        <label className="form-field">
          <span className="label-text">{t("contactPage.form.fields.date.label")}</span>
          <input
            type="text"
            name="fecha"
            placeholder={t("contactPage.form.fields.date.placeholder")}
          />
        </label>

        <label className="form-field full">
          <span className="label-text">{t("contactPage.form.fields.message.label")}</span>
          <textarea
            name="mensaje"
            rows={6}
            required
            value={values.mensaje}
            onChange={handleChange}
            placeholder={t("contactPage.form.fields.message.placeholder")}
            {...errorProps("mensaje")}
          />
          {errorMessage("mensaje")}
        </label>

        <label className="form-field full">
          <span className="label-text">{t("contactPage.form.fields.links.label")}</span>
          <input
            type="url"
            name="portfolioLink"
            inputMode="url"
            placeholder={t("contactPage.form.fields.links.placeholder")}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-dark">
          {t("contactPage.form.submit")}
        </button>
      </div>
    </form>
  );
}
