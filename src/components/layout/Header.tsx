"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Programas", href: "/programas" },
  { label: "Admisiones", href: "/admisiones" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c7b4] bg-[#F5EFE6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <Link
            href="/"
            className="block rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
          >
            <h1 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
              Nova Academia
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9895B] sm:text-xs">
              Experiencia educativa
            </p>
          </Link>
        </div>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#1E3A5F]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-md transition duration-200 hover:text-[#C9895B] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/admisiones"
          className="hidden rounded-full border border-[#1E3A5F] px-5 py-2 text-sm font-semibold text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] md:inline-flex"
        >
          Aplicar ahora
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1E3A5F] text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] md:hidden"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#d8c7b4] bg-[#F5EFE6] px-4 py-4 md:hidden"
        >
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col gap-4 text-base font-medium text-[#1E3A5F]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-2 transition hover:bg-[#e9dfd2] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/admisiones"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex rounded-full border border-[#1E3A5F] px-5 py-2 text-sm font-semibold text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
          >
            Aplicar ahora
          </Link>
        </div>
      )}
    </header>
  );
}