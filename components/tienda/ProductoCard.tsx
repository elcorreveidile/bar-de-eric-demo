"use client";

import type { Producto } from "@/lib/productos-tienda";
import { useCarrito } from "@/context/CarritoContext";

export function ProductoCard({ producto }: { producto: Producto }) {
  const { items, agregar, quitar } = useCarrito();
  const cantidad = items.get(producto.id) || 0;

  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(producto.precio / 100);

  return (
    <div className="bg-negro rounded-xl overflow-hidden border border-ambar/15 hover:border-ambar/35 transition-colors flex flex-col">
      <div
        className="aspect-square bg-negro-light"
        style={{
          backgroundImage: `url('${producto.imagen}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="sr-only">{producto.nombre}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-bold text-white leading-tight">
            {producto.nombre}
          </h3>
          <span className="text-ambar font-bold text-lg shrink-0 ml-2">
            {precioFormateado}
          </span>
        </div>

        <p className="text-gris-light text-sm leading-relaxed flex-1">
          {producto.descripcion}
        </p>

        <div className="mt-4">
          {cantidad === 0 ? (
            <button
              onClick={() => agregar(producto.id)}
              className="w-full bg-rojo hover:bg-rojo/80 text-white font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              Añadir al carrito
            </button>
          ) : (
            <div className="flex items-center justify-between bg-negro-light rounded-lg px-4 py-2 border border-gris/30">
              <button
                onClick={() => quitar(producto.id)}
                className="text-dorado hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center"
              >
                −
              </button>
              <span className="text-white font-medium">{cantidad}</span>
              <button
                onClick={() => agregar(producto.id)}
                className="text-dorado hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
