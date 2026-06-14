
export const metadata = {
  title: "Guia Rockera",
};

const rutas = [
  {
    titulo: "Joe Strummer en Granada",
    descripcion:
      "Sigue los pasos de Joe Strummer por Granada en 1991. Desde el Albaicin hasta los bares donde tocaba, una ruta que recorre los lugares que inspiraron al lider de The Clash durante su estancia en la ciudad.",
    duracion: "2 horas",
    paradas: 8,
    slug: "joe-strummer",
  },
  {
    titulo: "Huellas de Enrique Morente",
    descripcion:
      "El legado de Enrique Morente en Granada. Un recorrido por los espacios que marcaron la vida y obra del genio que fusiono flamenco y rock en Omega, cambiando la musica espanola para siempre.",
    duracion: "2.5 horas",
    paradas: 10,
    slug: "enrique-morente",
  },
  {
    titulo: "La escena indie granadina",
    descripcion:
      "De 091 a Los Planetas. Un viaje por los locales de ensayo, salas de conciertos y bares que vieron nacer el indie espanol en Granada, desde los anos 80 hasta hoy.",
    duracion: "3 horas",
    paradas: 12,
    slug: "escena-indie",
  },
];

export default function GuiaRockeraPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Guia Rockera de Granada
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Tres rutas musicales por la ciudad que vio nacer el rock alternativo
          espanol. Todas parten de El Bar de Eric.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {rutas.map((ruta) => (
          <div
            key={ruta.slug}
            className="bg-negro-light rounded-xl p-6 border border-gris/20 hover:border-dorado/40 transition-colors flex flex-col"
          >
            {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
            <div
              className="relative aspect-video rounded-lg mb-4 overflow-hidden bg-negro"
              style={{
                backgroundImage: "url('/images/eventos/guia-rockera.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-negro-light/70 to-transparent flex items-end p-2">
                <span className="text-white/90 text-xs">Mapa de la ruta</span>
              </div>
            </div>

            <h2 className="font-display text-xl font-bold text-dorado mb-2">
              {ruta.titulo}
            </h2>
            <p className="text-gris-light text-sm leading-relaxed flex-1">
              {ruta.descripcion}
            </p>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gris/20 text-sm">
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                  xmlns="http://www.w3.org/2000/svg"
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
                <span className="text-gris-light">{ruta.paradas} paradas</span>
              </div>
            </div>

            <div className="mt-3 text-xs text-dorado-dark">
              Punto de partida: El Bar de Eric
            </div>
          </div>
        ))}
      </div>

      <div className="bg-negro-light rounded-xl border border-gris/20 overflow-hidden">
        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div
          className="relative aspect-[21/9] flex items-center justify-center bg-negro"
          style={{
            backgroundImage: "url('/images/eventos/guia-rockera.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-negro/60" />
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gris-light mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="text-gris-light">Mapa interactivo de Granada</p>
            <p className="text-gris-light text-sm mt-1">
              Proximamente: visualiza las tres rutas en el mapa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
