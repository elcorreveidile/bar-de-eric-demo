"use client";

import { useEffect, useRef, useState } from "react";
import type { Ruta } from "@/lib/rutas-data";

interface MapaRutasProps {
  rutas: Ruta[];
  rutaActiva?: string;
}

export default function MapaRutas({ rutas, rutaActiva }: MapaRutasProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selected, setSelected] = useState(rutaActiva || "todas");

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
      }).setView([37.1770, -3.5950], 14);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;

      drawRoutes(L, map, rutas, selected);
    })();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    (async () => {
      const L = await import("leaflet");
      drawRoutes(L, mapInstanceRef.current!, rutas, selected);
    })();
  }, [selected, rutas]);

  return (
    <div>
      {!rutaActiva && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelected("todas")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === "todas"
                ? "bg-dorado text-negro"
                : "bg-negro-light text-gris-light border border-gris/30 hover:text-dorado"
            }`}
          >
            Todas las rutas
          </button>
          {rutas.map((r) => (
            <button
              key={r.slug}
              onClick={() => setSelected(r.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selected === r.slug
                  ? "text-negro"
                  : "bg-negro-light text-gris-light border border-gris/30 hover:text-dorado"
              }`}
              style={
                selected === r.slug
                  ? { backgroundColor: r.color }
                  : undefined
              }
            >
              {r.titulo}
            </button>
          ))}
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full aspect-[21/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-gris/20"
        style={{ minHeight: 350 }}
      />
    </div>
  );
}

function drawRoutes(
  L: typeof import("leaflet"),
  map: L.Map,
  rutas: Ruta[],
  selected: string
) {
  map.eachLayer((layer) => {
    if (!(layer as L.TileLayer).getTileUrl) {
      map.removeLayer(layer);
    }
  });

  const rutasToShow = selected === "todas" ? rutas : rutas.filter((r) => r.slug === selected);
  const allBounds: L.LatLng[] = [];

  rutasToShow.forEach((ruta) => {
    const latlngs = ruta.paradas.map(
      (p) => L.latLng(p.lat, p.lng)
    );
    allBounds.push(...latlngs);

    L.polyline(latlngs, {
      color: ruta.color,
      weight: 3,
      opacity: 0.7,
      dashArray: "8 6",
    }).addTo(map);

    ruta.paradas.forEach((parada, i) => {
      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background: ${ruta.color};
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
        ">${i + 1}</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      L.marker([parada.lat, parada.lng], { icon })
        .bindPopup(
          `<div style="max-width:220px">
            <strong style="color:${ruta.color}">${i + 1}. ${parada.nombre}</strong>
            <p style="margin:4px 0 0;font-size:12px;line-height:1.4">${parada.descripcion}</p>
          </div>`
        )
        .addTo(map);
    });
  });

  if (allBounds.length > 0) {
    map.fitBounds(L.latLngBounds(allBounds).pad(0.1));
  }
}
