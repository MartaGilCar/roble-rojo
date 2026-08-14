import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PhotoGallery />
      <Philosophy />
      {/* <PortfolioGrid /> */}
      {/* <ReservationSection /> */}
      {/* <Testimonials /> */}
      <Cta />
      <Footer />
    </main>
  );
}
