"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface Evento {
  id: number;
  titulo: string;
  slug: string;
  tipo: string;
  descripcion: string | null;
  fecha: string;
  hora: string | null;
  artistaBanda: string | null;
  aforoMaximo: number | null;
  entradaLibre: boolean | null;
  precioEntrada: number | null;
  imagen: string | null;
  estado: string | null;
}

interface EditForm {
  titulo: string;
  tipo: string;
  fecha: string;
  hora: string;
  artistaBanda: string;
  imagen: string;
  estado: string;
}

const estadoBadge: Record<string, string> = {
  programado: "bg-green-900/50 text-green-400",
  borrador: "bg-yellow-900/50 text-yellow-400",
  cancelado: "bg-red-900/50 text-red-400",
};

const inputClass = "w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";

export function EventosAdmin({ initialEventos }: { initialEventos: Evento[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({ titulo: "", tipo: "concierto", fecha: "", hora: "", artistaBanda: "", imagen: "", estado: "programado" });
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("concierto");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [artistaBanda, setArtistaBanda] = useState("");
  const [imagen, setImagen] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setImagen(data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  async function handleEditFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setEditForm({ ...editForm, imagen: data.url });
      }
    } finally {
      setUploading(false);
    }
  }

  async function handleCreate() {
    if (!titulo || !fecha) return;
    await fetch("/api/admin/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, tipo, fecha, hora, artistaBanda, imagen: imagen || undefined }),
    });
    setShowForm(false);
    setTitulo("");
    setFecha("");
    setHora("");
    setArtistaBanda("");
    setImagen("");
    router.refresh();
  }

  function startEdit(ev: Evento) {
    setEditingId(ev.id);
    setEditForm({
      titulo: ev.titulo,
      tipo: ev.tipo,
      fecha: ev.fecha,
      hora: ev.hora ?? "",
      artistaBanda: ev.artistaBanda ?? "",
      imagen: ev.imagen ?? "",
      estado: ev.estado ?? "programado",
    });
  }

  async function saveEdit() {
    if (!editingId || !editForm.titulo || !editForm.fecha) return;
    await fetch("/api/admin/eventos", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        titulo: editForm.titulo,
        tipo: editForm.tipo,
        fecha: editForm.fecha,
        hora: editForm.hora || null,
        artistaBanda: editForm.artistaBanda || null,
        imagen: editForm.imagen || null,
        estado: editForm.estado,
      }),
    });
    setEditingId(null);
    router.refresh();
  }

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar este evento?")) return;
    await fetch("/api/admin/eventos", {
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
          Gestión de Eventos
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Nuevo Evento
        </button>
      </div>

      {showForm && (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gris-light mb-1">Título *</label>
              <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Tipo</label>
              <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={inputClass}>
                <option value="concierto">Concierto</option>
                <option value="exposicion">Exposición</option>
                <option value="guia">Guía Rockera</option>
                <option value="taller">Taller</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Fecha *</label>
              <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Hora</label>
              <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Artista / Banda</label>
              <input type="text" value={artistaBanda} onChange={(e) => setArtistaBanda(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-gris-light mb-1">Imagen</label>
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="bg-negro border border-dorado/30 text-dorado px-3 py-2 rounded text-xs hover:bg-dorado/10 transition-colors disabled:opacity-50"
                >
                  {uploading ? "Subiendo..." : imagen ? "✓ Imagen" : "Subir"}
                </button>
                {imagen && (
                  <div className="w-8 h-8 rounded bg-cover bg-center border border-gris/20" style={{ backgroundImage: `url('${imagen}')` }} />
                )}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleCreate} disabled={uploading} className="bg-dorado text-negro px-4 py-2 rounded text-sm font-medium hover:bg-dorado-dark transition-colors disabled:opacity-50">
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
          <div className="bg-negro-light rounded-xl border border-dorado/30 p-6 w-full max-w-lg space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-display text-xl text-dorado">Editar evento</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gris-light mb-1">Título *</label>
                <input
                  type="text"
                  value={editForm.titulo}
                  onChange={(e) => setEditForm({ ...editForm, titulo: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gris-light mb-1">Tipo</label>
                  <select
                    value={editForm.tipo}
                    onChange={(e) => setEditForm({ ...editForm, tipo: e.target.value })}
                    className={inputClass}
                  >
                    <option value="concierto">Concierto</option>
                    <option value="exposicion">Exposición</option>
                    <option value="guia">Guía Rockera</option>
                    <option value="taller">Taller</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gris-light mb-1">Estado</label>
                  <select
                    value={editForm.estado}
                    onChange={(e) => setEditForm({ ...editForm, estado: e.target.value })}
                    className={inputClass}
                  >
                    <option value="programado">Programado</option>
                    <option value="borrador">Borrador</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gris-light mb-1">Fecha *</label>
                  <input
                    type="date"
                    value={editForm.fecha}
                    onChange={(e) => setEditForm({ ...editForm, fecha: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gris-light mb-1">Hora</label>
                  <input
                    type="time"
                    value={editForm.hora}
                    onChange={(e) => setEditForm({ ...editForm, hora: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Artista / Banda</label>
                <input
                  type="text"
                  value={editForm.artistaBanda}
                  onChange={(e) => setEditForm({ ...editForm, artistaBanda: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Imagen</label>
                <div className="space-y-2">
                  {editForm.imagen && (
                    <div
                      className="w-full h-32 rounded bg-cover bg-center border border-gris/20"
                      style={{ backgroundImage: `url('${editForm.imagen}')` }}
                    />
                  )}
                  <div className="flex gap-2 items-center">
                    <button
                      type="button"
                      onClick={() => editFileInputRef.current?.click()}
                      disabled={uploading}
                      className="bg-negro border border-dorado/30 text-dorado px-3 py-2 rounded text-xs hover:bg-dorado/10 transition-colors disabled:opacity-50"
                    >
                      {uploading ? "Subiendo..." : editForm.imagen ? "Cambiar imagen" : "Subir imagen"}
                    </button>
                  </div>
                  <input
                    ref={editFileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleEditFileChange}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={saveEdit}
                disabled={uploading}
                className="bg-dorado text-negro px-4 py-2 rounded text-sm font-medium hover:bg-dorado-dark transition-colors disabled:opacity-50"
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

      {initialEventos.length === 0 ? (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-8 text-center">
          <p className="text-gris-light">No hay eventos programados todavía.</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-dorado hover:text-dorado-dark text-sm underline mt-2"
          >
            Crea el primer evento
          </button>
        </div>
      ) : (
        <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dorado/20 text-left">
                <th className="px-4 py-3 text-dorado font-medium">Imagen</th>
                <th className="px-4 py-3 text-dorado font-medium">Título</th>
                <th className="px-4 py-3 text-dorado font-medium">Tipo</th>
                <th className="px-4 py-3 text-dorado font-medium">Fecha</th>
                <th className="px-4 py-3 text-dorado font-medium">Artista</th>
                <th className="px-4 py-3 text-dorado font-medium">Estado</th>
                <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {initialEventos.map((ev) => (
                <tr key={ev.id} className="border-b border-dorado/10">
                  <td className="px-4 py-3">
                    {ev.imagen ? (
                      <div className="w-12 h-12 rounded bg-cover bg-center border border-gris/20" style={{ backgroundImage: `url('${ev.imagen}')` }} />
                    ) : (
                      <div className="w-12 h-12 rounded bg-gris/20" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-white">{ev.titulo}</td>
                  <td className="px-4 py-3 text-gris-light">{ev.tipo}</td>
                  <td className="px-4 py-3 text-gris-light">{ev.fecha}</td>
                  <td className="px-4 py-3 text-gris-light">{ev.artistaBanda ?? "-"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${estadoBadge[ev.estado ?? "programado"] ?? estadoBadge.programado}`}>
                      {ev.estado}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(ev)}
                        className="text-dorado hover:text-dorado-dark text-xs underline"
                      >
                        Editar
                      </button>
                      <button onClick={() => handleDelete(ev.id)} className="text-red-400 hover:text-red-300 text-xs underline">
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
