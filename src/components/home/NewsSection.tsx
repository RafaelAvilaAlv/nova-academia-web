'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section
      id="noticias"
      className="scroll-mt-28 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
    >
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
          Noticias
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl"
        >
          Últimas novedades y eventos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base leading-8 text-[#355070] sm:text-lg"
        >
          Mantente informado sobre nuestras actividades académicas, eventos
          institucionales y logros de la comunidad educativa.
        </motion.p>
      </motion.div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {news.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-[2rem] bg-white shadow-md"
          >
            {/* IMAGEN */}
            <div className="relative h-52 w-full sm:h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-[#1E3A5F]">
                {item.title}
              </h3>

              <p className="leading-7 text-[#355070]">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}