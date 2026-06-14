"use client";

import { useState, useEffect } from "react";

type EstadoPedido = "pendiente" | "preparando" | "listo" | "recogido";

interface Pedido {
  id: number;
  numeroReferencia: string;
  clienteNombre: string;
  clienteTelefono: string | null;
  fechaHora: string | null;
  total: number;
  estado: string | null;
  observaciones: string | null;
}

const nextEstado: Record<EstadoPedido, EstadoPedido | null> = {
  pendiente: "preparando",
  preparando: "listo",
  listo: "recogido",
  recogido: null,
};

const estadoBadge: Record<EstadoPedido, string> = {
  pendiente: "bg-yellow-900/50 text-yellow-400",
  preparando: "bg-blue-900/50 text-blue-400",
  listo: "bg-green-900/50 text-green-400",
  recogido: "bg-gray-800/50 text-gray-400",
};

const estadoAction: Record<EstadoPedido, string> = {
  pendiente: "Preparar",
  preparando: "Marcar listo",
  listo: "Marcar recogido",
  recogido: "",
};

export function PedidosTable() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/pedidos")
      .then((r) => r.json())
      .then(setPedidos)
      .finally(() => setLoading(false));
  }, []);

  async function advanceEstado(id: number, currentEstado: EstadoPedido) {
    const next = nextEstado[currentEstado];
    if (!next) return;
    await fetch("/api/admin/pedidos", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: String(id), estado: next }),
    });
    setPedidos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, estado: next } : p))
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-2 border-dorado/30 border-t-dorado rounded-full animate-spin" />
      </div>
    );
  }

  if (pedidos.length === 0) {
    return (
      <div className="bg-negro-light rounded-lg border border-dorado/20 p-8 text-center">
        <p className="text-gris-light">No hay pedidos todavía.</p>
      </div>
    );
  }

  return (
    <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dorado/20 text-left">
            <th className="px-4 py-3 text-dorado font-medium">Referencia</th>
            <th className="px-4 py-3 text-dorado font-medium">Cliente</th>
            <th className="px-4 py-3 text-dorado font-medium">Teléfono</th>
            <th className="px-4 py-3 text-dorado font-medium">Total</th>
            <th className="px-4 py-3 text-dorado font-medium">Estado</th>
            <th className="px-4 py-3 text-dorado font-medium">Fecha</th>
            <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p) => {
            const estado = (p.estado ?? "pendiente") as EstadoPedido;
            return (
              <tr key={p.id} className="border-b border-dorado/10">
                <td className="px-4 py-3 text-white font-mono">{p.numeroReferencia}</td>
                <td className="px-4 py-3 text-white">{p.clienteNombre}</td>
                <td className="px-4 py-3 text-gris-light">{p.clienteTelefono ?? "-"}</td>
                <td className="px-4 py-3 text-white">{(p.total / 100).toFixed(2)} €</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs ${
                      estadoBadge[estado] ?? estadoBadge.pendiente
                    }`}
                  >
                    {estado}
                  </span>
                </td>
                <td className="px-4 py-3 text-gris-light">
                  {p.fechaHora ? new Date(p.fechaHora).toLocaleString("es-ES") : "-"}
                </td>
                <td className="px-4 py-3">
                  {nextEstado[estado] && (
                    <button
                      onClick={() => advanceEstado(p.id, estado)}
                      className="text-dorado hover:text-dorado-dark text-xs underline"
                    >
                      {estadoAction[estado]}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
