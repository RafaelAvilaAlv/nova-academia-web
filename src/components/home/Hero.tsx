import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16">
      
      {/* TEXTO */}
      <div className="order-2 md:order-1 animate-slideUp">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm animate-fadeIn">
          Educación con excelencia
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl md:text-7xl animate-slideUp animate-delay-1">
          Formando líderes para el futuro
        </h2>

        <p className="mb-8 max-w-xl text-base leading-8 text-[#355070] sm:text-lg animate-slideUp animate-delay-2">
          Una institución educativa comprometida con la formación académica,
          humana y ética de sus estudiantes en un entorno moderno.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row animate-slideUp animate-delay-3">
          <a
            href="#programas"
            className="rounded-full bg-[#1E3A5F] px-6 py-3 text-center text-white hover-scale"
          >
            Ver programas
          </a>

          <a
            href="#nosotros"
            className="rounded-full border border-[#1E3A5F] px-6 py-3 text-center text-[#1E3A5F] hover-scale hover:bg-[#1E3A5F] hover:text-white"
          >
            Conócenos
          </a>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="order-1 flex justify-center md:order-2 md:justify-end animate-slideUp animate-delay-2">
        <div className="relative h-[260px] w-full max-w-md sm:h-[340px] md:h-[420px]">
          <Image
            src="/images/Escuela.png"
            alt="Edificio principal de Nova Academia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}