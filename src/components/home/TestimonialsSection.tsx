import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      
      {/* HEADER */}
      <div className="mb-12 max-w-2xl md:mb-14 animate-slideUp">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm animate-fadeIn">
          Testimonios
        </p>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl animate-slideUp animate-delay-1">
          Historias que reflejan nuestra experiencia educativa
        </h2>

        <p className="text-base leading-8 text-[#355070] sm:text-lg animate-slideUp animate-delay-2">
          Conoce algunas opiniones de estudiantes, familias y exalumnos que han
          sido parte de nuestra comunidad.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((item, index) => (
          <article
            key={item.name}
            className={`rounded-[2rem] bg-white p-6 shadow-md md:p-8 hover-scale animate-slideUp ${
              index === 0
                ? "animate-delay-1"
                : index === 1
                ? "animate-delay-2"
                : "animate-delay-3"
            }`}
          >
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
          </article>
        ))}
      </div>

    </section>
  );
}