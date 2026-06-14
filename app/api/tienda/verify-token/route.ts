import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { magicTokens } from "@/lib/db/schema";
import { eq, and, gt } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token requerido" }, { status: 400 });
  }

  const [record] = await db
    .select()
    .from(magicTokens)
    .where(and(eq(magicTokens.token, token), gt(magicTokens.expiresAt, new Date())))
    .limit(1);

  if (!record) {
    return NextResponse.json({ error: "Token inválido o expirado" }, { status: 401 });
  }

  await db.delete(magicTokens).where(eq(magicTokens.token, token));

  return NextResponse.json({ email: record.email });
}
