"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

const categorias = ["conciertos", "estudio", "personajes", "mementos"];
const categoriasLabel: Record<string, string> = {
  conciertos: "Conciertos",
  estudio: "Estudio",
  personajes: "Personajes",
  mementos: "Mementos",
};

const inputClass =
  "w-full bg-negro border border-dorado/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";
const labelClass = "block text-sm text-gris-light mb-1";

export function FotoUpload() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [banda, setBanda] = useState("");
  const [anio, setAnio] = useState("");
  const [artista, setArtista] = useState("");
  const [categoria, setCategoria] = useState("");
  const [destacada, setDestacada] = useState(false);
  const [success, setSuccess] = useState(false);
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
        setUrlFoto(data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!urlFoto) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/galeria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          descripcion,
          url_foto: urlFoto,
          banda,
          anio: anio ? parseInt(anio) : null,
          artista,
          categoria,
          destacada,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setTitulo("");
        setDescripcion("");
        setUrlFoto("");
        setBanda("");
        setAnio("");
        setArtista("");
        setCategoria("");
        setDestacada(false);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-negro-light border border-dorado/30 rounded-xl p-8 text-center">
        <p className="text-dorado font-display text-xl mb-4">¡Foto subida!</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setSuccess(false)}
            className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
          >
            Subir otra
          </button>
          <a
            href="/dashboard/galeria"
            className="bg-negro border border-dorado/30 text-dorado px-4 py-2 rounded text-sm hover:bg-dorado/10 transition-colors"
          >
            Volver a galería
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Imagen *</label>
        <div className="space-y-2">
          {urlFoto && (
            <div
              className="w-full h-48 rounded bg-cover bg-center border border-gris/20"
              style={{ backgroundImage: `url('${urlFoto}')` }}
            />
          )}
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="bg-negro border border-dorado/30 text-dorado px-4 py-2 rounded text-sm hover:bg-dorado/10 transition-colors disabled:opacity-50"
            >
              {uploading ? "Subiendo..." : urlFoto ? "Cambiar imagen" : "Seleccionar imagen"}
            </button>
            {urlFoto && <span className="text-green-400 text-xs">✓ Imagen lista</span>}
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
        <label className={labelClass}>Título *</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className={inputClass}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Banda</label>
          <input
            type="text"
            value={banda}
            onChange={(e) => setBanda(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Año</label>
          <input
            type="number"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Artista / Fotógrafo</label>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Categoría *</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Seleccionar...</option>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {categoriasLabel[c]}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="destacada"
          checked={destacada}
          onChange={(e) => setDestacada(e.target.checked)}
          className="accent-dorado"
        />
        <label htmlFor="destacada" className="text-sm text-gris-light">
          Destacada
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !urlFoto}
        className="bg-rojo hover:bg-rojo/80 disabled:opacity-50 text-white px-6 py-2.5 rounded text-sm transition-colors"
      >
        {loading ? "Guardando..." : "Subir Foto"}
      </button>
    </form>
  );
}
