import { programs } from "@/data/programs";

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      className="bg-[#d9c6b0]/35 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl md:mb-14 animate-slideUp">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm animate-fadeIn">
            Programas académicos
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl animate-slideUp animate-delay-1">
            Formación para cada etapa del aprendizaje
          </h2>

          <p className="text-base leading-8 text-[#355070] sm:text-lg animate-slideUp animate-delay-2">
            Diseñamos programas educativos que acompañan el crecimiento de los
            estudiantes desde sus primeros pasos hasta su preparación para la
            vida universitaria.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className={`rounded-[2rem] bg-[#F5EFE6] p-6 shadow-md md:p-8 hover-scale animate-slideUp ${
                index === 0
                  ? "animate-delay-1"
                  : index === 1
                  ? "animate-delay-2"
                  : "animate-delay-3"
              }`}
            >
              <h3 className="mb-4 text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                {program.title}
              </h3>

              <p className="leading-7 text-[#355070]">
                {program.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}