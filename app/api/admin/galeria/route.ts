import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const photos = [
  { id: "1", titulo: "Nirvana en Concierto 1992", categoria: "Conciertos", banda: "Nirvana", url_foto: "/placeholder.jpg", destacada: true },
  { id: "2", titulo: "Eric con Los Planetas", categoria: "Personajes", banda: "Los Planetas", url_foto: "/placeholder.jpg", destacada: false },
  { id: "3", titulo: "Lagartija Nick - Estudio", categoria: "Estudio", banda: "Lagartija Nick", url_foto: "/placeholder.jpg", destacada: true },
];

const createPhotoSchema = z.object({
  titulo: z.string().min(1),
  descripcion: z.string().optional(),
  url_foto: z.string().min(1),
  banda: z.string().optional(),
  anio: z.number().nullable().optional(),
  artista: z.string().optional(),
  categoria: z.enum(["Conciertos", "Estudio", "Personajes", "Mementos"]),
  destacada: z.boolean().optional(),
});

export async function GET() {
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

  const newPhoto = { id: String(Date.now()), ...result.data };
  return NextResponse.json(newPhoto, { status: 201 });
}
