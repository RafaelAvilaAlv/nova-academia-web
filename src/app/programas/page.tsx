'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramsSection from "@/components/home/ProgramsSection";
import { motion } from "framer-motion";

export default function ProgramasPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm"
          >
            Oferta académica
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-6xl"
          >
            Programas académicos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl text-base leading-8 text-[#355070] sm:text-lg"
          >
            En Nova Academia ofrecemos una formación integral para cada etapa del
            aprendizaje, acompañando el desarrollo académico, humano y social de
            nuestros estudiantes en un entorno moderno, innovador y de excelencia.
          </motion.p>

        </div>

        {/* DECORACIÓN FONDO (OPCIONAL PERO PRO) */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#C9895B]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#1E3A5F]/10 blur-3xl"></div>
      </section>

      {/* PROGRAMAS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProgramsSection />
      </motion.div>

      <Footer />
    </main>
  );
}