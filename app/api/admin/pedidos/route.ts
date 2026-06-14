import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { pedidos } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET() {
  const allPedidos = await db.select().from(pedidos).orderBy(desc(pedidos.fechaHora));
  return NextResponse.json(allPedidos);
}

export async function PATCH(request: NextRequest) {
  const { id, estado } = await request.json();
  if (!id || !estado) {
    return NextResponse.json({ error: "ID y estado requeridos" }, { status: 400 });
  }
  const [updated] = await db
    .update(pedidos)
    .set({ estado })
    .where(eq(pedidos.id, Number(id)))
    .returning();
  return NextResponse.json(updated);
}
