"use client";

import { useState, FormEvent } from "react";

const tipos = ["Concierto", "Exposición", "Guía Rockera", "Taller"];

const inputClass =
  "w-full bg-negro border border-dorado/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";
const labelClass = "block text-sm text-gris-light mb-1";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function EventoForm() {
  const [loading, setLoading] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [slug, setSlug] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [artistaBanda, setArtistaBanda] = useState("");
  const [aforoMaximo, setAforoMaximo] = useState("");
  const [entradaLibre, setEntradaLibre] = useState(true);
  const [precioEntrada, setPrecioEntrada] = useState("");
  const [imagen, setImagen] = useState("");

  const handleTituloChange = (value: string) => {
    setTitulo(value);
    setSlug(slugify(value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/admin/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          slug,
          tipo,
          descripcion,
          fecha,
          hora,
          artista_banda: artistaBanda,
          aforo_maximo: aforoMaximo ? parseInt(aforoMaximo) : null,
          entrada_libre: entradaLibre,
          precio_entrada: precioEntrada ? parseFloat(precioEntrada) : null,
          imagen,
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
          onChange={(e) => handleTituloChange(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Tipo</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Seleccionar...</option>
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className={inputClass}
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Artista / Banda</label>
        <input
          type="text"
          value={artistaBanda}
          onChange={(e) => setArtistaBanda(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Aforo Máximo</label>
        <input
          type="number"
          value={aforoMaximo}
          onChange={(e) => setAforoMaximo(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="entradaLibre"
          checked={entradaLibre}
          onChange={(e) => setEntradaLibre(e.target.checked)}
          className="accent-dorado"
        />
        <label htmlFor="entradaLibre" className="text-sm text-gris-light">
          Entrada libre
        </label>
      </div>

      {!entradaLibre && (
        <div>
          <label className={labelClass}>Precio Entrada (€)</label>
          <input
            type="number"
            step="0.01"
            value={precioEntrada}
            onChange={(e) => setPrecioEntrada(e.target.value)}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass}>Imagen (URL)</label>
        <input
          type="url"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-rojo hover:bg-rojo/80 disabled:opacity-50 text-white px-6 py-2.5 rounded text-sm transition-colors"
      >
        {loading ? "Guardando..." : "Crear Evento"}
      </button>
    </form>
  );
}
