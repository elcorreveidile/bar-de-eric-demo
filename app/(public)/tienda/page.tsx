import { TiendaGrid } from "@/components/tienda/TiendaGrid";

export const metadata = {
  title: "Tienda",
};

export default function TiendaPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-tienda.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          La Tienda de Eric
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Llévate un pedazo del rock granadino a casa. Camisetas, vinilos y el libro de Eric.
        </p>
      </div>

      <TiendaGrid />
    </div>
    </div>
    </div>
  );
}
