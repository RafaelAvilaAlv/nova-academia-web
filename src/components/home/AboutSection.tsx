'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-28 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24"
    >
      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex items-center"
      >
        <div className="relative h-[260px] w-full sm:h-[340px] md:h-[420px]">
          <Image
            src="/images/Campus.png"
            alt="Campus de Nova Academia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-[2rem] object-cover shadow-lg"
          />
        </div>
      </motion.div>

      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm"
        >
          Nosotros
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl"
        >
          Una experiencia educativa integral
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-base leading-8 text-[#355070] sm:text-lg"
        >
          En Nova Academia creemos en una educación que forma no solo en lo
          académico, sino también en valores, liderazgo, creatividad y
          compromiso social.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base leading-8 text-[#355070] sm:text-lg"
        >
          Nuestro enfoque combina excelencia académica, innovación pedagógica y
          acompañamiento constante para que cada estudiante alcance su máximo
          potencial.
        </motion.p>
      </motion.div>
    </section>
  );
}