import type { Metadata } from "next";
import { SITE } from "./site";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Perfect Match: una pareja de novios paseando por un jardín de setos",
};

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
};

// Next sustituye el objeto openGraph completo cuando una página define el suyo,
// así que cada página construye sus metadatos desde aquí para no perder campos.
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      alternateLocale: ["en_GB"],
      siteName: SITE.name,
      url: path,
      title: title ? `${title} | ${SITE.name}` : undefined,
      description,
      images: [OG_IMAGE],
    },
  };
}
