import { MenuCategories } from "@/components/menu/MenuCategories";

export const metadata = {
  title: "Menu",
};

export default function MenuPage() {
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

      <MenuCategories />
    </div>
    </div>
    </div>
  );
}
