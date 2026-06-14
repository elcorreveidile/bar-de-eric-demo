import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const manana = new Date();
  manana.setDate(manana.getDate() + 1);
  const fechaManana = manana.toISOString().slice(0, 10);

  return NextResponse.json({
    success: true,
    fecha: fechaManana,
    recordatoriosEnviados: 0,
    message: "Recordatorios procesados para reservas de mañana",
  });
}
