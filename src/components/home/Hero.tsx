'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16">

      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="order-2 md:order-1"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm"
        >
          Educación con excelencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-7xl"
        >
          Formando líderes para el futuro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 max-w-xl text-base leading-8 text-[#355070] sm:text-lg"
        >
          Una institución educativa comprometida con la formación académica,
          humana y ética de sus estudiantes en un entorno moderno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#programas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#1E3A5F] px-6 py-3 text-center text-white"
          >
            Ver programas
          </motion.a>

          <motion.a
            href="#nosotros"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-[#1E3A5F] px-6 py-3 text-center text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
          >
            Conócenos
          </motion.a>
        </motion.div>
      </motion.div>

      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="order-1 flex justify-center md:order-2 md:justify-end"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative h-[260px] w-full max-w-md sm:h-[340px] md:h-[420px]"
        >
          <Image
            src="/images/Escuela.png"
            alt="Edificio principal de Nova Academia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-[2rem] object-cover shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}