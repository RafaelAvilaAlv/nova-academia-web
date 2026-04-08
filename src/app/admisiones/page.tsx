import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdmissionsSection from "@/components/home/AdmissionsSection";

export default function AdmisionesPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
          Admisiones
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-6xl">
          Inicia tu proceso de admisión
        </h1>

        <p className="max-w-3xl text-base leading-8 text-[#355070] sm:text-lg">
          En Nova Academia te acompañamos en cada etapa del proceso de admisión
          para que formes parte de una comunidad educativa comprometida con la
          excelencia académica, el desarrollo humano y la formación integral.
        </p>
      </section>

      <AdmissionsSection />
      <Footer />
    </main>
  );
}