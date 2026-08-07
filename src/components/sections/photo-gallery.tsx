"use client";

import { useState } from "react";
// usar etiqueta img para preservar la proporción completa de las imágenes
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/content";

export function PhotoGallery() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group overflow-hidden border border-[#E8E0D4] bg-[#F5F1EA]"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
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
      </div>
    </section>
  );
}
