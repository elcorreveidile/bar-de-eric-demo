import Link from "next/link";

const photos = [
  { title: "Pared de músicos", band: "Galería fotográfica", year: "2013–2024", image: "/images/bar-real/pared-fotos-musicos.jpg" },
  { title: "Galería de bandas", band: "Rock nacional e internacional", year: "1969–2024", image: "/images/bar-real/galeria-bandas.jpg" },
  { title: "Backstage passes", band: "Los Planetas, Lagartija Nick y más", year: "1990–2020", image: "/images/bar-real/cuadros-backstage.jpg" },
  { title: "Rincón memorabilia", band: "Colección privada", year: "2013", image: "/images/bar-real/rincon-memorabilia.jpg" },
  { title: "Rincón de guitarras", band: "Ambiente único", year: "2013", image: "/images/bar-real/interior-rincon-guitarras.jpg" },
  { title: "La barra", band: "El corazón del bar", year: "2013", image: "/images/bar-real/barra.jpg" },
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
            key={photo.title}
            className="group relative bg-negro-light rounded-xl overflow-hidden aspect-[4/3] flex items-end"
            style={{
              backgroundImage: `url('${photo.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/40 to-transparent" />
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
