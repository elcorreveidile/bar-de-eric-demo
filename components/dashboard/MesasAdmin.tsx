"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Mesa {
  id: number;
  numero: number;
  capacidad: number;
  ubicacion: string | null;
  activa: boolean | null;
}

export function MesasAdmin({ initialMesas }: { initialMesas: Mesa[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [numero, setNumero] = useState("");
  const [capacidad, setCapacidad] = useState("4");
  const [ubicacion, setUbicacion] = useState("interior");

  async function handleCreate() {
    if (!numero || !capacidad) return;
    await fetch("/api/admin/mesas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numero: Number(numero),
        capacidad: Number(capacidad),
        ubicacion,
      }),
    });
    setShowForm(false);
    setNumero("");
    setCapacidad("4");
    router.refresh();
  }

  async function toggleActiva(id: number, activa: boolean) {
    await fetch("/api/admin/mesas", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, activa: !activa }),
    });
    router.refresh();
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión de Mesas
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Nueva Mesa
        </button>
      </div>

      {showForm && (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-4 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gris-light mb-1">Número</label>
              <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Capacidad</label>
              <input
                type="number"
                value={capacidad}
                onChange={(e) => setCapacidad(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Ubicación</label>
              <select
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              >
                <option value="interior">Interior</option>
                <option value="terraza">Terraza</option>
                <option value="barra">Barra</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              className="bg-dorado text-negro px-4 py-2 rounded text-sm font-medium hover:bg-dorado-dark transition-colors"
            >
              Crear
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="text-gris-light hover:text-white px-4 py-2 text-sm transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {initialMesas.length === 0 ? (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-8 text-center">
          <p className="text-gris-light">No hay mesas configuradas todavía.</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-dorado hover:text-dorado-dark text-sm underline mt-2"
          >
            Crea la primera mesa
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {initialMesas.map((mesa) => (
            <div
              key={mesa.id}
              className={`bg-negro-light rounded-lg border p-4 ${
                mesa.activa ? "border-dorado/20" : "border-red-900/50 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-dorado text-lg">
                  Mesa {mesa.numero}
                </span>
                <span
                  className={`w-3 h-3 rounded-full ${
                    mesa.activa ? "bg-green-400" : "bg-red-400"
                  }`}
                />
              </div>
              <p className="text-gris-light text-sm">
                Capacidad: {mesa.capacidad}
              </p>
              <p className="text-gris-light text-sm">
                Ubicación: {mesa.ubicacion}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gris-light">
                  {mesa.activa ? "Activa" : "Inactiva"}
                </span>
                <button
                  onClick={() => toggleActiva(mesa.id, mesa.activa ?? true)}
                  className="text-dorado hover:text-dorado-dark text-xs underline"
                >
                  {mesa.activa ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
