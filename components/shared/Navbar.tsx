"use client";

import { useState } from "react";
import Link from "next/link";
import { useCarrito } from "@/context/CarritoContext";

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
  const { totalItems } = useCarrito();

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
                  className="relative text-sm text-gris-light hover:text-dorado transition-colors"
                >
                  {link.label}
                  {link.href === "/tienda" && totalItems > 0 && (
                    <span className="absolute -top-2 -right-4 bg-rojo text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile cart + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            {totalItems > 0 && (
              <Link href="/tienda" className="relative text-gris-light hover:text-dorado transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-rojo text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            )}
          </div>
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
