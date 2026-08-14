"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import scrollToIdWithOffset from "@/lib/scroll";
import { navigation } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[#E9E0D5] bg-[#FAF7F2]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToIdWithOffset("top", 0);
          }}
          className="text-sm font-medium uppercase tracking-[0.35em] text-[#2B2927]"
        >
          Roble Rojo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#2B2927]/80 transition hover:text-[#2B2927]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToIdWithOffset("contact");
          }}
          className="rounded-full border border-[#D8CDB8] px-4 py-2 text-sm text-[#2B2927] transition hover:bg-[#F5F1EA]"
        >
          Reservar sesión
        </a>
      </div>
    </motion.header>
  );
}
