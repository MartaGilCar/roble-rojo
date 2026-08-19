import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Philosophy } from "@/components/sections/philosophy";
import { Cta } from "@/components/sections/cta";
import { storySessions, portfolioItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galería | Roble Rojo",
  description: "Portfolio y historias fotográficas de Roble Rojo.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2B2927]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="mb-0 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Galería</p>
            <Link href="/#gallery" className="text-xs uppercase tracking-[0.24em] text-[#7F7568] transition hover:text-[#2B2927]">
              Inicio
            </Link>
          </div>
          <h1 className="font-[Cormorant_Garamond] text-5xl leading-none text-[#2B2927] sm:text-6xl">
            Galería
          </h1>
        </div>

        <section id="gallery" className="mb-20 border-t border-[#E8E0D4] pt-10 sm:pt-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Portfolio</p>
              <h2 className="font-[Cormorant_Garamond] text-4xl leading-none text-[#2B2927] sm:text-5xl">
                Portfolio
              </h2>
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden border border-[#E8E0D4] bg-[#F5F1EA]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E8E0D4] pt-10 sm:pt-12">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Historias</p>
              <h2 className="font-[Cormorant_Garamond] text-4xl leading-none text-[#2B2927] sm:text-5xl">
                HISTORIAS
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#4D4844] sm:text-lg">
              Personas, lugares y momentos que he tenido la suerte de fotografiar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {storySessions.map((session) => (
              <Link key={session.slug} href={`/galeria/${session.slug}`} className="group block">
                <div className="overflow-hidden border border-[#E8E0D4] bg-[#F5F1EA]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={session.coverImage}
                      alt={session.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-end justify-between gap-4 px-4 pb-4 pt-5 sm:px-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#7F7568]">Sesión</p>
                      <h3 className="mt-2 font-[Cormorant_Garamond] text-3xl leading-none text-[#2B2927] sm:text-[2.2rem]">
                        {session.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#4D4844] sm:text-base">
                        {session.location} · {session.year}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#2B2927] transition group-hover:translate-x-1">
                      Ver historia →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Philosophy />
      <Cta />
      <Footer />
    </main>
  );
}
