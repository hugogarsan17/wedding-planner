import type { Metadata } from "next";
import Home from "./Components/Home/Home";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  description: SITE.description,
  path: "/",
});

export default function Page() {
  return <Home />;
}
