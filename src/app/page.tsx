// import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { PhotoGallery } from "@/components/sections/photo-gallery";
// import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ReservationSection } from "@/components/sections/reservation";
// import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PhotoGallery />
      <Philosophy />
      {/* <PortfolioGrid /> */}
      <ReservationSection />
      {/* <Testimonials /> */}
      {/* <Cta /> */}
      <Footer />
    </main>
  );
}
