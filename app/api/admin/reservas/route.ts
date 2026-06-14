import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { reservas } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET() {
  const allReservas = await db.select().from(reservas).orderBy(desc(reservas.fecha));
  return NextResponse.json(allReservas);
}

export async function PATCH(request: NextRequest) {
  const { id, estado } = await request.json();
  if (!id || !estado) {
    return NextResponse.json({ error: "ID y estado requeridos" }, { status: 400 });
  }
  const [updated] = await db
    .update(reservas)
    .set({ estado })
    .where(eq(reservas.id, Number(id)))
    .returning();
  return NextResponse.json(updated);
}
