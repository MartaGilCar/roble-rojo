import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PhotoGallery />
      <Philosophy />
      {/* <PortfolioGrid /> */}
      {/* <ReservationSection /> */}
      {/* <Testimonials /> */}
      <Cta />
      <Footer />
    </main>
  );
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Roble Rojo — Fotografía en Cantabria",
  description:
    "Sesiones de retrato, familia y marca personal en Cantabria. Fotografía natural con sensibilidad y calma.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: "Roble Rojo — Fotografía en Cantabria",
    description:
      "Sesiones de retrato, familia y marca personal en Cantabria. Fotografía natural con sensibilidad y calma.",
    url: `${baseUrl}/`,
    images: [{ url: `${baseUrl}/nature.avif`, width: 1200, height: 630, alt: "Fotografía en Cantabria - Roble Rojo" }],
  },
};
