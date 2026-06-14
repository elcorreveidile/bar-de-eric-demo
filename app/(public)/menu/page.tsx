import { db } from "@/lib/db/client";
import { menuItems, menuCategories } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import { MenuCategories } from "@/components/menu/MenuCategories";

export const metadata = {
  title: "Menu",
};

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const cats = await db
    .select()
    .from(menuCategories)
    .where(eq(menuCategories.activa, true))
    .orderBy(asc(menuCategories.orden));

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
      orden: menuItems.orden,
    })
    .from(menuItems)
    .where(eq(menuItems.disponible, true))
    .orderBy(asc(menuItems.orden));

  const categoriaNames = cats.map((c) => c.nombre);
  const itemsWithCat = items.map((item) => ({
    ...item,
    categoria: cats.find((c) => c.id === item.categoryId)?.nombre ?? "Sin categoría",
  }));

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-menu.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Para Comer
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Una comida mediterránea con toques internacionales, en movimiento día tras día
        </p>
        <p className="text-ambar/60 text-sm mt-2">
          Tapa extra: 2,80€ · Todos los precios llevan IVA incluido
        </p>
      </div>

      <MenuCategories categorias={categoriaNames} items={itemsWithCat} />
    </div>
    </div>
    </div>
  );
}
