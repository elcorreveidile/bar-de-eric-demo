import Link from "next/link";

export const metadata = {
  title: "Detalle del Plato",
};

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/menu"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver al menu
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div className="aspect-square bg-negro-light rounded-lg flex items-center justify-center border border-gris/30">
          <span className="text-gris-light text-sm">Foto del plato</span>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-dorado">
              Nombre del plato
            </h1>
            <p className="text-gris-light mt-1">
              Inspirado en: <span className="text-white">Lagartija Nick</span>{" "}
              &middot; 1996
            </p>
          </div>

          <p className="text-gris-light leading-relaxed">
            Descripcion detallada de este plato inspirado en la historia del
            rock granadino. Cada ingrediente cuenta una historia.
          </p>

          <div className="bg-negro-light rounded-lg p-4 border border-gris/20">
            <h3 className="font-display text-lg font-semibold text-dorado mb-2">
              Historia Musical
            </h3>
            <p className="text-gris-light text-sm leading-relaxed">
              La historia detras de este plato y su conexion con la musica.
              Cada tapa del Bar de Eric tiene un vinculo con un momento, una
              cancion o un artista del rock.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Alergenos</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-negro-light px-3 py-1 rounded-full text-gris-light border border-gris/30">
                Gluten
              </span>
              <span className="text-xs bg-negro-light px-3 py-1 rounded-full text-gris-light border border-gris/30">
                Lactosa
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gris/20">
            <span className="font-display text-2xl font-bold text-dorado">
              8,50 &euro;
            </span>
            <span className="text-gris-light text-sm">slug: {slug}</span>
          </div>

          <div className="flex gap-4">
            <Link
              href="/reservas"
              className="flex-1 text-center bg-rojo hover:bg-rojo/80 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Reservar mesa
            </Link>
            <button className="flex-1 bg-negro-light hover:bg-gris/30 text-dorado font-medium px-6 py-3 rounded-lg border border-dorado/30 hover:border-dorado transition-colors">
              Pedir para llevar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
