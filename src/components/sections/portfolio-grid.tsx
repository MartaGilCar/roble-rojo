"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function PortfolioGrid() {
  return (
    <Section id="portfolio" eyebrow="Experiencias" title="Una mirada cálida y atenta.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[1.75rem] bg-[#F5F1EA]"
          >
            <div className="relative h-[360px] sm:h-[420px]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(43,41,39,0.12)_100%)]" />
            </div>
            <div className="flex items-end justify-between p-6">
              <div>
                <h3 className="font-[Cormorant_Garamond] text-2xl text-[#2B2927]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#8B7D67]">{item.description}</p>
              </div>
              <span className="text-sm text-[#2B2927]/60">↗</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
