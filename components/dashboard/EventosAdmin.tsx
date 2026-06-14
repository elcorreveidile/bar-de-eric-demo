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

const estadoBadge: Record<string, string> = {
  programado: "bg-green-900/50 text-green-400",
  borrador: "bg-yellow-900/50 text-yellow-400",
  cancelado: "bg-red-900/50 text-red-400",
};

const inputClass = "w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";

export function EventosAdmin({ initialEventos }: { initialEventos: Evento[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("concierto");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [artistaBanda, setArtistaBanda] = useState("");
  const [imagen, setImagen] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
                    <button onClick={() => handleDelete(ev.id)} className="text-red-400 hover:text-red-300 text-xs underline">
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
