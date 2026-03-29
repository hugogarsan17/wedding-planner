export type LocalizedText = {
  es: string;
  en: string;
};

export type Wedding = {
  slug: string;
  title: string;
  location: string;
  year: string;
  cover: string;
  description: LocalizedText;
  images: string[];
};

export const weddings: Wedding[] = [
  {
    slug: "mallorca-finca-wedding",
    title: "Isabella & Marc",
    location: "Mallorca, Spain",
    year: "2024",
    cover: "/p8.jpeg",
    description: {
      es: "Una boda mediterranea entre mar, piedra y una luz dorada pensada para disfrutar sin prisas.",
      en: "A Mediterranean celebration shaped by sea views, stone textures and a golden, unhurried atmosphere.",
    },
    images: ["/p8.jpeg", "/p7.jpeg", "/p6.jpeg", "/p5.jpeg"],
  },
  {
    slug: "tuscany-villa-wedding",
    title: "Charlotte & Daniel",
    location: "Tuscany, Italy",
    year: "2023",
    cover: "/p4.jpeg",
    description: {
      es: "Direccion artistica suave, mesa editorial y una celebracion intima en clave italiana.",
      en: "Soft art direction, an editorial tablescape and an intimate celebration with an Italian spirit.",
    },
    images: ["/p4.jpeg", "/p3.jpeg", "/p2.jpeg", "/p1.jpeg"],
  },
  {
    slug: "madrid-palace-wedding",
    title: "Lucia & Javier",
    location: "Madrid, Spain",
    year: "2024",
    cover: "/p11.jpeg",
    description: {
      es: "Una boda urbana con elegancia clasica, ritmo sereno y una produccion muy cuidada.",
      en: "A city wedding with classic elegance, a calm rhythm and carefully crafted production.",
    },
    images: ["/p11.jpeg", "/p10.jpeg", "/p9.jpeg", "/p5.jpeg"],
  },
  {
    slug: "provence-garden-wedding",
    title: "Emma & Louis",
    location: "Provence, France",
    year: "2022",
    cover: "/p1.jpeg",
    description: {
      es: "Jardin, flores organicas y una puesta en escena romantica con sensibilidad francesa.",
      en: "Garden florals, organic textures and a romantic setting with a distinctly French sensibility.",
    },
    images: ["/p1.jpeg", "/p6.jpeg", "/p7.jpeg", "/p8.jpeg"],
  },
];
