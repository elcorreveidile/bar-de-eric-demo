import { MenuCategories } from "@/components/menu/MenuCategories";

export const metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Las Tapas del Rock
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Cada tapa cuenta una historia musical
        </p>
      </div>

      <MenuCategories />
    </div>
  );
}
