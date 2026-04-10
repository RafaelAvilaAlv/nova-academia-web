'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AdmissionsSection() {
  return (
    <section
      id="admisiones"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[2rem] shadow-xl md:grid md:grid-cols-2"
      >

        {/* IMAGEN IZQUIERDA */}
        <div className="relative h-[320px] md:h-full">
          <Image
            src="/images/admisiones1.png"
            alt="Estudiantes Nova Academia"
            fill
            priority
            className="object-cover"
          />

          {/* overlay oscuro elegante */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CONTENIDO DERECHO */}
        <div className="bg-gradient-to-br from-[#C9895B] to-[#b97745] px-6 py-10 text-white md:px-16 md:py-14 flex flex-col justify-center">

          {/* HEADER */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm"
          >
            Admisiones
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold leading-tight md:text-5xl"
          >
            Inicia tu proceso de admisión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8 text-base leading-8 text-white/90 sm:text-lg"
          >
            Te acompañamos en cada paso para que formes parte de una comunidad
            educativa enfocada en la excelencia, el desarrollo humano y la
            preparación para el futuro.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#C9895B] shadow-md"
            >
              Solicitar información
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#programas"
              className="rounded-full border border-white px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white hover:text-[#C9895B] transition"
            >
              Ver oferta académica
            </motion.a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}