"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface Photo {
  id: number;
  titulo: string;
  descripcion: string | null;
  urlFoto: string;
  banda: string | null;
  anio: number | null;
  artista: string | null;
  categoria: string | null;
  orden: number | null;
  destacada: boolean | null;
}

interface EditForm {
  titulo: string;
  descripcion: string;
  urlFoto: string;
  banda: string;
  anio: string;
  artista: string;
  categoria: string;
  destacada: boolean;
}

const categorias = ["conciertos", "estudio", "personajes", "mementos"];
const categoriasLabel: Record<string, string> = {
  conciertos: "Conciertos",
  estudio: "Estudio",
  personajes: "Personajes",
  mementos: "Mementos",
};

const inputClass = "w-full bg-negro border border-gris/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";

export function GaleriaAdmin({ photos }: { photos: Photo[] }) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({
    titulo: "", descripcion: "", urlFoto: "", banda: "", anio: "", artista: "", categoria: "", destacada: false,
  });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function startEdit(photo: Photo) {
    setEditingId(photo.id);
    setEditForm({
      titulo: photo.titulo,
      descripcion: photo.descripcion ?? "",
      urlFoto: photo.urlFoto,
      banda: photo.banda ?? "",
      anio: photo.anio ? String(photo.anio) : "",
      artista: photo.artista ?? "",
      categoria: photo.categoria ?? "",
      destacada: photo.destacada ?? false,
    });
  }

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
        setEditForm({ ...editForm, urlFoto: data.url });
      }
    } finally {
      setUploading(false);
    }
  }

  async function saveEdit() {
    if (!editingId || !editForm.titulo || !editForm.urlFoto) return;
    await fetch("/api/admin/galeria", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        titulo: editForm.titulo,
        descripcion: editForm.descripcion || null,
        url_foto: editForm.urlFoto,
        banda: editForm.banda || null,
        anio: editForm.anio ? parseInt(editForm.anio) : null,
        artista: editForm.artista || null,
        categoria: editForm.categoria || null,
        destacada: editForm.destacada,
      }),
    });
    setEditingId(null);
    router.refresh();
  }

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar esta foto?")) return;
    await fetch("/api/admin/galeria", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  }

  return (
    <>
      {editingId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-negro-light rounded-xl border border-dorado/30 p-6 w-full max-w-lg space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-display text-xl text-dorado">Editar foto</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gris-light mb-1">Imagen</label>
                <div className="space-y-2">
                  {editForm.urlFoto && (
                    <div
                      className="w-full h-40 rounded bg-cover bg-center border border-gris/20"
                      style={{ backgroundImage: `url('${editForm.urlFoto}')` }}
                    />
                  )}
                  <div className="flex gap-2 items-center">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="bg-negro border border-dorado/30 text-dorado px-3 py-2 rounded text-xs hover:bg-dorado/10 transition-colors disabled:opacity-50"
                    >
                      {uploading ? "Subiendo..." : "Cambiar imagen"}
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Título</label>
                <input
                  type="text"
                  value={editForm.titulo}
                  onChange={(e) => setEditForm({ ...editForm, titulo: e.target.value })}
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
                  <label className="block text-xs text-gris-light mb-1">Banda</label>
                  <input
                    type="text"
                    value={editForm.banda}
                    onChange={(e) => setEditForm({ ...editForm, banda: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gris-light mb-1">Año</label>
                  <input
                    type="number"
                    value={editForm.anio}
                    onChange={(e) => setEditForm({ ...editForm, anio: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Artista / Fotógrafo</label>
                <input
                  type="text"
                  value={editForm.artista}
                  onChange={(e) => setEditForm({ ...editForm, artista: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-gris-light mb-1">Categoría</label>
                <select
                  value={editForm.categoria}
                  onChange={(e) => setEditForm({ ...editForm, categoria: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Seleccionar...</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{categoriasLabel[c]}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-destacada"
                  checked={editForm.destacada}
                  onChange={(e) => setEditForm({ ...editForm, destacada: e.target.checked })}
                  className="accent-dorado"
                />
                <label htmlFor="edit-destacada" className="text-sm text-gris-light">Destacada</label>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-negro-light rounded-lg border border-dorado/20 overflow-hidden"
          >
            <div
              className="aspect-video bg-negro bg-cover bg-center"
              style={{ backgroundImage: `url('${photo.urlFoto}')` }}
            />
            <div className="p-3">
              <h3 className="text-white text-sm font-medium truncate">
                {photo.titulo}
              </h3>
              <p className="text-gris-light text-xs mt-1">
                {photo.categoria} {photo.banda ? `— ${photo.banda}` : ""}
              </p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => startEdit(photo)}
                  className="text-dorado hover:text-dorado-dark text-xs underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="text-red-400 hover:text-red-300 text-xs underline"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
