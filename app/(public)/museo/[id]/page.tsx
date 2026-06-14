import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db/client";
import { galeriaFotos } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const metadata = {
  title: "Detalle de Foto",
};

export const dynamic = "force-dynamic";

const categoriasLabel: Record<string, string> = {
  conciertos: "Conciertos",
  estudio: "Estudio",
  personajes: "Personajes",
  mementos: "Mementos",
};

export default async function FotoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fotoId = Number(id);

  if (!Number.isInteger(fotoId)) {
    notFound();
  }

  const [foto] = await db
    .select()
    .from(galeriaFotos)
    .where(eq(galeriaFotos.id, fotoId))
    .limit(1);

  if (!foto) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/museo"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver a la galeria
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div
          className="aspect-[4/3] bg-negro-light rounded-lg border border-gris/30"
          style={{
            backgroundImage: `url('${foto.urlFoto}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="sr-only">{foto.titulo}</span>
        </div>

        <div className="space-y-6">
          <h1 className="font-display text-3xl font-bold text-dorado">
            {foto.titulo}
          </h1>
          {foto.descripcion && (
            <p className="text-gris-light leading-relaxed">
              {foto.descripcion}
            </p>
          )}

          <div className="space-y-3">
            {foto.banda && (
              <div className="flex items-center gap-3">
                <span className="text-gris-light text-sm">Banda:</span>
                <span className="text-white font-medium">{foto.banda}</span>
              </div>
            )}
            {foto.anio && (
              <div className="flex items-center gap-3">
                <span className="text-gris-light text-sm">Año:</span>
                <span className="text-white font-medium">{foto.anio}</span>
              </div>
            )}
            {foto.artista && (
              <div className="flex items-center gap-3">
                <span className="text-gris-light text-sm">Artista:</span>
                <span className="text-white font-medium">{foto.artista}</span>
              </div>
            )}
          </div>

          {foto.categoria && (
            <div className="flex gap-3 pt-4">
              <span className="bg-rojo/20 text-rojo px-3 py-1 rounded-full text-sm border border-rojo/30">
                {categoriasLabel[foto.categoria] ?? foto.categoria}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
