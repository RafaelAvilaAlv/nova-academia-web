import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsSection from "@/components/home/NewsSection";

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
          Noticias y eventos
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-6xl">
          Actualidad de nuestra comunidad
        </h1>

        <p className="max-w-3xl text-base leading-8 text-[#355070] sm:text-lg">
          Mantente informado sobre las actividades, logros y eventos más
          recientes de Nova Academia. Compartimos experiencias que reflejan el
          crecimiento académico, humano y social de nuestra comunidad educativa.
        </p>
      </section>

      <NewsSection />
      <Footer />
    </main>
  );
}
