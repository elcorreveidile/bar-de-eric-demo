import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gestión Galería" };

const photos = [
  { id: "1", titulo: "Nirvana en Concierto 1992", categoria: "Conciertos", banda: "Nirvana", url: "/placeholder.jpg" },
  { id: "2", titulo: "Eric con Los Planetas", categoria: "Personajes", banda: "Los Planetas", url: "/placeholder.jpg" },
  { id: "3", titulo: "Lagartija Nick - Estudio", categoria: "Estudio", banda: "Lagartija Nick", url: "/placeholder.jpg" },
  { id: "4", titulo: "Joy Division - Poster Original", categoria: "Mementos", banda: "Joy Division", url: "/placeholder.jpg" },
  { id: "5", titulo: "The Smiths en Manchester", categoria: "Conciertos", banda: "The Smiths", url: "/placeholder.jpg" },
  { id: "6", titulo: "Disco firmado Sonic Youth", categoria: "Mementos", banda: "Sonic Youth", url: "/placeholder.jpg" },
];

export default function GaleriaPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión de Galería
        </h2>
        <Link
          href="/dashboard/galeria/subir-foto"
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Subir Foto
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-negro-light rounded-lg border border-dorado/20 overflow-hidden"
          >
            <div className="aspect-video bg-negro flex items-center justify-center text-gris-light text-sm">
              {photo.titulo}
            </div>
            <div className="p-3">
              <h3 className="text-white text-sm font-medium truncate">
                {photo.titulo}
              </h3>
              <p className="text-gris-light text-xs mt-1">
                {photo.categoria} — {photo.banda}
              </p>
              <div className="flex gap-2 mt-3">
                <button className="text-dorado hover:text-dorado-dark text-xs underline">
                  Editar
                </button>
                <button className="text-red-400 hover:text-red-300 text-xs underline">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
