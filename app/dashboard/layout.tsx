"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/dashboard/menu", label: "Menú", icon: "🍽" },
  { href: "/dashboard/galeria", label: "Galería", icon: "🖼" },
  { href: "/dashboard/eventos", label: "Eventos", icon: "🎸" },
  { href: "/dashboard/mesas", label: "Mesas", icon: "🪑" },
  { href: "/dashboard/reservas", label: "Reservas", icon: "📅" },
  { href: "/dashboard/pedidos", label: "Pedidos", icon: "📦" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  return (
    <div className="min-h-screen flex flex-col bg-negro">
      {/* Top bar */}
      <header className="bg-negro-light border-b border-dorado/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-dorado text-2xl"
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <h1 className="font-display text-dorado text-lg md:text-xl">
            El Bar de Eric — Admin
          </h1>
        </div>
        <Link
          href="/api/auth/signout"
          className="text-sm text-gris-light hover:text-dorado transition-colors"
        >
          Cerrar sesión
        </Link>
      </header>

      <div className="flex flex-1">
        {/* Sidebar overlay on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-30
            w-56 bg-negro-light border-r border-dorado/20
            transform transition-transform duration-200
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            pt-16 lg:pt-0
          `}
        >
          <nav className="py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                  ${
                    isActive(item.href)
                      ? "text-dorado bg-dorado/10 border-r-2 border-dorado"
                      : "text-gris-light hover:text-dorado hover:bg-dorado/5"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
