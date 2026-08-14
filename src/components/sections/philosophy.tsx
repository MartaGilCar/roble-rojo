"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function Philosophy() {
  return (
    <Section id="philosophy" eyebrow="Sobre mi" title="Una forma de volver a recordar quiénes éramos">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-lg leading-8 text-[#2B2927]/75 mb-4">Mi nombre es Marta y siempre he amado la fotografía.</p>

          <div className="overflow-hidden border border-[#EBE1D3] bg-[#F5F1EA] mb-4">
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src="/yo2.jpeg"
                alt="Estudio de fotografía con luz suave"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          <p className="text-lg leading-8 text-[#2B2927]/75 mb-4">Me he criado entre montañas, rodeada de naturaleza y de pequeños momentos que, sin darme cuenta, me enseñaron a observar.</p>

          <p className="text-lg leading-8 text-[#2B2927]/75 mb-4">Con el tiempo entendí que lo que más me gusta de la fotografía es reflejar lo que a veces pasa desapercibido: una mirada, un abrazo, la luz de un atardecer cualquiera.</p>

          <p className="text-lg leading-8 text-[#2B2927]/75 mb-4">Porque una fotografía es mucho más que una imagen: es una forma de volver a un momento cuando el tiempo haya pasado, de recordar cómo nos mirábamos o quiénes éramos entonces.</p>

          <p className="text-lg leading-8 text-[#2B2927]/75">Roble Rojo nace de esa forma de mirar. De mi amor por la naturaleza, por las personas, y por esas pequeñas historias que merecen ser recordadas.</p>

        </motion.div>
      </div>
    </Section>
  );
}
