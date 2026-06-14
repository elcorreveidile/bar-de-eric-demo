"use client";

import { useState } from "react";

type EstadoPedido = "pendiente" | "preparando" | "listo" | "recogido";

interface Pedido {
  id: string;
  referencia: string;
  cliente: string;
  telefono: string;
  total: number;
  estado: EstadoPedido;
  hora: string;
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

const initialPedidos: Pedido[] = [
  { id: "1", referencia: "P-0042", cliente: "Mesa 3", telefono: "-", total: 18.5, estado: "pendiente", hora: "14:30" },
  { id: "2", referencia: "P-0043", cliente: "Carlos Ruiz", telefono: "600123456", total: 12.0, estado: "preparando", hora: "14:35" },
  { id: "3", referencia: "P-0044", cliente: "Mesa 7", telefono: "-", total: 25.0, estado: "listo", hora: "14:10" },
  { id: "4", referencia: "P-0045", cliente: "Ana García", telefono: "600654321", total: 9.5, estado: "recogido", hora: "13:50" },
];

export function PedidosTable() {
  const [pedidos, setPedidos] = useState<Pedido[]>(initialPedidos);

  const advanceEstado = (id: string) => {
    setPedidos((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const next = nextEstado[p.estado];
        return next ? { ...p, estado: next } : p;
      })
    );
  };

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
            <th className="px-4 py-3 text-dorado font-medium">Hora</th>
            <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p) => (
            <tr key={p.id} className="border-b border-dorado/10">
              <td className="px-4 py-3 text-white font-mono">{p.referencia}</td>
              <td className="px-4 py-3 text-white">{p.cliente}</td>
              <td className="px-4 py-3 text-gris-light">{p.telefono}</td>
              <td className="px-4 py-3 text-white">{p.total.toFixed(2)} €</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs ${estadoBadge[p.estado]}`}
                >
                  {p.estado}
                </span>
              </td>
              <td className="px-4 py-3 text-gris-light">{p.hora}</td>
              <td className="px-4 py-3">
                {nextEstado[p.estado] && (
                  <button
                    onClick={() => advanceEstado(p.id)}
                    className="text-dorado hover:text-dorado-dark text-xs underline"
                  >
                    {estadoAction[p.estado]}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
