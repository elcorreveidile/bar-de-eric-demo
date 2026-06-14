"use client";

import { useState } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

const demoItems: CartItem[] = [];

export function CarritoContent() {
  const [items, setItems] = useState<CartItem[]>(demoItems);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [horaRecogida, setHoraRecogida] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [loading, setLoading] = useState(false);
  const [referencia, setReferencia] = useState("");
  const [error, setError] = useState("");

  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  function updateCantidad(id: number, delta: number) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + delta } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  async function handleSubmit() {
    if (!nombre || !telefono || !horaRecogida) {
      setError("Completa tu nombre, teléfono y hora de recogida.");
      return;
    }
    if (items.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clienteNombre: nombre,
          clienteTelefono: telefono,
          items: items.map((i) => ({ menuItemId: i.id, cantidad: i.cantidad })),
          observaciones: observaciones || undefined,
          horaRecogida,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Error al enviar");
      setReferencia(data.pedido.numeroReferencia);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setLoading(false);
    }
  }

  if (referencia) {
    return (
      <div className="bg-negro-light border border-dorado/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-900/30 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-dorado mb-2">
          ¡Pedido confirmado!
        </h2>
        <p className="text-gris-light mb-4">
          Tu número de referencia es:
        </p>
        <p className="text-dorado font-mono text-2xl font-bold">{referencia}</p>
        <p className="text-gris-light text-sm mt-4">
          Recógelo a las {horaRecogida} en el bar.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {items.length === 0 ? (
        <div className="bg-negro-light border border-gris-light/20 rounded-xl p-12 text-center">
          <p className="text-gris-light text-lg mb-2">Tu carrito está vacío</p>
          <p className="text-gris-light/60 text-sm">
            Explora nuestro menú y añade platos para llevar.
          </p>
          <Link
            href="/menu"
            className="inline-block mt-6 px-6 py-2 bg-rojo text-dorado rounded-lg hover:bg-rojo/80 transition-colors"
          >
            Ver menú
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-negro-light border border-gris-light/20 rounded-xl divide-y divide-gris-light/10">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-white font-medium">{item.nombre}</p>
                  <p className="text-gris-light text-sm">
                    {(item.precio / 100).toFixed(2).replace(".", ",")} €
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateCantidad(item.id, -1)}
                    className="w-8 h-8 rounded bg-negro border border-gris-light/30 text-gris-light hover:text-dorado hover:border-dorado transition-colors"
                  >
                    −
                  </button>
                  <span className="text-white w-6 text-center">{item.cantidad}</span>
                  <button
                    onClick={() => updateCantidad(item.id, 1)}
                    className="w-8 h-8 rounded bg-negro border border-gris-light/30 text-gris-light hover:text-dorado hover:border-dorado transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center py-4 border-t border-dorado/20">
            <span className="text-lg text-gris-light">Total</span>
            <span className="text-2xl font-bold text-dorado">
              {(total / 100).toFixed(2).replace(".", ",")} €
            </span>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cart-nombre" className="block text-sm text-gris-light mb-2">
                  Nombre *
                </label>
                <input
                  id="cart-nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-negro border border-gris-light/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="cart-telefono" className="block text-sm text-gris-light mb-2">
                  Teléfono *
                </label>
                <input
                  id="cart-telefono"
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+34 600 000 000"
                  className="w-full px-4 py-3 bg-negro border border-gris-light/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cart-hora" className="block text-sm text-gris-light mb-2">
                Hora de recogida *
              </label>
              <input
                id="cart-hora"
                type="time"
                required
                value={horaRecogida}
                onChange={(e) => setHoraRecogida(e.target.value)}
                className="w-full px-4 py-3 bg-negro border border-gris-light/30 rounded-lg text-white focus:border-dorado focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="cart-obs" className="block text-sm text-gris-light mb-2">
                Observaciones
              </label>
              <textarea
                id="cart-obs"
                rows={2}
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                placeholder="Alergias, peticiones especiales..."
                className="w-full px-4 py-3 bg-negro border border-gris-light/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 bg-rojo text-dorado font-semibold rounded-lg hover:bg-rojo/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {loading ? "Enviando pedido..." : "Confirmar pedido"}
          </button>
        </>
      )}
    </div>
  );
}
