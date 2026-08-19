import Image from "next/image";
import dynamic from "next/dynamic";
const Motion = dynamic(() => import("@/components/ui/MotionClient"));
import { experiences } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function Experiences() {
  return (
    <Section id="experiences" eyebrow="Experiencias" title="Momentos pensados para cada etapa de la vida.">
      <div className="grid gap-6 lg:grid-cols-3">
        {experiences.map((item, index) => (
          <Motion
            key={item.title}
            tag="article"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.75rem] border border-[#EBE1D3] bg-[#FAF7F2]"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-7">
              <h3 className="font-[Cormorant_Garamond] text-2xl text-[#2B2927]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#2B2927]/70">{item.description}</p>
            </div>
          </Motion>
        ))}
      </div>
    </Section>
  );
}
