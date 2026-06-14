import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { db } from "@/lib/db/client";
import { magicTokens } from "@/lib/db/schema";
import { sendMagicLink } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email_required" }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && email.toLowerCase() !== adminEmail.toLowerCase()) {
      return NextResponse.json({ ok: true });
    }

    const token = randomUUID();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    try {
      await db.insert(magicTokens).values({ email, token, expiresAt });
    } catch (dbErr) {
      console.error("[auth/signin] DB error:", dbErr);
      return NextResponse.json(
        { error: "db_error", detail: String(dbErr) },
        { status: 500 }
      );
    }

    try {
      await sendMagicLink(email, token);
    } catch (emailErr) {
      console.error("[auth/signin] Email error:", emailErr);
      return NextResponse.json(
        { error: "email_error", detail: String(emailErr) },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[auth/signin] Unexpected error:", err);
    return NextResponse.json(
      { error: "unexpected_error", detail: String(err) },
      { status: 500 }
    );
  }
}
