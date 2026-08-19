import dynamic from "next/dynamic";
const Motion = dynamic(() => import("@/components/ui/MotionClient"));
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="bg-[#F5F1EA] py-24 sm:py-28 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Motion
          tag="div"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="rounded-[2rem] border border-[#E8E0D4] bg-[#FAF7F2] p-8 sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8B7D67]">Contacto</p>
              <h2 className="mt-3 font-[Cormorant_Garamond] text-3xl text-[#2B2927] sm:text-4xl">
                Hablemos de tu próxima sesión.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#2B2927]/75">
                Ya sea para un retrato íntimo, una colección familiar o una propuesta de marca, cada proyecto se desarrolla con presencia, calma y una estética muy cuidada.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:margicar@outlook.es" variant="primary">
                     margicar@outlook.es
              </Button>
              <Button href="https://www.instagram.com/roble__rojo?igsh=NzRiNDk0ZzQ0enJ4&utm_source=qr" variant="secondary">
                Instagram
              </Button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
