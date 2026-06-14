"use client";

import { useState } from "react";

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const franjas = [
  "12:00", "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00", "21:00",
  "22:00", "23:00", "00:00",
];

const disponibilidadDemo: Record<string, Record<string, boolean>> = {
  Lun: { "12:00": true, "13:00": true, "14:00": true, "15:00": false, "16:00": false, "17:00": false, "18:00": true, "19:00": true, "20:00": true, "21:00": true, "22:00": true, "23:00": true, "00:00": false },
  Mar: { "12:00": true, "13:00": true, "14:00": false, "15:00": false, "16:00": false, "17:00": false, "18:00": true, "19:00": true, "20:00": true, "21:00": true, "22:00": true, "23:00": true, "00:00": true },
  "Mié": { "12:00": true, "13:00": true, "14:00": true, "15:00": true, "16:00": false, "17:00": false, "18:00": true, "19:00": true, "20:00": false, "21:00": false, "22:00": true, "23:00": true, "00:00": true },
  Jue: { "12:00": true, "13:00": true, "14:00": true, "15:00": false, "16:00": false, "17:00": false, "18:00": true, "19:00": true, "20:00": true, "21:00": false, "22:00": false, "23:00": true, "00:00": true },
  Vie: { "12:00": false, "13:00": false, "14:00": false, "15:00": false, "16:00": false, "17:00": false, "18:00": true, "19:00": true, "20:00": false, "21:00": false, "22:00": false, "23:00": false, "00:00": false },
  "Sáb": { "12:00": true, "13:00": false, "14:00": false, "15:00": false, "16:00": false, "17:00": false, "18:00": false, "19:00": false, "20:00": false, "21:00": false, "22:00": false, "23:00": false, "00:00": false },
  Dom: { "12:00": true, "13:00": true, "14:00": true, "15:00": true, "16:00": false, "17:00": false, "18:00": false, "19:00": false, "20:00": false, "21:00": false, "22:00": false, "23:00": false, "00:00": false },
};

interface Props {
  onSelectSlot?: (fecha: string, hora: string) => void;
}

export function DisponibilidadCalendario({ onSelectSlot }: Props) {
  const [selected, setSelected] = useState<{ dia: string; hora: string } | null>(null);

  function handleClick(dia: string, hora: string, disponible: boolean) {
    if (!disponible) return;
    setSelected({ dia, hora });
    onSelectSlot?.(dia, hora);
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-8 gap-1 mb-4">
          <div className="text-xs text-gris-light p-2" />
          {diasSemana.map((dia) => (
            <div key={dia} className="text-center text-sm font-semibold text-dorado p-2">
              {dia}
            </div>
          ))}
        </div>

        {franjas.map((hora) => (
          <div key={hora} className="grid grid-cols-8 gap-1 mb-1">
            <div className="text-xs text-gris-light p-2 flex items-center">
              {hora}
            </div>
            {diasSemana.map((dia) => {
              const disponible = disponibilidadDemo[dia]?.[hora] ?? false;
              const isSelected = selected?.dia === dia && selected?.hora === hora;
              return (
                <button
                  key={`${dia}-${hora}`}
                  type="button"
                  onClick={() => handleClick(dia, hora, disponible)}
                  disabled={!disponible}
                  className={`p-2 rounded text-xs transition-colors ${
                    isSelected
                      ? "bg-dorado text-negro font-bold"
                      : disponible
                        ? "bg-green-900/40 border border-green-500/30 text-green-400 hover:bg-green-900/60 cursor-pointer"
                        : "bg-red-900/30 border border-red-500/20 text-red-400/50 cursor-not-allowed"
                  }`}
                >
                  {disponible ? "Libre" : "Lleno"}
                </button>
              );
            })}
          </div>
        ))}

        <div className="flex items-center gap-6 mt-4 text-xs text-gris-light">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-900/40 border border-green-500/30 inline-block" />
            Disponible
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-900/30 border border-red-500/20 inline-block" />
            Ocupado
          </span>
        </div>
      </div>
    </div>
  );
}
