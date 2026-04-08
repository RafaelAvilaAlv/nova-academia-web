import Image from "next/image";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section
      id="noticias"
      className="scroll-mt-28 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
    >
      {/* HEADER */}
      <div className="mb-12 max-w-2xl md:mb-14 animate-slideUp">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm animate-fadeIn">
          Noticias
        </p>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl animate-slideUp animate-delay-1">
          Últimas novedades y eventos
        </h2>

        <p className="text-base leading-8 text-[#355070] sm:text-lg animate-slideUp animate-delay-2">
          Mantente informado sobre nuestras actividades académicas, eventos
          institucionales y logros de la comunidad educativa.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {news.map((item, index) => (
          <article
            key={item.title}
            className={`overflow-hidden rounded-[2rem] bg-white shadow-md hover-scale animate-slideUp ${
              index === 0
                ? "animate-delay-1"
                : index === 1
                ? "animate-delay-2"
                : "animate-delay-3"
            }`}
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
          </article>
        ))}
      </div>
    </section>
  );
}