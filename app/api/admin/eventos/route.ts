import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { eventosProgramacion } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  const eventos = await db
    .select()
    .from(eventosProgramacion)
    .orderBy(asc(eventosProgramacion.fecha));
  return NextResponse.json(eventos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { titulo, tipo, descripcion, fecha, hora, artistaBanda, aforoMaximo, entradaLibre, precioEntrada, imagen } = body;

  if (!titulo || !fecha) {
    return NextResponse.json({ error: "Título y fecha requeridos" }, { status: 400 });
  }

  const slug = titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const [newEvento] = await db
    .insert(eventosProgramacion)
    .values({
      titulo,
      slug,
      tipo: tipo || "concierto",
      descripcion,
      fecha,
      hora,
      artistaBanda,
      aforoMaximo,
      entradaLibre: entradaLibre ?? true,
      precioEntrada,
      imagen,
      estado: "programado",
    })
    .returning();

  return NextResponse.json(newEvento, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  await db.delete(eventosProgramacion).where(eq(eventosProgramacion.id, Number(id)));
  return NextResponse.json({ ok: true });
}
