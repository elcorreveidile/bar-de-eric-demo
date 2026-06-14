"use client";

import { useState } from "react";
import { productos } from "@/lib/productos-tienda";

interface Props {
  carrito: Map<string, number>;
  onQuitar: (id: string) => void;
}

export function CarritoTienda({ carrito, onQuitar }: Props) {
  const [loading, setLoading] = useState(false);

  const items = Array.from(carrito.entries()).map(([id, cantidad]) => ({
    producto: productos.find((p) => p.id === id)!,
    cantidad,
  }));

  const total = items.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );

  const totalFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(total / 100);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.producto.id, cantidad: i.cantidad })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-negro border-t border-ambar/30 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          {items.map((item) => (
            <div
              key={item.producto.id}
              className="flex items-center gap-2 bg-negro-light px-3 py-1.5 rounded-full border border-gris/30 shrink-0"
            >
              <span className="text-white text-sm">
                {item.cantidad}x {item.producto.nombre.split(" ").slice(0, 2).join(" ")}
              </span>
              <button
                onClick={() => onQuitar(item.producto.id)}
                className="text-gris-light hover:text-rojo text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="text-dorado font-bold text-lg">{totalFormateado}</span>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-rojo hover:bg-rojo/80 disabled:opacity-50 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            {loading ? "Procesando..." : "Pagar"}
          </button>
        </div>
      </div>
    </div>
  );
}
