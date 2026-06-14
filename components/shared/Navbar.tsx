"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/museo", label: "Museo" },
  { href: "/menu", label: "Menú" },
  { href: "/programacion", label: "Programación" },
  { href: "/guia-rockera", label: "Guía Rockera" },
  { href: "/reservas", label: "Reservas" },
  { href: "/sobre-eric", label: "Sobre Eric" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-negro/90 backdrop-blur-md border-b border-dorado/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo — PLACEHOLDER: reemplazar por logo real en preproducción */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="h-9 w-9 rounded-md bg-center bg-contain bg-no-repeat shrink-0"
            style={{ backgroundImage: "url('/images/logo/logo-square.svg')" }}
            aria-hidden="true"
          />
          <span className="font-display text-2xl font-bold text-dorado tracking-wide group-hover:text-dorado-dark transition-colors">
            El Bar de Eric
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gris-light hover:text-dorado transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-gris-light hover:text-dorado transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-out menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div className="absolute right-0 top-0 h-full w-64 bg-negro-light border-l border-dorado/20 p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg text-gris-light hover:text-dorado transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
