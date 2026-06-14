const hitos = [
  {
    anio: 1982,
    titulo: "KGB se forma en Granada",
    descripcion:
      "Eric Jimenez funda KGB, una de las primeras bandas del rock alternativo granadino.",
    banda: "KGB",
  },
  {
    anio: 1985,
    titulo: "Nace Lagartija Nick",
    descripcion:
      "Se forma Lagartija Nick, que se convertira en una de las bandas mas influyentes del rock espanol.",
    banda: "Lagartija Nick",
  },
  {
    anio: 1991,
    titulo: "Joe Strummer visita Granada",
    descripcion:
      "El lider de The Clash pasa una temporada en Granada, dejando una huella imborrable en la escena local.",
    banda: "The Clash",
  },
  {
    anio: 1992,
    titulo: '"Inercia" - Lagartija Nick',
    descripcion:
      "Lagartija Nick publica su album debut, marcando un antes y un despues en el rock granadino.",
    banda: "Lagartija Nick",
  },
  {
    anio: 1993,
    titulo: "Se forman Los Planetas",
    descripcion:
      "Nace Los Planetas en Granada, la banda que definira el indie espanol.",
    banda: "Los Planetas",
  },
  {
    anio: 1996,
    titulo: '"Omega" - Lagartija Nick + Enrique Morente',
    descripcion:
      "La fusion historica entre flamenco y rock. Un disco que cambio la musica espanola para siempre.",
    banda: "Lagartija Nick / Enrique Morente",
  },
  {
    anio: 2000,
    titulo: '"Encuentros con entidades" - Los Planetas',
    descripcion:
      "Los Planetas publican uno de los discos fundamentales del rock espanol.",
    banda: "Los Planetas",
  },
  {
    anio: 2007,
    titulo: "Los Evangelistas",
    descripcion:
      "Eric Jimenez forma Los Evangelistas, continuando su incansable labor musical.",
    banda: "Los Evangelistas",
  },
  {
    anio: 2010,
    titulo: "Fallece Enrique Morente",
    descripcion:
      "Granada pierde a uno de sus genios musicales. Su legado sigue vivo en cada rincon de la ciudad.",
    banda: "Enrique Morente",
  },
  {
    anio: 2013,
    titulo: "Abre El Bar de Eric",
    descripcion:
      "Eric Jimenez abre su bar-museo en Granada, un espacio donde la musica, la gastronomia y la historia se encuentran.",
    banda: "El Bar de Eric",
  },
  {
    anio: 2024,
    titulo: "El Bar de Eric cumple 11 anos",
    descripcion:
      "Mas de una decada compartiendo rock, tapas y buena musica. El museo sigue creciendo.",
    banda: "El Bar de Eric",
  },
];

export function TimelineMusical() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dorado/30 hidden md:block" />

      <div className="space-y-12">
        {hitos.map((hito, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={hito.anio} className="relative">
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-dorado border-4 border-negro z-10" />

              <div
                className={`md:grid md:grid-cols-2 md:gap-12 ${
                  isLeft ? "" : "md:direction-rtl"
                }`}
              >
                <div
                  className={`${
                    isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-negro-light rounded-lg p-6 border border-gris/20 hover:border-dorado/40 transition-colors">
                    <span className="font-display text-3xl font-bold text-dorado">
                      {hito.anio}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mt-2">
                      {hito.titulo}
                    </h3>
                    <p className="text-gris-light mt-2 leading-relaxed">
                      {hito.descripcion}
                    </p>
                    <span className="inline-block mt-3 text-xs bg-rojo/20 text-rojo px-3 py-1 rounded-full border border-rojo/30">
                      {hito.banda}
                    </span>
                  </div>
                </div>

                {isLeft && <div className="hidden md:block" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
