'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { programs } from "@/data/programs";

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      className="bg-[#d9c6b0]/35 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl md:mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
            Programas académicos
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl">
            Formación para cada etapa del aprendizaje
          </h2>

          <p className="text-base leading-8 text-[#355070] sm:text-lg">
            Diseñamos programas educativos que acompañan el crecimiento de los
            estudiantes desde sus primeros pasos hasta su preparación para la
            vida universitaria.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-[2rem] bg-[#F5EFE6] shadow-md"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="mb-4 text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                  {program.title}
                </h3>

                <p className="leading-7 text-[#355070]">
                  {program.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}