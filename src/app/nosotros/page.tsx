import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/home/AboutSection";
import CampusSection from "@/components/home/CampusSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
          Nosotros
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-6xl">
          Conoce nuestra identidad educativa
        </h1>

        <p className="max-w-3xl text-base leading-8 text-[#355070] sm:text-lg">
          En Nova Academia creemos en una formación integral que combina
          excelencia académica, innovación pedagógica, valores humanos y un
          acompañamiento constante en cada etapa del aprendizaje.
        </p>
      </section>

      <AboutSection />
      <CampusSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}