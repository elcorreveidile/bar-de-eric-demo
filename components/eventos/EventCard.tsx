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

function bannerPorTipo(tipo: string): string {
  const t = tipo.toLowerCase();
  if (t.includes("expo")) return "/images/eventos/exposicion.svg";
  if (t.includes("guia") || t.includes("guía") || t.includes("rocker"))
    return "/images/eventos/guia-rockera.svg";
  if (t.includes("taller")) return "/images/eventos/taller.svg";
  return "/images/eventos/concierto.png";
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

  const banner = bannerPorTipo(tipo);

  return (
    <Link href={`/programacion/${slug}`} className="group block">
      <div className="bg-negro-light rounded-lg overflow-hidden border border-gris/20 hover:border-dorado/50 transition-colors h-full flex flex-col">
        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div
          className="relative aspect-[16/9] bg-negro"
          style={{
            backgroundImage: `url('${banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Degradado para legibilidad del badge de fecha sobre la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-negro-light via-negro/30 to-transparent" />
          <div className="absolute top-3 left-3 flex flex-col items-center justify-center bg-rojo rounded-md px-3 py-1.5 min-w-[56px] shadow-lg">
            <span className="text-xl font-bold text-white leading-none">{dia}</span>
            <span className="text-[10px] text-white/80 uppercase">{mes}</span>
          </div>
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
