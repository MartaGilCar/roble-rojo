"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function Philosophy() {
  return (
    <Section id="philosophy" eyebrow="Filosofía" title="Un proceso sereno, pensado para que te sientas en casa.">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-lg leading-8 text-[#2B2927]/75">
Creo espacios donde puedas ser tú misma. Donde la natureleza y la calma te ayudan a conectar contigo y con lo que de verdad importa.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] border border-[#EBE1D3] bg-[#F5F1EA]"
        >
          <div className="relative h-[420px] sm:h-[520px]">
            <Image
              src="/yop.jpeg"
              alt="Estudio de fotografía con luz suave"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
