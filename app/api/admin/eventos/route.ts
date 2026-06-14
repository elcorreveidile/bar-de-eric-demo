import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const eventos = [
  { id: "1", titulo: "Noche de Blues", slug: "noche-de-blues", tipo: "Concierto", fecha: "2026-06-20", hora: "21:00", estado: "confirmado" },
  { id: "2", titulo: "Expo Rock Granadino", slug: "expo-rock-granadino", tipo: "Exposición", fecha: "2026-06-25", hora: "19:00", estado: "borrador" },
  { id: "3", titulo: "Guía Rockera por el Albaicín", slug: "guia-rockera-albaicin", tipo: "Guía Rockera", fecha: "2026-07-01", hora: "11:00", estado: "confirmado" },
];

const createEventoSchema = z.object({
  titulo: z.string().min(1),
  slug: z.string().min(1),
  tipo: z.enum(["Concierto", "Exposición", "Guía Rockera", "Taller"]),
  descripcion: z.string().optional(),
  fecha: z.string().min(1),
  hora: z.string().min(1),
  artista_banda: z.string().optional(),
  aforo_maximo: z.number().nullable().optional(),
  entrada_libre: z.boolean().optional(),
  precio_entrada: z.number().nullable().optional(),
  imagen: z.string().optional(),
});

export async function GET() {
  return NextResponse.json(eventos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = createEventoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 400 }
    );
  }

  const newEvento = { id: String(Date.now()), estado: "borrador", ...result.data };
  return NextResponse.json(newEvento, { status: 201 });
}
