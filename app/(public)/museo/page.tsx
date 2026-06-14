import Link from "next/link";
import { GaleriaFotos } from "@/components/museo/GaleriaFotos";

export const metadata = {
  title: "Museo del Rock",
};

export default function MuseoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          El Museo del Rock
        </h1>
        <p className="text-gris-light max-w-2xl mx-auto text-lg leading-relaxed">
          Mas de 170 fotografias que cuentan la historia del rock en Granada y
          mas alla. Desde los primeros conciertos de KGB hasta las ultimas
          noches en El Bar de Eric, cada imagen es un fragmento de nuestra
          memoria musical.
        </p>
      </div>

      <GaleriaFotos />

      <div className="mt-16 text-center">
        <Link
          href="/museo/timeline"
          className="inline-flex items-center gap-2 bg-rojo hover:bg-rojo/80 text-white font-display text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Ver Timeline Musical →
        </Link>
      </div>
    </div>
  );
}
