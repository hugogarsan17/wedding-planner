// Datos del sitio en un único lugar. Revisa SITE_URL antes de publicar:
// se usa para la URL canónica, el sitemap, robots.txt y Open Graph.
export const SITE = {
  name: "The Perfect Match",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://theperfectmatch.es",
  email: "hello@theperfectmatch.es",
  phone: "+34677049605",
  whatsapp: "34677049605",
  instagram: "https://www.instagram.com/theperfectmatch.wed/",
  instagramHandle: "@theperfectmatch.wed",
  // Para no publicar el email en el HTML, sustituye el email por el alias
  // aleatorio que FormSubmit envía al activar el formulario
  // (https://formsubmit.co/<alias>) mediante NEXT_PUBLIC_FORMSUBMIT_ENDPOINT.
  formEndpoint:
    process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ??
    "https://formsubmit.co/hello@theperfectmatch.es",
  description:
    "Estudio boutique de wedding planning y diseño de bodas elegantes y personalizadas en España y Europa.",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${SITE.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
