import Link from "next/link";

export const metadata = {
  title: "Detalle de Foto",
};

export default async function FotoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fotoNum = Number(id);
  const fotoId = Number.isInteger(fotoNum) && fotoNum >= 1 && fotoNum <= 20 ? fotoNum : 1;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/museo"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver a la galeria
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
        <div
          className="aspect-[4/3] bg-negro-light rounded-lg flex items-center justify-center border border-gris/30"
          style={{
            backgroundImage: `url('/images/museo/foto-${fotoId}.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="sr-only">Foto #{id}</span>
        </div>

        <div className="space-y-6">
          <h1 className="font-display text-3xl font-bold text-dorado">
            Titulo de la foto
          </h1>
          <p className="text-gris-light leading-relaxed">
            Descripcion detallada de esta fotografia historica del rock
            granadino. Aqui se contara la historia detras de la imagen, el
            momento capturado y su significado.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gris-light text-sm">Banda:</span>
              <span className="text-white font-medium">Lagartija Nick</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gris-light text-sm">Ano:</span>
              <span className="text-white font-medium">1996</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gris-light text-sm">Artista:</span>
              <span className="text-white font-medium">Fotografo desconocido</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <span className="bg-rojo/20 text-rojo px-3 py-1 rounded-full text-sm border border-rojo/30">
              Conciertos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
