import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db/client";
import { galeriaFotos } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

const createPhotoSchema = z.object({
  titulo: z.string().min(1),
  descripcion: z.string().optional(),
  url_foto: z.string().min(1),
  banda: z.string().optional(),
  anio: z.number().nullable().optional(),
  artista: z.string().optional(),
  categoria: z.enum(["conciertos", "estudio", "personajes", "mementos"]),
  destacada: z.boolean().optional(),
});

export async function GET() {
  const photos = await db
    .select()
    .from(galeriaFotos)
    .orderBy(asc(galeriaFotos.orden));
  return NextResponse.json(photos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = createPhotoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 400 }
    );
  }

  const [newPhoto] = await db
    .insert(galeriaFotos)
    .values({
      titulo: result.data.titulo,
      descripcion: result.data.descripcion,
      urlFoto: result.data.url_foto,
      banda: result.data.banda,
      anio: result.data.anio ?? undefined,
      artista: result.data.artista,
      categoria: result.data.categoria,
      destacada: result.data.destacada ?? false,
    })
    .returning();

  return NextResponse.json(newPhoto, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  await db.delete(galeriaFotos).where(eq(galeriaFotos.id, Number(id)));
  return NextResponse.json({ ok: true });
}
