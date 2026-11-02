import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/contacto", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
