import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
          Contacto
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-6xl">
          Estamos para ayudarte
        </h1>

        <p className="max-w-3xl text-base leading-8 text-[#355070] sm:text-lg">
          Si deseas más información sobre nuestra oferta académica, procesos de
          admisión o servicios institucionales, no dudes en contactarnos. Nuestro
          equipo estará encantado de ayudarte.
        </p>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}