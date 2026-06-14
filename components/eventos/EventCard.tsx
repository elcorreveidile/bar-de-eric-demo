import Link from "next/link";

interface EventCardProps {
  titulo: string;
  tipo: string;
  fecha: string;
  hora: string;
  artista_banda: string;
  entrada_libre: boolean;
  slug: string;
}

export function EventCard({
  titulo,
  tipo,
  fecha,
  hora,
  artista_banda,
  entrada_libre,
  slug,
}: EventCardProps) {
  const date = new Date(fecha);
  const dia = date.getDate();
  const mes = date.toLocaleDateString("es-ES", { month: "short" }).toUpperCase();

  return (
    <Link href={`/programacion/${slug}`} className="group block">
      <div className="bg-negro-light rounded-lg overflow-hidden border border-gris/20 hover:border-dorado/50 transition-colors h-full flex">
        <div className="flex flex-col items-center justify-center bg-rojo px-4 py-3 min-w-[70px]">
          <span className="text-2xl font-bold text-white">{dia}</span>
          <span className="text-xs text-white/80 uppercase">{mes}</span>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-white group-hover:text-dorado transition-colors">
              {titulo}
            </h3>
            <span className="shrink-0 text-xs bg-dorado/20 text-dorado px-2 py-0.5 rounded-full border border-dorado/30">
              {tipo}
            </span>
          </div>

          <p className="text-gris-light text-sm mt-1">{artista_banda}</p>

          <div className="flex items-center justify-between mt-auto pt-3">
            <span className="text-gris-light text-sm">{hora}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${
                entrada_libre
                  ? "bg-green-900/30 text-green-400 border-green-700/30"
                  : "bg-dorado/10 text-dorado-dark border-dorado/20"
              }`}
            >
              {entrada_libre ? "Entrada libre" : "De pago"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
