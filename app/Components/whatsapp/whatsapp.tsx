"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./whatsapp.css";

export default function Whatsapp() {
  const [open, setOpen] = useState(false);

  // PON AQUÍ TU NÚMERO EN FORMATO INTERNACIONAL, SIN ESPACIOS
  const phone = "34677049605"; // ejemplo: 34 + número de España
const defaultMessage = 
"¡Hola!  Estamos comenzando a organizar nuestra boda y nos gustaría recibir información sobre vuestros servicios de wedding planner. \n\nNos encanta vuestro estilo y quisiéramos saber disponibilidad, tipos de servicio y cómo trabajáis. También podemos compartir detalles como fecha aproximada, destino y número de invitados. \n\n¡Muchas gracias!";


  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="whatsapp-widget">
      {/* Pop-up */}
      {open && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <span>¿Hablamos por WhatsApp?</span>
            <button
              className="whatsapp-popup-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
          <div className="whatsapp-popup-body">
            <p>
              Resuelve tus dudas, pide cita o solicita información de forma
              rápida.
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Abrir chat
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        className="whatsapp-fab"
        onClick={() => setOpen(!open)}
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="whatsapp-icon">
          <Image src="/logo-wass.png" alt="WhatsApp" width={24} height={24} />
        </span>
      </button>
    </div>
  );
}
