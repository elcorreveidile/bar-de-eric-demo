"use client";

import { useState, FormEvent } from "react";

const categories = [
  { id: "tapas-clasicas", name: "Tapas Clásicas" },
  { id: "tapas-calientes", name: "Tapas Calientes" },
  { id: "para-compartir", name: "Para Compartir" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const inputClass =
  "w-full bg-negro border border-dorado/30 rounded px-3 py-2 text-white text-sm focus:border-dorado focus:outline-none";
const labelClass = "block text-sm text-gris-light mb-1";

export function MenuForm({ id }: { id?: string }) {
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [receta, setReceta] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [historiaMusicales, setHistoriaMusicales] = useState("");
  const [banda, setBanda] = useState("");
  const [anio, setAnio] = useState("");
  const [alergenos, setAlergenos] = useState("");
  const [disponible, setDisponible] = useState(true);

  const handleNombreChange = (value: string) => {
    setNombre(value);
    setSlug(slugify(value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        nombre,
        slug,
        categoryId,
        descripcion,
        receta,
        precio: parseFloat(precio),
        imagen,
        historiaMusicales,
        banda,
        anio: anio ? parseInt(anio) : null,
        alergenos: alergenos
          .split(",")
          .map((a) => a.trim())
          .filter(Boolean),
        disponible,
      };
      const method = id ? "PUT" : "POST";
      await fetch("/api/admin/menu", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id ? { id, ...body } : body),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => handleNombreChange(e.target.value)}
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
        <label className={labelClass}>Categoría</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Seleccionar...</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
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
          rows={3}
        />
      </div>

      <div>
        <label className={labelClass}>Receta</label>
        <textarea
          value={receta}
          onChange={(e) => setReceta(e.target.value)}
          className={inputClass}
          rows={3}
        />
      </div>

      <div>
        <label className={labelClass}>Precio (€)</label>
        <input
          type="number"
          step="0.01"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Imagen (URL)</label>
        <input
          type="url"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Historia Musical</label>
        <textarea
          value={historiaMusicales}
          onChange={(e) => setHistoriaMusicales(e.target.value)}
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
        <label className={labelClass}>Alérgenos (separados por coma)</label>
        <input
          type="text"
          value={alergenos}
          onChange={(e) => setAlergenos(e.target.value)}
          className={inputClass}
          placeholder="gluten, lactosa, frutos secos"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="disponible"
          checked={disponible}
          onChange={(e) => setDisponible(e.target.checked)}
          className="accent-dorado"
        />
        <label htmlFor="disponible" className="text-sm text-gris-light">
          Disponible
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-rojo hover:bg-rojo/80 disabled:opacity-50 text-white px-6 py-2.5 rounded text-sm transition-colors"
      >
        {loading ? "Guardando..." : id ? "Actualizar Tapa" : "Crear Tapa"}
      </button>
    </form>
  );
}
