export default function AdmissionsSection() {
  return (
    <section id="admisiones" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="rounded-[2rem] bg-[#C9895B] px-6 py-10 text-white md:px-16 md:py-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
          Admisiones
        </p>

        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
          Inicia tu proceso de admisión
        </h2>

        <p className="mb-8 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
          Te acompañamos en cada paso para que formes parte de una comunidad
          educativa enfocada en la excelencia, el desarrollo humano y la
          preparación para el futuro.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#C9895B] transition hover:opacity-90"
          >
            Solicitar información
          </a>

          <a
            href="#programas"
            className="rounded-full border border-white px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#C9895B]"
          >
            Ver oferta académica
          </a>
        </div>
      </div>
    </section>
  );
}