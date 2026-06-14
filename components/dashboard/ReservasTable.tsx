"use client";

import { useState } from "react";

type Estado = "pendiente" | "confirmada" | "cancelada";

interface Reserva {
  id: string;
  nombre: string;
  email: string;
  fecha: string;
  hora: string;
  comensales: number;
  mesa: number;
  estado: Estado;
}

const reservas: Reserva[] = [
  { id: "1", nombre: "Carlos Ruiz", email: "carlos@email.com", fecha: "2026-06-14", hora: "20:30", comensales: 4, mesa: 3, estado: "pendiente" },
  { id: "2", nombre: "Ana García", email: "ana@email.com", fecha: "2026-06-14", hora: "21:00", comensales: 2, mesa: 1, estado: "confirmada" },
  { id: "3", nombre: "Pedro López", email: "pedro@email.com", fecha: "2026-06-14", hora: "21:30", comensales: 6, mesa: 4, estado: "pendiente" },
  { id: "4", nombre: "María Fernández", email: "maria@email.com", fecha: "2026-06-15", hora: "20:00", comensales: 3, mesa: 2, estado: "cancelada" },
  { id: "5", nombre: "Javier Moreno", email: "javier@email.com", fecha: "2026-06-15", hora: "21:00", comensales: 2, mesa: 5, estado: "confirmada" },
];

const estadoBadge: Record<Estado, string> = {
  pendiente: "bg-yellow-900/50 text-yellow-400",
  confirmada: "bg-green-900/50 text-green-400",
  cancelada: "bg-red-900/50 text-red-400",
};

const tabs: { label: string; value: Estado | "todas" }[] = [
  { label: "Todas", value: "todas" },
  { label: "Pendientes", value: "pendiente" },
  { label: "Confirmadas", value: "confirmada" },
  { label: "Canceladas", value: "cancelada" },
];

export function ReservasTable() {
  const [filtroEstado, setFiltroEstado] = useState<Estado | "todas">("todas");
  const [filtroFecha, setFiltroFecha] = useState("");

  const filtered = reservas.filter((r) => {
    if (filtroEstado !== "todas" && r.estado !== filtroEstado) return false;
    if (filtroFecha && r.fecha !== filtroFecha) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFiltroEstado(tab.value)}
              className={`px-3 py-1.5 rounded text-xs transition-colors ${
                filtroEstado === tab.value
                  ? "bg-dorado text-negro"
                  : "bg-negro-light text-gris-light hover:text-dorado"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <input
          type="date"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
          className="bg-negro border border-dorado/30 rounded px-3 py-1.5 text-white text-sm focus:border-dorado focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dorado/20 text-left">
              <th className="px-4 py-3 text-dorado font-medium">Nombre</th>
              <th className="px-4 py-3 text-dorado font-medium">Email</th>
              <th className="px-4 py-3 text-dorado font-medium">Fecha</th>
              <th className="px-4 py-3 text-dorado font-medium">Hora</th>
              <th className="px-4 py-3 text-dorado font-medium">Comensales</th>
              <th className="px-4 py-3 text-dorado font-medium">Mesa</th>
              <th className="px-4 py-3 text-dorado font-medium">Estado</th>
              <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-dorado/10">
                <td className="px-4 py-3 text-white">{r.nombre}</td>
                <td className="px-4 py-3 text-gris-light">{r.email}</td>
                <td className="px-4 py-3 text-gris-light">{r.fecha}</td>
                <td className="px-4 py-3 text-gris-light">{r.hora}</td>
                <td className="px-4 py-3 text-white">{r.comensales}</td>
                <td className="px-4 py-3 text-white">{r.mesa}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs ${estadoBadge[r.estado]}`}
                  >
                    {r.estado}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {r.estado === "pendiente" && (
                      <button className="text-green-400 hover:text-green-300 text-xs underline">
                        Confirmar
                      </button>
                    )}
                    {r.estado !== "cancelada" && (
                      <button className="text-red-400 hover:text-red-300 text-xs underline">
                        Cancelar
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-6 text-center text-gris-light">
                  No hay reservas que mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
