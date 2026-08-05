"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function Process() {
  return (
    <Section id="process" eyebrow="Proceso" title="Una experiencia cuidada desde el primer mensaje.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="border-t border-[#E8E0D4] pt-6"
          >
            <p className="text-sm font-medium text-[#B89B6D]">{step.title}</p>
            <p className="mt-3 text-sm leading-7 text-[#2B2927]/70">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
