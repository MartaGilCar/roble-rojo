import type { Metadata } from "next";
import { ContactForm } from "@/components/reservation/contact-form";

export default function ReservationPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <ContactForm />
    </main>
  );
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Reservar sesión — Roble Rojo",
  description: "Reserva una sesión en Cantabria: retratos, familia y marca personal. Contacta para disponibilidad y precios.",
  alternates: {
    canonical: `${baseUrl}/reservation`,
  },
  openGraph: {
    title: "Reservar sesión — Roble Rojo",
    description: "Reserva una sesión en Cantabria: retratos, familia y marca personal.",
    url: `${baseUrl}/reservation`,
    images: [{ url: `${baseUrl}/nature.avif`, width: 1200, height: 630, alt: "Reservar sesión - Roble Rojo" }],
  },
};
