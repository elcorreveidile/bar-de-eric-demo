import Link from "next/link";
import type { Metadata } from "next";
import { db } from "@/lib/db/client";
import { galeriaFotos } from "@/lib/db/schema";
import { asc } from "drizzle-orm";
import { GaleriaAdmin } from "@/components/dashboard/GaleriaAdmin";

export const metadata: Metadata = { title: "Gestión Galería" };
export const dynamic = "force-dynamic";

export default async function GaleriaPage() {
  const photos = await db.select().from(galeriaFotos).orderBy(asc(galeriaFotos.orden));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl md:text-3xl text-dorado">
          Gestión de Galería
        </h2>
        <Link
          href="/dashboard/galeria/subir-foto"
          className="bg-rojo hover:bg-rojo/80 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          Subir Foto
        </Link>
      </div>

      {photos.length === 0 ? (
        <div className="bg-negro-light rounded-lg border border-dorado/20 p-8 text-center">
          <p className="text-gris-light">No hay fotos en la galería todavía.</p>
          <Link
            href="/dashboard/galeria/subir-foto"
            className="text-dorado hover:text-dorado-dark text-sm underline mt-2 inline-block"
          >
            Sube la primera foto
          </Link>
        </div>
      ) : (
        <GaleriaAdmin photos={photos} />
      )}
    </div>
  );
}
