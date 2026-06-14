import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";

const reservas = [
  { id: "1", nombre: "Carlos Ruiz", email: "carlos@email.com", fecha: "2026-06-14", hora: "20:30", comensales: 4, mesa: 3, estado: "pendiente" },
  { id: "2", nombre: "Ana García", email: "ana@email.com", fecha: "2026-06-14", hora: "21:00", comensales: 2, mesa: 1, estado: "confirmada" },
  { id: "3", nombre: "Pedro López", email: "pedro@email.com", fecha: "2026-06-14", hora: "21:30", comensales: 6, mesa: 4, estado: "pendiente" },
  { id: "4", nombre: "María Fernández", email: "maria@email.com", fecha: "2026-06-15", hora: "20:00", comensales: 3, mesa: 2, estado: "cancelada" },
  { id: "5", nombre: "Javier Moreno", email: "javier@email.com", fecha: "2026-06-15", hora: "21:00", comensales: 2, mesa: 5, estado: "confirmada" },
];

const patchSchema = z.object({
  id: z.string().min(1),
  estado: z.enum(["pendiente", "confirmada", "cancelada"]),
});

export async function GET() {
  return NextResponse.json(reservas);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const result = patchSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 400 }
    );
  }

  const reserva = reservas.find((r) => r.id === result.data.id);
  if (!reserva) {
    return NextResponse.json({ error: "Reserva no encontrada" }, { status: 404 });
  }

  const updated = { ...reserva, estado: result.data.estado };
  return NextResponse.json(updated);
}
