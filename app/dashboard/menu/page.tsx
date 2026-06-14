import type { Metadata } from "next";
import { db } from "@/lib/db/client";
import { menuItems, menuCategories } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import { MenuAdmin } from "@/components/dashboard/MenuAdmin";

export const metadata: Metadata = { title: "Gestión Menú" };
export const dynamic = "force-dynamic";

export default async function MenuPage() {
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

  return (
    <div className="space-y-6">
      <MenuAdmin initialItems={items} />
    </div>
  );
}
