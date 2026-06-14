
export const metadata = {
  title: "Historia",
};

const timeline = [
  {
    anio: 2013,
    titulo: "Apertura",
    descripcion:
      "Eric Jimenez abre El Bar de Eric en Granada. Un concepto unico: bar, museo del rock y espacio cultural.",
  },
  {
    anio: 2014,
    titulo: "Primeras exposiciones",
    descripcion:
      "Comienzan las exposiciones fotograficas y las noches de musica en directo. El bar se convierte en punto de encuentro de la escena musical granadina.",
  },
  {
    anio: 2016,
    titulo: "100 fotos en el museo",
    descripcion:
      "La coleccion del museo alcanza las 100 fotografias. Artistas de toda Espana visitan el bar para ver la coleccion.",
  },
  {
    anio: 2018,
    titulo: "Guias Rockeras",
    descripcion:
      "Se lanzan las primeras rutas rockeras por Granada, guiadas por el propio Eric. Joe Strummer, Morente, la escena indie.",
  },
  {
    anio: 2020,
    titulo: "Resistencia",
    descripcion:
      "El bar sobrevive a la pandemia. La comunidad rockera de Granada se vuelca para mantener vivo este espacio unico.",
  },
  {
    anio: 2022,
    titulo: "Nuevo menu musical",
    descripcion:
      "Se renueva la carta con tapas inspiradas en canciones y bandas. Cada plato cuenta una historia musical.",
  },
  {
    anio: 2024,
    titulo: "11 anos de rock",
    descripcion:
      "El Bar de Eric celebra mas de una decada. 170+ fotos, 500+ artistas que han pasado por el local, y un legado que sigue creciendo.",
  },
];

const datos = [
  { cifra: "170+", etiqueta: "Fotos historicas" },
  { cifra: "500+", etiqueta: "Artistas" },
  { cifra: "11", etiqueta: "Anos de historia" },
  { cifra: "3", etiqueta: "Rutas rockeras" },
];

export default function HistoriaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Historia de El Bar de Eric
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Mas que un bar. Un museo, un espacio cultural y un punto de
          encuentro para los amantes del rock en Granada.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {datos.map((dato) => (
          <div
            key={dato.etiqueta}
            className="bg-negro-light rounded-lg p-6 text-center border border-gris/20"
          >
            <span className="font-display text-3xl md:text-4xl font-bold text-dorado">
              {dato.cifra}
            </span>
            <p className="text-gris-light text-sm mt-2">{dato.etiqueta}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dorado mb-2 text-center">
          El concepto
        </h2>
        <p className="text-gris-light text-center max-w-2xl mx-auto leading-relaxed mb-8">
          El Bar de Eric nace de la idea de unir tres pasiones: la musica, la
          gastronomia y la historia del rock. Un museo donde cada foto
          tiene una historia, unas tapas con nombre de cancion y un espacio
          donde la musica siempre suena.
        </p>

        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="relative aspect-square rounded-lg overflow-hidden border border-gris/20 bg-negro"
              style={{
                backgroundImage: `url('/images/museo/foto-${n}.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-negro/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-dorado/30 md:left-1/2" />

        <div className="space-y-10">
          {timeline.map((evento, index) => (
            <div key={evento.anio} className="relative pl-20 md:pl-0">
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-dorado border-4 border-negro z-10 md:left-1/2 md:-translate-x-1/2" />

              <div
                className={`md:grid md:grid-cols-2 md:gap-12 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-negro-light rounded-lg p-6 border border-gris/20 hover:border-dorado/40 transition-colors">
                    <span className="font-display text-2xl font-bold text-dorado">
                      {evento.anio}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mt-1">
                      {evento.titulo}
                    </h3>
                    <p className="text-gris-light text-sm mt-2 leading-relaxed">
                      {evento.descripcion}
                    </p>
                  </div>
                </div>
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
