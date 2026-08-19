import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppMantineProvider } from "@/components/mantine/MantineProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roble Rojo — Fotografía en Cantabria",
  description:
    "Roble Rojo — Fotógrafa en Cantabria. Sesiones de retrato, familia y marca personal con estética natural, cálida y cercana.",
  metadataBase: undefined,
  icons: {
    icon: "/file.svg",
    shortcut: "/file.svg",
  },
  openGraph: {
    title: "Roble Rojo — Fotografía en Cantabria",
    description:
      "Sesiones de retrato, familia y marca personal en Cantabria. Fotografía natural con sensibilidad y calma.",
    url: "/",
    siteName: "Roble Rojo",
    images: [{ url: "/nature.avif", width: 1200, height: 630, alt: "Fotografía en Cantabria - Roble Rojo" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roble Rojo — Fotografía en Cantabria",
    description:
      "Sesiones de retrato, familia y marca personal en Cantabria. Fotografía natural con sensibilidad y calma.",
    images: ["/nature.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://example.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Roble Rojo",
        "url": baseUrl
      },
      {
        "@type": "ProfessionalService",
        "name": "Roble Rojo",
        "serviceType": "Fotografía",
        "description": "Sesiones de retrato, familia y marca personal en Cantabria.",
        "url": baseUrl,
        "image": `${baseUrl}/nature.avif`,
        "areaServed": {
          "@type": "Place",
          "address": { "addressRegion": "Cantabria", "addressCountry": "ES" }
        },
        "sameAs": ["https://www.instagram.com/roble__rojo"]
      },
      {
        "@type": "Person",
        "name": "Marta",
        "jobTitle": "Fotógrafa",
        "worksFor": { "@type": "Organization", "name": "Roble Rojo" },
        "sameAs": ["https://www.instagram.com/roble__rojo"],
        "email": "margicar@outlook.es"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Reservas", "item": `${baseUrl}/reservation` }
        ]
      }
    ]
  };

  return (
    <html
      lang="es-ES"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AppMantineProvider>{children}</AppMantineProvider>
      </body>
    </html>
  );
}
