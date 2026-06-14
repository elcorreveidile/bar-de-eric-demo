import { NextResponse } from "next/server";
import { pedidoSchema } from "@/lib/validators";
import { generateReferenceNumber } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = pedidoSchema.parse(body);
    const numeroReferencia = generateReferenceNumber();

    return NextResponse.json({
      success: true,
      pedido: {
        id: 1,
        numeroReferencia,
        ...validated,
        estado: "pendiente",
        createdAt: new Date().toISOString(),
      },
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
