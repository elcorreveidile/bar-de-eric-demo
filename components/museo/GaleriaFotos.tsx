"use client";

import { useState } from "react";
import Link from "next/link";

const categorias = ["Todos", "conciertos", "estudio", "personajes", "mementos"];
const categoriasLabel: Record<string, string> = {
  Todos: "Todos",
  conciertos: "Conciertos",
  estudio: "Estudio",
  personajes: "Personajes",
  mementos: "Mementos",
};

interface Foto {
  id: number;
  titulo: string;
  urlFoto: string;
  banda: string | null;
  anio: number | null;
  categoria: string | null;
}

export function GaleriaFotos({ fotos }: { fotos: Foto[] }) {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const fotosFiltradas = fotos.filter((foto) => {
    const coincideCategoria =
      filtroCategoria === "Todos" || foto.categoria === filtroCategoria;
    const coincideBusqueda =
      busqueda === "" ||
      foto.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      (foto.banda ?? "").toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div>
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Buscar por titulo o banda..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full max-w-md bg-negro-light border border-gris/30 rounded-lg px-4 py-2 text-white placeholder:text-gris-light focus:outline-none focus:border-dorado transition-colors"
        />

        <div className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltroCategoria(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filtroCategoria === cat
                  ? "bg-dorado text-negro"
                  : "bg-negro-light text-gris-light hover:text-dorado border border-gris/30"
              }`}
            >
              {categoriasLabel[cat] ?? cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fotosFiltradas.map((foto) => (
          <Link
            key={foto.id}
            href={`/museo/${foto.id}`}
            className="group block"
          >
            <div className="bg-negro-light rounded-lg overflow-hidden border border-gris/20 hover:border-dorado/50 transition-colors">
              <div
                className="aspect-square bg-gris/20"
                style={{
                  backgroundImage: `url('${foto.urlFoto}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="sr-only">{foto.titulo}</span>
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-semibold text-white group-hover:text-dorado transition-colors truncate">
                  {foto.titulo}
                </h3>
                <p className="text-gris-light text-xs mt-1">
                  {foto.banda} {foto.anio ? `· ${foto.anio}` : ""}
                </p>
                {foto.categoria && (
                  <span className="inline-block mt-2 text-xs bg-rojo/20 text-rojo px-2 py-0.5 rounded-full border border-rojo/30">
                    {categoriasLabel[foto.categoria] ?? foto.categoria}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {fotosFiltradas.length === 0 && (
        <p className="text-center text-gris-light py-12">
          No se encontraron fotos con esos filtros.
        </p>
      )}
    </div>
  );
}
