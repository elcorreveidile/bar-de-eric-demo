import type { Metadata } from "next";
import { EventoForm } from "@/components/dashboard/EventoForm";

export const metadata: Metadata = { title: "Nuevo Evento" };

export default function CrearEventoPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        Nuevo Evento
      </h2>
      <EventoForm />
    </div>
  );
}
