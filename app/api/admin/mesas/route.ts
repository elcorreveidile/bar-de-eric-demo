import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { mesas } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  const allMesas = await db.select().from(mesas).orderBy(asc(mesas.numero));
  return NextResponse.json(allMesas);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { numero, capacidad, ubicacion } = body;

  if (!numero || !capacidad) {
    return NextResponse.json({ error: "Número y capacidad requeridos" }, { status: 400 });
  }

  const [newMesa] = await db
    .insert(mesas)
    .values({ numero, capacidad, ubicacion: ubicacion || "interior" })
    .returning();

  return NextResponse.json(newMesa, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const { id, activa } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  const [updated] = await db
    .update(mesas)
    .set({ activa })
    .where(eq(mesas.id, id))
    .returning();
  return NextResponse.json(updated);
}
