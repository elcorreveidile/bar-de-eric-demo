"use client";

import { useState } from "react";
import Link from "next/link";

const categorias = ["Todos", "Conciertos", "Estudio", "Personajes", "Mementos"];

const fotos = [
  { id: "1", titulo: "Joe Strummer en el Albaicin", banda: "The Clash", anio: 1991, categoria: "Personajes" },
  { id: "2", titulo: "Lagartija Nick en directo", banda: "Lagartija Nick", anio: 1995, categoria: "Conciertos" },
  { id: "3", titulo: "Grabacion de Omega", banda: "Lagartija Nick", anio: 1996, categoria: "Estudio" },
  { id: "4", titulo: "Los Planetas en Planta Baja", banda: "Los Planetas", anio: 1998, categoria: "Conciertos" },
  { id: "5", titulo: "Enrique Morente retrato", banda: "Enrique Morente", anio: 2005, categoria: "Personajes" },
  { id: "6", titulo: "KGB primer concierto", banda: "KGB", anio: 1982, categoria: "Conciertos" },
  { id: "7", titulo: "Guitarra firmada por J", banda: "Los Planetas", anio: 2010, categoria: "Mementos" },
  { id: "8", titulo: "Eric en el estudio", banda: "Los Evangelistas", anio: 2007, categoria: "Estudio" },
  { id: "9", titulo: "Cartel Omega Tour", banda: "Lagartija Nick", anio: 1997, categoria: "Mementos" },
  { id: "10", titulo: "091 despedida", banda: "091", anio: 1996, categoria: "Conciertos" },
  { id: "11", titulo: "Apertura Bar de Eric", banda: "Varios", anio: 2013, categoria: "Personajes" },
  { id: "12", titulo: "Baquetas de Eric", banda: "Los Planetas", anio: 2015, categoria: "Mementos" },
];

export function GaleriaFotos() {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const fotosFiltradas = fotos.filter((foto) => {
    const coincideCategoria =
      filtroCategoria === "Todos" || foto.categoria === filtroCategoria;
    const coincideBusqueda =
      busqueda === "" ||
      foto.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      foto.banda.toLowerCase().includes(busqueda.toLowerCase());
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
              {cat}
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
              <div className="aspect-square bg-gris/20 flex items-center justify-center">
                <span className="text-gris-light text-xs">Foto</span>
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-semibold text-white group-hover:text-dorado transition-colors truncate">
                  {foto.titulo}
                </h3>
                <p className="text-gris-light text-xs mt-1">
                  {foto.banda} &middot; {foto.anio}
                </p>
                <span className="inline-block mt-2 text-xs bg-rojo/20 text-rojo px-2 py-0.5 rounded-full border border-rojo/30">
                  {foto.categoria}
                </span>
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
