import Link from "next/link";

const eventos = [
  {
    date: { day: "21", month: "JUN" },
    title: "Noche de Blues & Bourbon",
    type: "Música en vivo",
    description:
      "Jam session abierta con músicos locales. Selección especial de bourbons americanos.",
  },
  {
    date: { day: "28", month: "JUN" },
    title: "Vinilo & Vermú",
    type: "Sesión DJ",
    description:
      "DJ set de vinilos clásicos de rock de los 70. Vermú artesanal de grifo.",
  },
  {
    date: { day: "05", month: "JUL" },
    title: "Tributo a Enrique Morente",
    type: "Concierto especial",
    description:
      "Homenaje al maestro granadino con artistas invitados de la escena local.",
  },
];

export function EventosDestacados() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
          Próximos Eventos
        </h2>
        <div className="mt-3 mx-auto w-24 h-1 bg-dorado rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventos.map((evento) => (
          <div
            key={evento.title}
            className="bg-negro-light rounded-xl overflow-hidden border border-dorado/10 hover:border-dorado/30 transition-colors"
          >
            <div className="flex items-center gap-4 p-6">
              <div className="shrink-0 w-16 h-16 bg-rojo rounded-lg flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white leading-none">
                  {evento.date.day}
                </span>
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                  {evento.date.month}
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-dorado uppercase tracking-wider">
                  {evento.type}
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-1">
                  {evento.title}
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6">
              <p className="text-gris-light">{evento.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/programacion"
          className="text-dorado hover:text-dorado-dark transition-colors font-semibold text-lg"
        >
          Ver programación →
        </Link>
      </div>
    </section>
  );
}
