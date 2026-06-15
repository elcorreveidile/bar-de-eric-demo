"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { productos } from "@/lib/productos-tienda";
import { useCarrito } from "@/context/CarritoContext";

export default function CarritoPage() {
  const router = useRouter();
  const { items, agregar, quitar, vaciar, totalItems } = useCarrito();

  const carritoItems = Array.from(items.entries())
    .map(([id, cantidad]) => ({
      producto: productos.find((p) => p.id === id)!,
      cantidad,
    }))
    .filter((c) => c.producto);

  const total = carritoItems.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );

  const totalFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(total / 100);

  if (totalItems === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <svg className="w-16 h-16 text-gris/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h1 className="font-display text-2xl font-bold text-dorado mb-2">
            Tu carrito está vacío
          </h1>
          <p className="text-gris-light mb-6">Añade productos desde la tienda</p>
          <Link
            href="/tienda"
            className="bg-rojo hover:bg-rojo/80 text-white font-medium px-6 py-2.5 rounded-lg transition-colors inline-block"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/tienda"
          className="text-dorado hover:text-dorado-dark transition-colors mb-6 inline-block text-sm"
        >
          ← Seguir comprando
        </Link>

        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Tu carrito
        </h1>

        <div className="space-y-4">
          {carritoItems.map((item) => {
            const subtotal = new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "EUR",
            }).format((item.producto.precio * item.cantidad) / 100);

            return (
              <div
                key={item.producto.id}
                className="bg-negro-light rounded-xl border border-gris/20 p-4 flex items-center gap-4"
              >
                <div
                  className="w-20 h-20 rounded-lg bg-negro shrink-0 bg-cover bg-center border border-gris/10"
                  style={{ backgroundImage: `url('${item.producto.imagen}')` }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{item.producto.nombre}</h3>
                  <p className="text-gris-light text-sm">
                    {new Intl.NumberFormat("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.producto.precio / 100)} / ud.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center bg-negro rounded-lg border border-gris/30">
                    <button
                      onClick={() => quitar(item.producto.id)}
                      className="text-dorado hover:text-white text-lg font-bold w-8 h-8 flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-white font-medium w-8 text-center">{item.cantidad}</span>
                    <button
                      onClick={() => agregar(item.producto.id)}
                      className="text-dorado hover:text-white text-lg font-bold w-8 h-8 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-white font-medium w-20 text-right">{subtotal}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-negro-light rounded-xl border border-dorado/20 p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gris-light">Total ({totalItems} {totalItems === 1 ? "artículo" : "artículos"})</span>
            <span className="text-dorado font-bold text-2xl">{totalFormateado}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/tienda/checkout")}
              className="flex-1 bg-rojo hover:bg-rojo/80 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Pagar
            </button>
            <button
              onClick={() => { if (confirm("¿Vaciar el carrito?")) vaciar(); }}
              className="text-gris-light hover:text-red-400 text-sm px-4 transition-colors"
            >
              Vaciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
