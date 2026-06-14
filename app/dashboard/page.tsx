import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

const stats = [
  { label: "Reservas Hoy", value: 5, color: "text-dorado" },
  { label: "Pedidos Pendientes", value: 3, color: "text-orange-400" },
  { label: "Próximos Eventos", value: 2, color: "text-blue-400" },
  { label: "Fotos en Museo", value: 170, color: "text-green-400" },
];

const recentActivity = [
  { time: "14:32", text: "Nueva reserva de Carlos Ruiz para 4 comensales" },
  { time: "13:15", text: "Pedido #P-0042 marcado como listo" },
  { time: "12:50", text: "Evento 'Noche de Blues' actualizado" },
  { time: "11:30", text: "Foto 'Nirvana 1992' subida a la galería" },
  { time: "10:05", text: "Mesa 7 desactivada por mantenimiento" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        Panel de Administración
      </h2>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-negro-light rounded-lg border border-dorado/20 p-5"
          >
            <p className="text-gris-light text-sm">{stat.label}</p>
            <p className={`text-3xl font-bold mt-1 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity */}
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-5">
          <h3 className="font-display text-lg text-dorado mb-4">
            Actividad Reciente
          </h3>
          <ul className="space-y-3">
            {recentActivity.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="text-gris-light whitespace-nowrap">
                  {item.time}
                </span>
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick actions */}
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-5">
          <h3 className="font-display text-lg text-dorado mb-4">
            Acciones Rápidas
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard/menu/nueva"
              className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2.5 rounded text-center text-sm transition-colors"
            >
              Nueva tapa
            </Link>
            <Link
              href="/dashboard/eventos/crear-evento"
              className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2.5 rounded text-center text-sm transition-colors"
            >
              Nuevo evento
            </Link>
            <Link
              href="/dashboard/galeria/subir-foto"
              className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2.5 rounded text-center text-sm transition-colors"
            >
              Subir foto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
