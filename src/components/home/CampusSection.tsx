"use client";

import Image from "next/image";
import { useState } from "react";

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
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
            Campus e instalaciones
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl">
            Espacios diseñados para aprender e inspirar
          </h2>

          <p className="text-base leading-8 text-[#355070] sm:text-lg">
            Nuestro campus integra ambientes modernos, seguros y estimulantes
            para el desarrollo académico, social y humano de cada estudiante.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-4 shadow-md md:p-6">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[260px] w-full sm:h-[360px] md:h-[480px]">
              <Image
                src={campusImages[currentIndex]}
                alt={`Instalación ${currentIndex + 1} de Nova Academia`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-[#1E3A5F] shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente imagen"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-[#1E3A5F] shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            >
              →
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            {campusImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-pressed={currentIndex === index}
                className={`h-3 w-3 rounded-full transition ${currentIndex === index ? "bg-[#1E3A5F]" : "bg-[#C9895B]/40"
                  } focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}