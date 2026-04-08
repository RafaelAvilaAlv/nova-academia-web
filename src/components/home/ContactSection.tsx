export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="space-y-8">
        {/* BLOQUE PRINCIPAL */}
        <div className="grid gap-8 rounded-[2rem] bg-[#d9c6b0]/35 p-6 md:grid-cols-2 md:gap-10 md:p-12 animate-slideUp">
          {/* TEXTO */}
          <div className="animate-slideUp">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm animate-fadeIn">
              Contacto
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl animate-slideUp animate-delay-1">
              Estamos para ayudarte
            </h2>

            <p className="mb-6 text-base leading-8 text-[#355070] sm:text-lg animate-slideUp animate-delay-2">
              Si deseas más información sobre nuestra oferta académica, proceso
              de admisión o servicios institucionales, contáctanos.
            </p>

            <div className="space-y-3 text-[#355070] animate-slideUp animate-delay-3">
              <p>
                <strong>Dirección:</strong> Cuenca, Ecuador
              </p>
              <p>
                <strong>Email:</strong> info@novaacademia.edu
              </p>
              <p>
                <strong>Teléfono:</strong> +593 99 999 9999
              </p>
              <p>
                <strong>Horario:</strong> Lunes a Viernes de 08:00 a 17:00
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <form
            className="space-y-4 animate-slideUp animate-delay-2"
            aria-label="Formulario de contacto"
          >
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-[#1E3A5F]"
              >
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                placeholder="Ingresa tu nombre completo"
                className="w-full rounded-xl border border-[#c9b49b] bg-white px-4 py-3 outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="mb-2 block text-sm font-medium text-[#1E3A5F]"
              >
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="Ingresa tu correo electrónico"
                className="w-full rounded-xl border border-[#c9b49b] bg-white px-4 py-3 outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-[#1E3A5F]"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Escribe tu mensaje"
                className="w-full rounded-xl border border-[#c9b49b] bg-white px-4 py-3 outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#1E3A5F] px-6 py-3 font-semibold text-white hover-scale focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] sm:w-auto"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* MAPA */}
        <div className="overflow-hidden rounded-[2rem] border border-[#d8c7b4] shadow-md animate-slideUp animate-delay-3">
          <iframe
            title="Ubicación de Nova Academia en Cuenca, Ecuador"
            src="https://www.google.com/maps?q=Cuenca,Ecuador&z=14&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}