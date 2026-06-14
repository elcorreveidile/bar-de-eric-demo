import Link from "next/link";
import { notFound } from "next/navigation";
import { rutas } from "@/lib/rutas-data";
import { MapaRutasDynamic } from "@/components/guia-rockera/MapaRutasDynamic";

export function generateStaticParams() {
  return rutas.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ruta = rutas.find((r) => r.slug === slug);
  return { title: ruta ? ruta.titulo : "Ruta no encontrada" };
}

export default async function RutaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ruta = rutas.find((r) => r.slug === slug);

  if (!ruta) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/guia-rockera"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver a la Guía Rockera
      </Link>

      <div className="mb-10">
        <div
          className="w-16 h-1.5 rounded-full mb-4"
          style={{ backgroundColor: ruta.color }}
        />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-dorado mb-2">
          {ruta.titulo}
        </h1>
        <p className="text-ambar/80 italic mb-4">{ruta.subtitulo}</p>
        <p className="text-gris-light leading-relaxed max-w-3xl">
          {ruta.descripcion}
        </p>

        <div className="flex flex-wrap gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-medium">{ruta.duracion}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-medium">{ruta.paradas.length} paradas</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-white font-medium">{ruta.distancia}</span>
          </div>
        </div>
      </div>

      <div className="mb-12 rounded-xl overflow-hidden border border-gris/20">
        <MapaRutasDynamic rutas={[ruta]} rutaActiva={ruta.slug} />
      </div>

      <section>
        <h2 className="font-display text-2xl font-bold text-dorado mb-8">
          Paradas de la ruta
        </h2>
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: ruta.color, opacity: 0.3 }}
          />

          <div className="space-y-8">
            {ruta.paradas.map((parada, i) => (
              <div key={i} className="relative pl-14">
                <div
                  className="absolute left-2.5 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white"
                  style={{ backgroundColor: ruta.color }}
                >
                  {i + 1}
                </div>
                <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {parada.nombre}
                  </h3>
                  <p className="text-gris-light text-sm mt-2 leading-relaxed">
                    {parada.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gris/20 text-center">
        <p className="text-gris-light mb-4">
          Todas las rutas parten de El Bar de Eric
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/guia-rockera"
            className="px-6 py-3 bg-negro-light text-dorado font-medium rounded-lg border border-gris/30 hover:border-dorado/50 transition-colors"
          >
            Ver todas las rutas
          </Link>
          <Link
            href="/reservas"
            className="px-6 py-3 bg-rojo text-white font-medium rounded-lg hover:bg-rojo/80 transition-colors"
          >
            Reservar mesa
          </Link>
        </div>
      </div>
    </div>
  );
}
