import type { Metadata } from "next";
import { db } from "@/lib/db/client";
import { eventosProgramacion } from "@/lib/db/schema";
import { asc } from "drizzle-orm";
import { EventosAdmin } from "@/components/dashboard/EventosAdmin";

export const metadata: Metadata = { title: "Gestión Eventos" };
export const dynamic = "force-dynamic";

export default async function EventosPage() {
  const eventos = await db
    .select()
    .from(eventosProgramacion)
    .orderBy(asc(eventosProgramacion.fecha));

  return (
    <div className="space-y-6">
      <EventosAdmin initialEventos={eventos} />
    </div>
  );
}
