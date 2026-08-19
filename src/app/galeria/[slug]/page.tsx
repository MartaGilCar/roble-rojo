import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getStoryBySlug, storySessions } from "@/lib/content";

export function generateStaticParams() {
  return storySessions.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Historia no encontrada | Roble Rojo",
    };
  }

  return {
    title: `${story.name} · ${story.location} · Roble Rojo`,
    description: `${story.intro} Sesión fotográfica de ${story.name} en ${story.location}.`,
    alternates: {
      canonical: `/galeria/${story.slug}`,
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-[#FAF7F2] text-[#2B2927]">
      <Header />
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <Link href="/#gallery" className="mb-8 inline-flex text-sm uppercase tracking-[0.2em] text-[#7F7568] transition hover:text-[#2B2927]">
          ← Volver a galería
        </Link>

        <header className="mb-10 border-b border-[#E8E0D4] pb-8 sm:mb-14 sm:pb-10">
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.35em] text-[#8B7D67]">Sesión</p>
          <h1 className="font-[Cormorant_Garamond] text-5xl leading-none text-[#2B2927] sm:text-7xl">
            {story.name}
          </h1>
          <div className="mt-4 flex flex-col gap-1 text-[#4D4844] sm:flex-row sm:items-center sm:gap-3">
            <h2 className="font-[Cormorant_Garamond] text-3xl leading-none text-[#2B2927] sm:text-4xl">
              {story.location} · {story.year}
            </h2>
          </div>
          <p className="mt-6 max-w-2xl text-lg italic text-[#514D4A] sm:text-xl">
            “{story.intro}”
          </p>
        </header>

        <div className="space-y-8 sm:space-y-12">
          {story.gallery.map((frame, index) => {
            if (frame.type === "text") {
              return (
                <div key={`${story.slug}-text-${index}`} className="px-2 py-6 sm:px-0 sm:py-10">
                  <p className="mx-auto max-w-2xl text-center font-[Cormorant_Garamond] text-3xl leading-tight text-[#2B2927] sm:text-4xl">
                    {frame.text}
                  </p>
                </div>
              );
            }

            if (frame.type === "double") {
              return (
                <div key={`${story.slug}-double-${index}`} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {frame.srcs?.map((src, subIndex) => (
                    <div key={`${story.slug}-double-${subIndex}`} className="relative aspect-[4/5] overflow-hidden border border-[#E8E0D4]">
                      <Image src={src} alt={story.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              );
            }

            if (frame.type === "portrait") {
              return (
                <div key={`${story.slug}-portrait-${index}`} className="mx-auto max-w-3xl">
                  <div className="relative aspect-[4/5] overflow-hidden border border-[#E8E0D4]">
                    <Image src={frame.src ?? story.coverImage} alt={frame.alt ?? story.alt} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" />
                  </div>
                </div>
              );
            }

            return (
              <div key={`${story.slug}-full-${index}`} className="overflow-hidden border border-[#E8E0D4] bg-[#F5F1EA]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
                  <Image src={frame.src ?? story.coverImage} alt={frame.alt ?? story.alt} fill sizes="100vw" className="object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
