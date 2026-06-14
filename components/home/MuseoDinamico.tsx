import Link from "next/link";

const photos = [
  { title: "En el escenario", band: "Led Zeppelin", year: "1971" },
  { title: "Backstage Madrid", band: "Los Planetas", year: "1996" },
  { title: "Sesión de estudio", band: "Lagartija Nick", year: "2001" },
  { title: "Festival Espárrago", band: "Nirvana", year: "1992" },
  { title: "Concierto íntimo", band: "The Rolling Stones", year: "1969" },
  { title: "Gira europea", band: "Los Evangelistas", year: "2008" },
];

export function MuseoDinamico() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
          El Museo del Rock
        </h2>
        <div className="mt-3 mx-auto w-24 h-1 bg-dorado rounded-full" />
        <p className="mt-4 text-gris-light text-lg max-w-2xl mx-auto">
          Más de 170 fotografías históricas del rock nacional e internacional recorren las paredes del bar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={`${photo.band}-${photo.year}`}
            className="group relative bg-negro-light rounded-xl overflow-hidden aspect-[4/3] flex items-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-dorado/20 group-hover:text-dorado/40 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <div className="relative z-10 p-5 w-full">
              <p className="text-sm text-dorado font-semibold">{photo.band}</p>
              <h3 className="text-lg font-display font-semibold text-white mt-1">
                {photo.title}
              </h3>
              <p className="text-sm text-gris-light mt-1">{photo.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/museo"
          className="text-dorado hover:text-dorado-dark transition-colors font-semibold text-lg"
        >
          Ver galería completa →
        </Link>
      </div>
    </section>
  );
}
