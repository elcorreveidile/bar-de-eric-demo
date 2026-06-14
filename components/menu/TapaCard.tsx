import Link from "next/link";

interface TapaCardProps {
  nombre: string;
  nombreReal?: string;
  descripcion: string;
  precio: number;
  slug: string;
  imagen?: string;
}

export function TapaCard({
  nombre,
  nombreReal,
  descripcion,
  precio,
  slug,
  imagen,
}: TapaCardProps) {
  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precio / 100);

  return (
    <Link href={`/menu/${slug}`} className="group block">
      <div className="bg-negro-light rounded-lg overflow-hidden border border-gris/20 hover:border-dorado/50 transition-colors h-full flex flex-col">
        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div
          className="aspect-[4/3] bg-gris/20"
          style={{
            backgroundImage: `url('${imagen || "/images/menu/tapa-1.svg"}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="sr-only">{nombre}</span>
        </div>
        <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-white group-hover:text-dorado transition-colors">
          {nombre}
        </h3>
        {nombreReal && (
          <p className="text-ambar/80 text-sm mt-0.5 italic">
            {nombreReal}
          </p>
        )}
        <p className="text-gris-light text-sm mt-3 line-clamp-2 flex-1">
          {descripcion}
        </p>
        <div className="mt-4 pt-3 border-t border-gris/20">
          <span className="font-display text-lg font-bold text-dorado">
            {precioFormateado}
          </span>
        </div>
        </div>
      </div>
    </Link>
  );
}
