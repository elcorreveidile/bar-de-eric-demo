import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";

const menuItems = [
  { id: "1", nombre: "Bowie's Bravas", slug: "bowies-bravas", categoryId: "tapas-clasicas", descripcion: "Patatas bravas con salsa especial", precio: 4.5, disponible: true },
  { id: "2", nombre: "Hendrix al Ajillo", slug: "hendrix-al-ajillo", categoryId: "tapas-calientes", descripcion: "Gambas al ajillo estilo Hendrix", precio: 5.0, disponible: true },
  { id: "3", nombre: "Nirvana Nachos", slug: "nirvana-nachos", categoryId: "para-compartir", descripcion: "Nachos con guacamole y queso", precio: 7.5, disponible: false },
];

const createMenuSchema = z.object({
  nombre: z.string().min(1),
  slug: z.string().min(1),
  categoryId: z.string().min(1),
  descripcion: z.string().optional(),
  receta: z.string().optional(),
  precio: z.number().positive(),
  imagen: z.string().optional(),
  historiaMusicales: z.string().optional(),
  banda: z.string().optional(),
  anio: z.number().nullable().optional(),
  alergenos: z.array(z.string()).optional(),
  disponible: z.boolean().optional(),
});

export async function GET() {
  return NextResponse.json(menuItems);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = createMenuSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 400 }
    );
  }

  const newItem = { id: String(Date.now()), ...result.data };
  return NextResponse.json(newItem, { status: 201 });
}
