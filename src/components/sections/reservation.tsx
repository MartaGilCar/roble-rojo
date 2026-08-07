"use client";

import { ContactForm } from "@/components/reservation/contact-form";

export function ReservationSection() {
  return (
    <section id="contact" className="bg-[#FAF7F2] py-24 sm:py-28 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32">
      <ContactForm />
    </section>
  );
}
