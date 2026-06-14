"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface MenuItem {
  id: number;
  nombre: string;
  slug: string;
  categoryId: number | null;
  descripcion: string | null;
  precio: number;
  imagen: string | null;
  disponible: boolean | null;
  banda: string | null;
  orden: number | null;
  categoriaNombre: string | null;
}

export function MenuAdmin({ initialItems }: { initialItems: MenuItem[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function handleCreate() {
    if (!nombre || !precio) return;
    await fetch("/api/admin/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        precio: parseFloat(precio),
        descripcion,
      }),
    });
    setShowForm(false);
    setNombre("");
    setPrecio("");
    setDescripcion("");
    router.refresh();
  }

  async function toggleDisponible(id: number, disponible: boolean) {
    await fetch("/api/admin/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, disponible: !disponible }),
    });
    router.refresh();
  }

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar este plato?")) return;
    await fetch("/api/admin/menu", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión del Menú
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Nueva Tapa
        </button>
      </div>

      {showForm && (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gris-light mb-1">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Precio (€)</label>
              <input
                type="number"
                step="0.10"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Descripción</label>
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none"
              />
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

      {initialItems.length === 0 ? (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-8 text-center">
          <p className="text-gris-light">No hay items en el menú todavía.</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-dorado hover:text-dorado-dark text-sm underline mt-2"
          >
            Añade el primer plato
          </button>
        </div>
      ) : (
        <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dorado/20 text-left">
                <th className="px-4 py-3 text-dorado font-medium">Nombre</th>
                <th className="px-4 py-3 text-dorado font-medium">Categoría</th>
                <th className="px-4 py-3 text-dorado font-medium">Precio</th>
                <th className="px-4 py-3 text-dorado font-medium">Disponible</th>
                <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {initialItems.map((item) => (
                <tr key={item.id} className="border-b border-dorado/10">
                  <td className="px-4 py-3 text-white">{item.nombre}</td>
                  <td className="px-4 py-3 text-gris-light">{item.categoriaNombre ?? "Sin categoría"}</td>
                  <td className="px-4 py-3 text-white">{(item.precio / 100).toFixed(2)} €</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs ${
                        item.disponible
                          ? "bg-green-900/50 text-green-400"
                          : "bg-red-900/50 text-red-400"
                      }`}
                    >
                      {item.disponible ? "Sí" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => toggleDisponible(item.id, item.disponible ?? true)}
                      className="text-dorado hover:text-dorado-dark text-xs underline"
                    >
                      {item.disponible ? "Desactivar" : "Activar"}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 hover:text-red-300 text-xs underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
