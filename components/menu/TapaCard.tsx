import Link from "next/link";

interface TapaCardProps {
  nombre: string;
  banda: string;
  anio: number;
  descripcion: string;
  precio: number;
  slug: string;
}

export function TapaCard({
  nombre,
  banda,
  anio,
  descripcion,
  precio,
  slug,
}: TapaCardProps) {
  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precio / 100);

  return (
    <Link href={`/menu/${slug}`} className="group block">
      <div className="bg-negro-light rounded-lg p-5 border border-gris/20 hover:border-dorado/50 transition-colors h-full flex flex-col">
        <h3 className="font-display text-lg font-semibold text-white group-hover:text-dorado transition-colors">
          {nombre}
        </h3>
        <p className="text-gris-light text-sm mt-1">
          ({banda}, {anio})
        </p>
        <p className="text-gris-light text-sm mt-3 line-clamp-2 flex-1">
          {descripcion}
        </p>
        <div className="mt-4 pt-3 border-t border-gris/20">
          <span className="font-display text-lg font-bold text-dorado">
            {precioFormateado}
          </span>
        </div>
      </div>
    </Link>
  );
}
