"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems, storySessions } from "@/lib/content";

export function PhotoGallery() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Portfolio</p>
            <h2 className="font-[Cormorant_Garamond] text-4xl leading-none text-[#2B2927] sm:text-5xl">
              Portfolio
            </h2>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group relative overflow-hidden border border-[#E8E0D4] bg-transparent"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                style={{ objectPosition: "50% 35%" }}
              />
            </motion.div>
          ))}
        </div>

        {portfolioItems.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="border border-[#D8CDB8] px-5 py-2.5 text-sm font-medium text-[#2B2927] transition hover:bg-[#F5F1EA]"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}

        <div className="mt-24 border-t border-[#E8E0D4] pt-14 sm:pt-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Historias</p>
              <h3 className="font-[Cormorant_Garamond] text-4xl leading-none text-[#2B2927] sm:text-5xl">
                HISTORIAS
              </h3>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#4D4844] sm:text-lg">
              Personas, lugares y momentos que he tenido la suerte de fotografiar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {storySessions.map((session) => (
              <Link
                key={session.slug}
                href={`/galeria/${session.slug}`}
                className="group block"
              >
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
                      <h4 className="mt-2 font-[Cormorant_Garamond] text-3xl leading-none text-[#2B2927] sm:text-[2.2rem]">
                        {session.name}
                      </h4>
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
        </div>
      </div>
    </section>
  );
}
