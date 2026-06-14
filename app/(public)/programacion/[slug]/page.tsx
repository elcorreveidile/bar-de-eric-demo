import Link from "next/link";

export const metadata = {
  title: "Detalle del Evento",
};

export default async function EventoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Mapea el slug a un banner por tipo de evento (heuristica simple).
  function bannerPorSlug(s: string): string {
    if (s.includes("expo")) return "/images/eventos/exposicion.svg";
    if (s.includes("ruta") || s.includes("guia"))
      return "/images/eventos/guia-rockera.svg";
    if (s.includes("taller")) return "/images/eventos/taller.svg";
    return "/images/eventos/concierto.svg";
  }
  const banner = bannerPorSlug(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/programacion"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver a programacion
      </Link>

      <div className="mt-6 space-y-8">
        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div
          className="relative rounded-xl overflow-hidden border border-gris/20 aspect-[21/9] bg-negro"
          style={{
            backgroundImage: `url('${banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/30 to-transparent" />
        </div>

        <div className="bg-negro-light rounded-xl p-8 border border-gris/20">
          <div className="flex flex-wrap items-start gap-6">
            <div className="flex flex-col items-center justify-center bg-rojo rounded-lg px-5 py-4 min-w-[80px]">
              <span className="text-3xl font-bold text-white">15</span>
              <span className="text-sm text-white/80 uppercase">Mar</span>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <span className="inline-block text-xs bg-dorado/20 text-dorado px-3 py-1 rounded-full border border-dorado/30 mb-2">
                  Concierto
                </span>
                <h1 className="font-display text-3xl font-bold text-dorado">
                  Titulo del Evento
                </h1>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gris-light">
                <span>Artista / Banda</span>
                <span>21:00h</span>
                <span>Aforo: 50 personas</span>
              </div>

              <p className="text-gris-light leading-relaxed">
                Descripcion completa del evento. Aqui se detallara toda la
                informacion sobre el concierto, exposicion o actividad
                programada en El Bar de Eric.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <span className="bg-rojo/20 text-rojo px-3 py-1 rounded-full text-sm border border-rojo/30">
                  Entrada libre
                </span>
              </div>

              <p className="text-gris-light text-sm">slug: {slug}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/reservas"
            className="inline-block bg-rojo hover:bg-rojo/80 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Reservar mesa para este dia
          </Link>
        </div>
      </div>
    </div>
  );
}
