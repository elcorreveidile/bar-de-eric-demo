"use client";

import { useState } from "react";
import { TapaCard } from "@/components/menu/TapaCard";

interface MenuItem {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string | null;
  precio: number;
  imagen: string | null;
  categoria: string;
}

interface Props {
  categorias: string[];
  items: MenuItem[];
}

export function MenuCategories({ categorias, items }: Props) {
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0] ?? "");

  const itemsFiltrados = items.filter(
    (item) => item.categoria === categoriaActiva
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              categoriaActiva === cat
                ? "bg-dorado text-negro"
                : "bg-negro-light text-gris-light hover:text-dorado border border-gris/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsFiltrados.map((item) => (
          <TapaCard
            key={item.slug}
            nombre={item.nombre}
            descripcion={item.descripcion ?? ""}
            precio={item.precio}
            slug={item.slug}
            imagen={item.imagen ?? undefined}
          />
        ))}
      </div>

      {itemsFiltrados.length === 0 && (
        <p className="text-center text-gris-light py-12">
          No hay items en esta categoría.
        </p>
      )}
    </div>
  );
}
