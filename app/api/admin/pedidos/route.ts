import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";

const pedidos = [
  { id: "1", referencia: "P-0042", cliente: "Mesa 3", telefono: "-", total: 18.5, estado: "pendiente", hora: "14:30" },
  { id: "2", referencia: "P-0043", cliente: "Carlos Ruiz", telefono: "600123456", total: 12.0, estado: "preparando", hora: "14:35" },
  { id: "3", referencia: "P-0044", cliente: "Mesa 7", telefono: "-", total: 25.0, estado: "listo", hora: "14:10" },
  { id: "4", referencia: "P-0045", cliente: "Ana García", telefono: "600654321", total: 9.5, estado: "recogido", hora: "13:50" },
];

const patchSchema = z.object({
  id: z.string().min(1),
  estado: z.enum(["pendiente", "preparando", "listo", "recogido"]),
});

export async function GET() {
  return NextResponse.json(pedidos);
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

  const pedido = pedidos.find((p) => p.id === result.data.id);
  if (!pedido) {
    return NextResponse.json({ error: "Pedido no encontrado" }, { status: 404 });
  }

  const updated = { ...pedido, estado: result.data.estado };
  return NextResponse.json(updated);
}
