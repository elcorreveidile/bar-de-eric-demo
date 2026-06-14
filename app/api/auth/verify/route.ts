import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { magicTokens } from "@/lib/db/schema";
import { eq, and, gt } from "drizzle-orm";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  const [record] = await db
    .select()
    .from(magicTokens)
    .where(and(eq(magicTokens.token, token), gt(magicTokens.expiresAt, new Date())))
    .limit(1);

  if (!record) {
    return NextResponse.redirect(new URL("/auth/verify?error=invalid", req.url));
  }

  await db.delete(magicTokens).where(eq(magicTokens.token, token));

  const sessionToken = randomUUID();
  const cookieStore = await cookies();
  cookieStore.set("next-auth.session-token", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
