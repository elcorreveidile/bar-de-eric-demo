import Link from "next/link";
import { rutas } from "@/lib/rutas-data";
import { MapaRutasDynamic } from "@/components/guia-rockera/MapaRutasDynamic";

export const metadata = {
  title: "Guía Rockera de Granada",
};

export default function GuiaRockeraPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-rutas.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Guía Rockera de Granada
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Tres rutas musicales por la ciudad que vio nacer el rock alternativo
          español. Todas parten de El Bar de Eric.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {rutas.map((ruta) => (
          <Link
            key={ruta.slug}
            href={`/guia-rockera/${ruta.slug}`}
            className="group block"
          >
            <div className="bg-negro-light rounded-xl p-6 border border-gris/20 hover:border-dorado/40 transition-colors flex flex-col h-full">
              <div
                className="w-full h-1.5 rounded-full mb-4"
                style={{ backgroundColor: ruta.color }}
              />

              <h2 className="font-display text-xl font-bold text-dorado mb-1 group-hover:text-ambar transition-colors">
                {ruta.titulo}
              </h2>
              <p className="text-ambar/70 text-sm italic mb-3">
                {ruta.subtitulo}
              </p>
              <p className="text-gris-light text-sm leading-relaxed flex-1">
                {ruta.descripcion}
              </p>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gris/20 text-sm">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-dorado"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gris-light">{ruta.duracion}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-dorado"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gris-light">{ruta.paradas.length} paradas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-dorado"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-gris-light">{ruta.distancia}</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-dorado-dark">
                Punto de partida: El Bar de Eric
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-negro-light rounded-xl border border-gris/20 overflow-hidden p-6">
        <h2 className="font-display text-2xl font-bold text-dorado mb-4">
          Mapa interactivo
        </h2>
        <p className="text-gris-light text-sm mb-6">
          Pulsa en los marcadores para ver los detalles de cada parada. Usa los
          botones para filtrar por ruta.
        </p>
        <MapaRutasDynamic rutas={rutas} />
      </div>
    </div>
    </div>
    </div>
  );
}
