"use client";

import { useState } from "react";
import { EventCard } from "@/components/eventos/EventCard";

const tipos = ["Todos", "concierto", "exposicion", "guia", "taller"];
const tiposLabel: Record<string, string> = {
  Todos: "Todos",
  concierto: "Conciertos",
  exposicion: "Exposiciones",
  guia: "Guía Rockera",
  taller: "Talleres",
};

interface Evento {
  id: number;
  titulo: string;
  slug: string;
  tipo: string;
  fecha: string;
  hora: string | null;
  artistaBanda: string | null;
  entradaLibre: boolean | null;
}

export function CalendarioEventos({ eventos }: { eventos: Evento[] }) {
  const [filtroTipo, setFiltroTipo] = useState("Todos");

  const eventosFiltrados = eventos.filter(
    (evento) => filtroTipo === "Todos" || evento.tipo === filtroTipo
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltroTipo(tipo)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              filtroTipo === tipo
                ? "bg-dorado text-negro"
                : "bg-negro-light text-gris-light hover:text-dorado border border-gris/30"
            }`}
          >
            {tiposLabel[tipo] ?? tipo}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {eventosFiltrados.map((evento) => (
          <EventCard
            key={evento.slug}
            titulo={evento.titulo}
            tipo={tiposLabel[evento.tipo] ?? evento.tipo}
            fecha={evento.fecha}
            hora={evento.hora ?? ""}
            artista_banda={evento.artistaBanda ?? ""}
            entrada_libre={evento.entradaLibre ?? true}
            slug={evento.slug}
          />
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <p className="text-center text-gris-light py-12">
          No hay eventos programados en esta categoría.
        </p>
      )}
    </div>
  );
}
