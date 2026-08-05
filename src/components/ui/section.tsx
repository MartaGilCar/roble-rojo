import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
};

export function Section({ children, className, id, eyebrow, title }: SectionProps) {
  return (
    <section id={id} className={className}>
      <Container className="py-24 sm:py-28 lg:py-32">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && <p className="mb-3 text-[0.7rem] uppercase tracking-[0.35em] text-[#8B7D67]">{eyebrow}</p>}
            {title && <h2 className="font-[Cormorant_Garamond] text-3xl leading-tight text-[#2B2927] sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
