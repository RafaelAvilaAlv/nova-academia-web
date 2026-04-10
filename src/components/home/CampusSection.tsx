'use client';

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const campusImages = [
  "/images/Campus.png",
  "/images/Escuela.png",
  "/images/Clases.png",
];

export default function CampusSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? campusImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === campusImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#d9c6b0]/20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl md:mb-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm"
          >
            Campus e instalaciones
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl"
          >
            Espacios diseñados para aprender e inspirar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base leading-8 text-[#355070] sm:text-lg"
          >
            Nuestro campus integra ambientes modernos, seguros y estimulantes
            para el desarrollo académico, social y humano de cada estudiante.
          </motion.p>
        </motion.div>

        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-4 shadow-md md:p-6"
        >
          <div className="relative overflow-hidden rounded-[2rem]">

            <div className="relative h-[260px] w-full sm:h-[360px] md:h-[480px]">
              
              {/* ANIMACIÓN DE IMAGEN */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={campusImages[currentIndex]}
                    alt={`Instalación ${currentIndex + 1} de Nova Academia`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTONES */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-[#1E3A5F] shadow"
            >
              ←
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goNext}
              aria-label="Siguiente imagen"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-[#1E3A5F] shadow"
            >
              →
            </motion.button>
          </div>

          {/* INDICADORES */}
          <div className="mt-4 flex justify-center gap-3">
            {campusImages.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === index
                    ? "bg-[#1E3A5F]"
                    : "bg-[#C9895B]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}