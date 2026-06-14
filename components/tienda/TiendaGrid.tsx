"use client";

import { useState } from "react";
import { productos, categoriasTienda, type Producto } from "@/lib/productos-tienda";
import { ProductoCard } from "./ProductoCard";
import { CarritoTienda } from "./CarritoTienda";

export function TiendaGrid() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todos");
  const [carrito, setCarrito] = useState<Map<string, number>>(new Map());

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter(
          (p) => p.categoria === categoriaActiva.toLowerCase()
        );

  function agregarAlCarrito(producto: Producto) {
    setCarrito((prev) => {
      const next = new Map(prev);
      next.set(producto.id, (next.get(producto.id) || 0) + 1);
      return next;
    });
  }

  function quitarDelCarrito(productoId: string) {
    setCarrito((prev) => {
      const next = new Map(prev);
      const current = next.get(productoId) || 0;
      if (current <= 1) {
        next.delete(productoId);
      } else {
        next.set(productoId, current - 1);
      }
      return next;
    });
  }

  const totalItems = Array.from(carrito.values()).reduce((a, b) => a + b, 0);

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
          <ProductoCard
            key={producto.id}
            producto={producto}
            cantidad={carrito.get(producto.id) || 0}
            onAgregar={() => agregarAlCarrito(producto)}
            onQuitar={() => quitarDelCarrito(producto.id)}
          />
        ))}
      </div>

      {totalItems > 0 && (
        <CarritoTienda carrito={carrito} onQuitar={quitarDelCarrito} />
      )}
    </div>
  );
}
