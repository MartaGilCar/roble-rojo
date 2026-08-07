"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroHighlights } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">
      <Image
        src="/nature.jpg"
        alt="Mujer en naturaleza con luz suave"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,243,232,0.86)_0%,rgba(250,243,232,0.42)_42%,rgba(250,243,232,0.08)_100%)]" />

      <Container className="relative flex min-h-screen items-end py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
 
        >
          {/* <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-[#0d0a07]">
            Fotografía en Cantabria
          </p> */}
          <h1 className="font-[Cormorant_Garamond] text-4xl leading-[1.05] text-[#0d0a07] sm:text-5xl lg:text-6xl">
            Fotografía en Cantabria
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#0d0a07] sm:text-lg">
            Sesiones en la naturaleza, para personas que eligen habitarse desde la calma y la presencia. 
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              Reservar sesión
            </Button>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/55 bg-transparent px-6 py-3 text-sm font-medium text-[#FAF7F2] transition hover:border-white/80"
            >
              Ver portfolio
            </a>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
