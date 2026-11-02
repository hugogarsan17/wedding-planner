import type { Metadata } from "next";
import About from "@/app/Components/About-me/About";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Sobre Anna",
  description:
    "Conoce a Anna, fundadora de The Perfect Match: wedding planner que diseña bodas elegantes, personales y sin prisas en España y Europa.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
