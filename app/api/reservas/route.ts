import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { reservas } from "@/lib/db/schema";

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, fecha, hora, comensales, observaciones } =
      await request.json();

    if (!nombre || !email || !fecha || !hora) {
      return NextResponse.json(
        { success: false, error: "Nombre, email, fecha y hora son obligatorios" },
        { status: 400 }
      );
    }

    const [reserva] = await db
      .insert(reservas)
      .values({
        nombre,
        email,
        telefono: telefono || null,
        fecha,
        hora,
        comensales: comensales || 2,
        observaciones: observaciones || null,
        estado: "pendiente",
      })
      .returning();

    return NextResponse.json({ success: true, reserva });
  } catch (err) {
    console.error("[api/reservas] Error:", err);
    return NextResponse.json(
      { success: false, error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
}
