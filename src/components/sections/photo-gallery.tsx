"use client";

import { useState, useEffect, useRef } from "react";
// usar etiqueta img para preservar la proporción completa de las imágenes
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/content";

export function PhotoGallery() {
  const [expanded, setExpanded] = useState(false);
  const [galleryHeight, setGalleryHeight] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const visibleItems = expanded ? portfolioItems : portfolioItems.slice(0, 4);

  useEffect(() => {
    // Calculate a fixed height based on the smallest image aspect ratio
    if (!gridRef.current) return;

    const imgs = portfolioItems.map((it) => {
      return new Promise<{ w: number; h: number }>((res) => {
        const img = new Image();
        img.src = it.image;
        img.onload = () => res({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => res({ w: 1, h: 1 });
      });
    });

    Promise.all(imgs).then((sizes) => {
      const ratios = sizes.map((s) => s.h / s.w);
      const minRatio = Math.min(...ratios);

      const gridWidth = gridRef.current?.clientWidth || 0;
      const vw = window.innerWidth;
      let cols = 1;
      if (vw >= 1280) cols = 4;
      else if (vw >= 768) cols = 2;

      const gap = 8 * (cols - 1); // tailwind gap-2 = 0.5rem = 8px
      const columnWidth = Math.max(0, (gridWidth - gap) / cols);
      const targetHeight = Math.round(minRatio * columnWidth);

      // Only apply on desktop (>= 641px)
      if (vw >= 641) setGalleryHeight(targetHeight);
      else setGalleryHeight(null);
    });
  }, []);

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div ref={gridRef} className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group overflow-hidden border border-[#E8E0D4] bg-transparent"
              style={galleryHeight ? { height: `${galleryHeight}px` } : undefined}
            >
              <div className="w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: "50% 35%" }}
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
