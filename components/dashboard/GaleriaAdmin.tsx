"use client";

import { useRouter } from "next/navigation";

interface Photo {
  id: number;
  titulo: string;
  descripcion: string | null;
  urlFoto: string;
  banda: string | null;
  anio: number | null;
  artista: string | null;
  categoria: string | null;
  orden: number | null;
  destacada: boolean | null;
}

export function GaleriaAdmin({ photos }: { photos: Photo[] }) {
  const router = useRouter();

  async function handleDelete(id: number) {
    if (!confirm("¿Eliminar esta foto?")) return;
    await fetch("/api/admin/galeria", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="bg-negro-light rounded-lg border border-dorado/20 overflow-hidden"
        >
          <div
            className="aspect-video bg-negro bg-cover bg-center"
            style={{ backgroundImage: `url('${photo.urlFoto}')` }}
          />
          <div className="p-3">
            <h3 className="text-white text-sm font-medium truncate">
              {photo.titulo}
            </h3>
            <p className="text-gris-light text-xs mt-1">
              {photo.categoria} {photo.banda ? `— ${photo.banda}` : ""}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleDelete(photo.id)}
                className="text-red-400 hover:text-red-300 text-xs underline"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
