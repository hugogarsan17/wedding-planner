import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import SiteHeader from "./Components/SiteHeader/SiteHeader";
import Footer from "./Components/Footer/Footer";
import Whatsapp from "./Components/whatsapp/whatsapp";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const bdScript = localFont({
  variable: "--font-bd-script",
  display: "swap",
  src: [
    { path: "./fonts/BDScript-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BDScript-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Perfect Match | Wedding planner en España y Europa",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#211619",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/og-image.jpg`,
  logo: `${SITE.url}/logo.jpeg`,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: ["España", "Europa"],
  sameAs: [SITE.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${bdScript.variable}`}
    >
      <body className="antialiased">
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
          <Whatsapp />
        </Providers>
        <script
          type="application/ld+json"
          // Contenido estático definido arriba, no procede de usuarios.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
