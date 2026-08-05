"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonios" title="Palabras de quienes vivieron la experiencia.">
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="border-b border-[#E8E0D4] pb-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={item.image} alt={item.name} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-[#2B2927]">{item.name}</p>
                <p className="text-sm text-[#8B7D67]">{item.role}</p>
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-[#2B2927]/75">“{item.quote}”</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
