import { NextResponse } from "next/server";
import { reservaSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = reservaSchema.parse(body);

    return NextResponse.json({
      success: true,
      reserva: { id: 1, ...validated },
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Datos inválidos", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
