"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/museo", label: "Museo" },
  { href: "/menu", label: "Menú" },
  { href: "/programacion", label: "Programación" },
  { href: "/guia-rockera", label: "Guía Rockera" },
  { href: "/tienda", label: "Tienda" },
  { href: "/reservas", label: "Reservas" },
  { href: "/sobre-eric", label: "Sobre Eric" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-negro/90 backdrop-blur-md border-b border-ambar/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo/logo-horizontal.png"
              alt="El Bar de Eric — Donde la música se hace tapa"
              className="h-10 sm:h-12 w-auto"
            />
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
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-[#1a0a0d] overflow-y-auto">
          <div className="px-6 py-8">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-dorado/20 last:border-b-0">
                  <Link
                    href={link.href}
                    className="block py-4 text-xl text-white font-medium hover:text-ambar transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-dorado/30">
              <Link
                href="/reservas"
                className="block w-full text-center py-3 rounded-lg bg-dorado text-white font-semibold text-lg hover:bg-dorado-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Reservar mesa
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
