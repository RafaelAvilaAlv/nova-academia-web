export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1E3A5F] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold">Nova Academia</h3>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/70">
            Experiencia educativa
          </p>
          <p className="mt-4 max-w-sm leading-7 text-white/80">
            Formación académica, humana y ética en un entorno moderno,
            inspirador y orientado al futuro.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Navegación</h4>
          <ul className="space-y-3 text-white/80">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
            <li><a href="#programas" className="hover:text-white">Programas</a></li>
            <li><a href="#admisiones" className="hover:text-white">Admisiones</a></li>
            <li><a href="#noticias" className="hover:text-white">Noticias</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Contacto</h4>
          <div className="space-y-3 text-white/80">
            <p>Cuenca, Ecuador</p>
            <p>info@novaacademia.edu</p>
            <p>+593 95 863 5351</p>
            <p>Lun - Vie: 08:00 a 17:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/60">
        © 2026 Nova Academia. Todos los derechos reservados.
      </div>
    </footer>
  );
}