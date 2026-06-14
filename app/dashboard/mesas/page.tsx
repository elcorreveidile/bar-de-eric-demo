import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gestión Mesas" };

const mesas = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  numero: i + 1,
  capacidad: [2, 4, 4, 6, 2, 4, 8, 2, 4, 6][i],
  ubicacion: ["Barra", "Salón", "Salón", "Terraza", "Barra", "Salón", "Terraza", "Barra", "Salón", "Terraza"][i],
  activa: i !== 6,
}));

export default function MesasPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión de Mesas
        </h2>
        <button className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors">
          Nueva Mesa
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`bg-negro-light rounded-lg border p-4 ${
              mesa.activa ? "border-dorado/20" : "border-red-900/50 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-dorado text-lg">
                Mesa {mesa.numero}
              </span>
              <span
                className={`w-3 h-3 rounded-full ${
                  mesa.activa ? "bg-green-400" : "bg-red-400"
                }`}
              />
            </div>
            <p className="text-gris-light text-sm">
              Capacidad: {mesa.capacidad}
            </p>
            <p className="text-gris-light text-sm">
              Ubicación: {mesa.ubicacion}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gris-light">
                {mesa.activa ? "Activa" : "Inactiva"}
              </span>
              <button className="text-dorado hover:text-dorado-dark text-xs underline">
                {mesa.activa ? "Desactivar" : "Activar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
