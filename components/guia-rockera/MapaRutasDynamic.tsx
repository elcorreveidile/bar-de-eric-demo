"use client";

import dynamic from "next/dynamic";
import type { Ruta } from "@/lib/rutas-data";

const MapaRutas = dynamic(() => import("./MapaRutas"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[21/9] rounded-xl bg-negro-light border border-gris/20 flex items-center justify-center" style={{ minHeight: 350 }}>
      <p className="text-gris-light text-sm">Cargando mapa...</p>
    </div>
  ),
});

export function MapaRutasDynamic({ rutas, rutaActiva }: { rutas: Ruta[]; rutaActiva?: string }) {
  return <MapaRutas rutas={rutas} rutaActiva={rutaActiva} />;
}
