"use client";

import { useState } from "react";
import { productos, categoriasTienda } from "@/lib/productos-tienda";
import { ProductoCard } from "./ProductoCard";
import { CarritoTienda } from "./CarritoTienda";
import { useCarrito } from "@/context/CarritoContext";

export function TiendaGrid() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todos");
  const { totalItems } = useCarrito();

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter(
          (p) => p.categoria === categoriaActiva.toLowerCase()
        );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categoriasTienda.map((cat) => (
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
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>

      {totalItems > 0 && <CarritoTienda />}
    </div>
  );
}
