"use client";

import { useState } from "react";
import { EventCard } from "@/components/eventos/EventCard";

const tipos = ["Todos", "Conciertos", "Exposiciones", "Guia Rockera", "Talleres"];

const eventos = [
  { titulo: "Noche de Blues", tipo: "Conciertos", fecha: "2025-03-15", hora: "21:00", artista_banda: "Blues Granada Trio", entrada_libre: true, slug: "noche-de-blues" },
  { titulo: "Expo: 40 Anos de Rock Granadino", tipo: "Exposiciones", fecha: "2025-03-20", hora: "19:00", artista_banda: "Colectivo Fotografia Rock", entrada_libre: true, slug: "expo-40-anos-rock" },
  { titulo: "Ruta Joe Strummer", tipo: "Guia Rockera", fecha: "2025-03-22", hora: "11:00", artista_banda: "Guia: Eric Jimenez", entrada_libre: false, slug: "ruta-joe-strummer" },
  { titulo: "Taller de Bateria", tipo: "Talleres", fecha: "2025-03-25", hora: "17:00", artista_banda: "Eric Jimenez", entrada_libre: false, slug: "taller-bateria" },
  { titulo: "Lagartija Nick Acustico", tipo: "Conciertos", fecha: "2025-04-02", hora: "22:00", artista_banda: "Lagartija Nick", entrada_libre: false, slug: "lagartija-nick-acustico" },
  { titulo: "Expo: Omega 30 Aniversario", tipo: "Exposiciones", fecha: "2025-04-10", hora: "19:00", artista_banda: "Archivo Lagartija Nick", entrada_libre: true, slug: "expo-omega-30" },
  { titulo: "Ruta Enrique Morente", tipo: "Guia Rockera", fecha: "2025-04-15", hora: "11:00", artista_banda: "Guia: Eric Jimenez", entrada_libre: false, slug: "ruta-enrique-morente" },
  { titulo: "Indie Night", tipo: "Conciertos", fecha: "2025-04-20", hora: "21:30", artista_banda: "Bandas locales", entrada_libre: true, slug: "indie-night" },
];

export function CalendarioEventos() {
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
            {tipo}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {eventosFiltrados.map((evento) => (
          <EventCard
            key={evento.slug}
            titulo={evento.titulo}
            tipo={evento.tipo}
            fecha={evento.fecha}
            hora={evento.hora}
            artista_banda={evento.artista_banda}
            entrada_libre={evento.entrada_libre}
            slug={evento.slug}
          />
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <p className="text-center text-gris-light py-12">
          No hay eventos programados en esta categoria.
        </p>
      )}
    </div>
  );
}
