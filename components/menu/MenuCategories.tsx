"use client";

import { useState } from "react";
import { TapaCard } from "@/components/menu/TapaCard";

const categorias = ["Tapas Clasicas", "Especialidades", "Raciones", "Bebidas"];

const items = [
  { nombre: "La Omega", banda: "Lagartija Nick", anio: 1996, descripcion: "Fusion de sabores mediterraneos con un toque picante, como la fusion de Omega.", precio: 850, slug: "la-omega", categoria: "Tapas Clasicas" },
  { nombre: "Encuentros con Entidades", banda: "Los Planetas", anio: 2000, descripcion: "Tapa misteriosa con ingredientes que cambian segun la temporada.", precio: 950, slug: "encuentros-con-entidades", categoria: "Especialidades" },
  { nombre: "London Calling", banda: "The Clash", anio: 1979, descripcion: "Fish & chips con un toque andaluz. Homenaje a Joe Strummer.", precio: 750, slug: "london-calling", categoria: "Tapas Clasicas" },
  { nombre: "Inercia", banda: "Lagartija Nick", anio: 1992, descripcion: "Croquetas caseras que no puedes dejar de comer. Pura inercia.", precio: 650, slug: "inercia", categoria: "Tapas Clasicas" },
  { nombre: "El Vacio", banda: "Los Planetas", anio: 1996, descripcion: "Huevos rotos con jamon: sencillo pero devastador.", precio: 900, slug: "el-vacio", categoria: "Especialidades" },
  { nombre: "Racion KGB", banda: "KGB", anio: 1982, descripcion: "Tabla de quesos y embutidos ibericos. Contundente como el punk.", precio: 1450, slug: "racion-kgb", categoria: "Raciones" },
  { nombre: "Jamon al Morente", banda: "Enrique Morente", anio: 2000, descripcion: "Jamon iberico de bellota cortado a mano. Puro arte.", precio: 1800, slug: "jamon-al-morente", categoria: "Raciones" },
  { nombre: "Cerveza Strummer", banda: "The Clash", anio: 1991, descripcion: "Cerveza artesana granadina con caracter rebelde.", precio: 350, slug: "cerveza-strummer", categoria: "Bebidas" },
  { nombre: "Tinto de Rock", banda: "Varios", anio: 2013, descripcion: "Seleccion de vinos tintos con denominacion de origen Granada.", precio: 400, slug: "tinto-de-rock", categoria: "Bebidas" },
  { nombre: "Patatas Punk", banda: "Sex Pistols", anio: 1977, descripcion: "Patatas bravas con salsa casera. Anarquia en cada bocado.", precio: 550, slug: "patatas-punk", categoria: "Tapas Clasicas" },
  { nombre: "Ensaladilla Indie", banda: "091", anio: 1990, descripcion: "Ensaladilla rusa con un twist alternativo. Clasico reinventado.", precio: 600, slug: "ensaladilla-indie", categoria: "Tapas Clasicas" },
  { nombre: "Tabla Evangelista", banda: "Los Evangelistas", anio: 2007, descripcion: "Seleccion de tostas variadas con ingredientes de temporada.", precio: 1200, slug: "tabla-evangelista", categoria: "Raciones" },
];

export function MenuCategories() {
  const [categoriaActiva, setCategoriaActiva] = useState("Tapas Clasicas");

  const itemsFiltrados = items.filter(
    (item) => item.categoria === categoriaActiva
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              categoriaActiva === cat
                ? "bg-dorado text-negro"
                : "bg-negro-light text-gris-light hover:text-dorado border border-gris/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsFiltrados.map((item) => (
          <TapaCard
            key={item.slug}
            nombre={item.nombre}
            banda={item.banda}
            anio={item.anio}
            descripcion={item.descripcion}
            precio={item.precio}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
