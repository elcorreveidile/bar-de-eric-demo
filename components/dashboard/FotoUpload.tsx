"use client";

import { useState, FormEvent } from "react";

const categorias = ["Conciertos", "Estudio", "Personajes", "Mementos"];

const inputClass =
  "w-full bg-negro border border-dorado/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";
const labelClass = "block text-sm text-gris-light mb-1";

export function FotoUpload() {
  const [loading, setLoading] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [banda, setBanda] = useState("");
  const [anio, setAnio] = useState("");
  const [artista, setArtista] = useState("");
  const [categoria, setCategoria] = useState("");
  const [destacada, setDestacada] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/admin/galeria", {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Título</label>
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

      <div>
        <label className={labelClass}>URL de la Foto</label>
        <input
          type="text"
          value={urlFoto}
          onChange={(e) => setUrlFoto(e.target.value)}
          className={inputClass}
          required
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
        <label className={labelClass}>Artista</label>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Categoría</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Seleccionar...</option>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
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
        disabled={loading}
        className="bg-rojo hover:bg-rojo/80 disabled:opacity-50 text-white px-6 py-2.5 rounded text-sm transition-colors"
      >
        {loading ? "Subiendo..." : "Subir Foto"}
      </button>
    </form>
  );
}
