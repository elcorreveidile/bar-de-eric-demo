import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gestión Eventos" };

const eventos = [
  { id: "1", titulo: "Noche de Blues", tipo: "Concierto", fecha: "2026-06-20", estado: "confirmado" },
  { id: "2", titulo: "Expo Rock Granadino", tipo: "Exposición", fecha: "2026-06-25", estado: "borrador" },
  { id: "3", titulo: "Guía Rockera por el Albaicín", tipo: "Guía Rockera", fecha: "2026-07-01", estado: "confirmado" },
  { id: "4", titulo: "Taller de Percusión", tipo: "Taller", fecha: "2026-07-10", estado: "borrador" },
];

const estadoBadge: Record<string, string> = {
  confirmado: "bg-green-900/50 text-green-400",
  borrador: "bg-yellow-900/50 text-yellow-400",
  cancelado: "bg-red-900/50 text-red-400",
};

export default function EventosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión de Eventos
        </h2>
        <Link
          href="/dashboard/eventos/crear-evento"
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Nuevo Evento
        </Link>
      </div>

      <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dorado/20 text-left">
              <th className="px-4 py-3 text-dorado font-medium">Título</th>
              <th className="px-4 py-3 text-dorado font-medium">Tipo</th>
              <th className="px-4 py-3 text-dorado font-medium">Fecha</th>
              <th className="px-4 py-3 text-dorado font-medium">Estado</th>
              <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((ev) => (
              <tr key={ev.id} className="border-b border-dorado/10">
                <td className="px-4 py-3 text-white">{ev.titulo}</td>
                <td className="px-4 py-3 text-gris-light">{ev.tipo}</td>
                <td className="px-4 py-3 text-gris-light">{ev.fecha}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs ${estadoBadge[ev.estado] ?? ""}`}
                  >
                    {ev.estado}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-dorado hover:text-dorado-dark text-xs underline">
                    Editar
                  </button>
                  <button className="text-red-400 hover:text-red-300 text-xs underline">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
