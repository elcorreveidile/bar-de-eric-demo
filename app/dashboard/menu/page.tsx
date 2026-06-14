import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gestión Menú" };

const menuItems = [
  { id: "1", nombre: "Bowie's Bravas", categoria: "Tapas Clásicas", precio: 4.5, disponible: true },
  { id: "2", nombre: "Hendrix al Ajillo", categoria: "Tapas Calientes", precio: 5.0, disponible: true },
  { id: "3", nombre: "Nirvana Nachos", categoria: "Para Compartir", precio: 7.5, disponible: false },
  { id: "4", nombre: "The Clash Croquetas", categoria: "Tapas Clásicas", precio: 4.0, disponible: true },
  { id: "5", nombre: "Ramones Roll", categoria: "Para Compartir", precio: 6.0, disponible: true },
];

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión del Menú
        </h2>
        <Link
          href="/dashboard/menu/nueva"
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Nueva Tapa
        </Link>
      </div>

      <div className="bg-negro-light rounded-lg border border-dorado/20 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dorado/20 text-left">
              <th className="px-4 py-3 text-dorado font-medium">Nombre</th>
              <th className="px-4 py-3 text-dorado font-medium">Categoría</th>
              <th className="px-4 py-3 text-dorado font-medium">Precio</th>
              <th className="px-4 py-3 text-dorado font-medium">Disponible</th>
              <th className="px-4 py-3 text-dorado font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b border-dorado/10">
                <td className="px-4 py-3 text-white">{item.nombre}</td>
                <td className="px-4 py-3 text-gris-light">{item.categoria}</td>
                <td className="px-4 py-3 text-white">{item.precio.toFixed(2)} €</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs ${
                      item.disponible
                        ? "bg-green-900/50 text-green-400"
                        : "bg-red-900/50 text-red-400"
                    }`}
                  >
                    {item.disponible ? "Sí" : "No"}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <Link
                    href={`/dashboard/menu/${item.id}`}
                    className="text-dorado hover:text-dorado-dark text-xs underline"
                  >
                    Editar
                  </Link>
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
