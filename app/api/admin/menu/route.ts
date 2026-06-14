import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { menuItems, menuCategories } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  const items = await db
    .select({
      id: menuItems.id,
      nombre: menuItems.nombre,
      slug: menuItems.slug,
      categoryId: menuItems.categoryId,
      descripcion: menuItems.descripcion,
      precio: menuItems.precio,
      imagen: menuItems.imagen,
      disponible: menuItems.disponible,
      banda: menuItems.banda,
      orden: menuItems.orden,
      categoriaNombre: menuCategories.nombre,
    })
    .from(menuItems)
    .leftJoin(menuCategories, eq(menuItems.categoryId, menuCategories.id))
    .orderBy(asc(menuItems.orden));
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nombre, categoryId, descripcion, precio, imagen, banda, disponible } = body;

  if (!nombre || !precio) {
    return NextResponse.json({ error: "Nombre y precio requeridos" }, { status: 400 });
  }

  const slug = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const [newItem] = await db
    .insert(menuItems)
    .values({
      nombre,
      slug,
      categoryId: categoryId ? Number(categoryId) : null,
      descripcion,
      precio: Math.round(precio * 100),
      imagen,
      banda,
      disponible: disponible ?? true,
    })
    .returning();

  return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }
  await db.delete(menuItems).where(eq(menuItems.id, Number(id)));
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { id, ...fields } = body;

  if (!id) {
    return NextResponse.json({ error: "ID requerido" }, { status: 400 });
  }

  const updateData: Record<string, unknown> = {};

  if (fields.nombre !== undefined) updateData.nombre = fields.nombre;
  if (fields.descripcion !== undefined) updateData.descripcion = fields.descripcion;
  if (fields.precio !== undefined) updateData.precio = fields.precio;
  if (fields.imagen !== undefined) updateData.imagen = fields.imagen;
  if (fields.disponible !== undefined) updateData.disponible = fields.disponible;
  if (fields.categoryId !== undefined) updateData.categoryId = fields.categoryId ? Number(fields.categoryId) : null;

  const [updated] = await db
    .update(menuItems)
    .set(updateData)
    .where(eq(menuItems.id, Number(id)))
    .returning();

  return NextResponse.json(updated);
}
