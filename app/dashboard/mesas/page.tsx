import type { Metadata } from "next";
import { db } from "@/lib/db/client";
import { mesas } from "@/lib/db/schema";
import { asc } from "drizzle-orm";
import { MesasAdmin } from "@/components/dashboard/MesasAdmin";

export const metadata: Metadata = { title: "Gestión Mesas" };
export const dynamic = "force-dynamic";

export default async function MesasPage() {
  const allMesas = await db.select().from(mesas).orderBy(asc(mesas.numero));

  return (
    <div className="space-y-6">
      <MesasAdmin initialMesas={allMesas} />
    </div>
  );
}
