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

interface EditForm {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

export function MenuAdmin({ initialItems }: { initialItems: MenuItem[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({ nombre: "", descripcion: "", precio: "", imagen: "" });
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function handleCreate() {
    if (!nombre || !precio) return;
    await fetch("/api/admin/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio: parseFloat(precio), descripcion }),
    });
    setShowForm(false);
    setNombre("");
    setPrecio("");
    setDescripcion("");
    router.refresh();
  }

  function startEdit(item: MenuItem) {
    setEditingId(item.id);
    setEditForm({
      nombre: item.nombre,
      descripcion: item.descripcion ?? "",
      precio: (item.precio / 100).toFixed(2),
      imagen: item.imagen ?? "",
    });
  }

  async function saveEdit() {
    if (!editingId || !editForm.nombre || !editForm.precio) return;
    await fetch("/api/admin/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        nombre: editForm.nombre,
        descripcion: editForm.descripcion || null,
        precio: Math.round(parseFloat(editForm.precio) * 100),
        imagen: editForm.imagen || null,
      }),
    });
    setEditingId(null);
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

  const inputClass = "w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";

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
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Precio (€)</label>
              <input type="number" step="0.10" value={precio} onChange={(e) => setPrecio(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Descripción</label>
              <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className={inputClass} />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleCreate} className="bg-dorado text-negro px-4 py-2 rounded text-sm font-medium hover:bg-dorado-dark transition-colors">
              Crear
            </button>
            <button onClick={() => setShowForm(false)} className="text-gris-light hover:text-white px-4 py-2 text-sm transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editingId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-negro-light rounded-xl border border-dorado/30 p-6 w-full max-w-lg space-y-4">
            <h3 className="font-display text-xl text-dorado">Editar plato</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gris-light mb-1">Nombre</label>
                <input
                  type="text"
                  value={editForm.nombre}
                  onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Descripción</label>
                <textarea
                  rows={3}
                  value={editForm.descripcion}
                  onChange={(e) => setEditForm({ ...editForm, descripcion: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gris-light mb-1">Precio (€)</label>
                  <input
                    type="number"
                    step="0.10"
                    value={editForm.precio}
                    onChange={(e) => setEditForm({ ...editForm, precio: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gris-light mb-1">URL Imagen</label>
                  <input
                    type="text"
                    value={editForm.imagen}
                    onChange={(e) => setEditForm({ ...editForm, imagen: e.target.value })}
                    className={inputClass}
                    placeholder="/images/menu/..."
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={saveEdit}
                className="bg-dorado text-negro px-4 py-2 rounded text-sm font-medium hover:bg-dorado-dark transition-colors"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="text-gris-light hover:text-white px-4 py-2 text-sm transition-colors"
              >
                Cancelar
              </button>
            </div>
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
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(item)}
                        className="text-dorado hover:text-dorado-dark text-xs underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => toggleDisponible(item.id, item.disponible ?? true)}
                        className="text-blue-400 hover:text-blue-300 text-xs underline"
                      >
                        {item.disponible ? "Desactivar" : "Activar"}
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-400 hover:text-red-300 text-xs underline"
                      >
                        Eliminar
                      </button>
                    </div>
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
