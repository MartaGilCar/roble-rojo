"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import scrollToIdWithOffset from "@/lib/scroll";

const navItems = [
  { label: "Galería", href: "#gallery" },
  { label: "Sobre mí", href: "#philosophy" },
  { label: "Reservar sesión", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace(/^#/, "");
    scrollToIdWithOffset(id);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[#E9E0D5] bg-[#FAF7F2]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            scrollToIdWithOffset("top", 0);
          }}
          className="text-sm font-medium uppercase tracking-[0.28em] text-[#2B2927] transition hover:text-[#1f1d1a]"
        >
          ROBLE ROJO
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="text-sm text-[#2B2927]/80 transition hover:text-[#2B2927]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          onClick={(event) => handleAnchorClick(event, "#contact")}
          className="hidden rounded-full border border-[#D8CDB8] px-4 py-2 text-sm text-[#2B2927] transition hover:bg-[#F5F1EA] md:inline-flex"
        >
          Reservar sesión
        </Link>

        <div className="relative flex items-center md:hidden">
          <button
            ref={buttonRef}
            type="button"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E0D4] bg-[#FAF7F2]/80 text-[#2B2927] transition hover:bg-[#F5F1EA]"
          >
            <span className="flex flex-col gap-[4px]">
              <span className={`h-[1.5px] w-4 rounded-full bg-[#2B2927] transition ${mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-4 rounded-full bg-[#2B2927] transition ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[1.5px] w-4 rounded-full bg-[#2B2927] transition ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>

          {mobileMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-3 w-[220px] overflow-hidden rounded-[1.25rem] border border-[#E8E0D4] bg-[#FAF7F2]/95 shadow-[0_20px_40px_rgba(43,41,39,0.08)] backdrop-blur-xl"
            >
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleAnchorClick(event, item.href)}
                    className="rounded-full px-4 py-3 text-base text-[#2B2927] transition hover:bg-[#F5F1EA]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
