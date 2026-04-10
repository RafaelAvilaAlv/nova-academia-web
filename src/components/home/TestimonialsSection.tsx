'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
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
          viewport={{ once: true }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm"
        >
          Testimonios
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl"
        >
          Historias que reflejan nuestra experiencia educativa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base leading-8 text-[#355070] sm:text-lg"
        >
          Conoce algunas opiniones de estudiantes, familias y exalumnos que han
          sido parte de nuestra comunidad.
        </motion.p>
      </motion.div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="rounded-[2rem] bg-white p-6 shadow-md md:p-8 text-center"
          >
            <div className="mb-5 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-[#C9895B]/15">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mb-6 leading-8 text-[#355070]">
              “{item.text}”
            </p>

            <div>
              <h3 className="text-xl font-bold text-[#1E3A5F]">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-[#C9895B]">
                {item.role}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}