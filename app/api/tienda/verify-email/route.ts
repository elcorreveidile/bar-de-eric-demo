import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { db } from "@/lib/db/client";
import { magicTokens } from "@/lib/db/schema";
import { sendCheckoutLink } from "@/lib/email";

export async function POST(req: NextRequest) {
  const { email } = (await req.json()) as { email?: string };

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  const token = randomUUID();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

  await db.insert(magicTokens).values({ email, token, expiresAt });
  await sendCheckoutLink(email, token);

  return NextResponse.json({ ok: true });
}
