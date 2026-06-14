import { CalendarioEventos } from "@/components/eventos/CalendarioEventos";

export const metadata = {
  title: "Programacion",
};

export default function ProgramacionPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-programacion.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Programacion
        </h1>
        <p className="text-gris-light text-lg max-w-2xl mx-auto">
          Conciertos, exposiciones, rutas rockeras y mucho mas en El Bar de
          Eric.
        </p>
      </div>

      <CalendarioEventos />
    </div>
    </div>
    </div>
  );
}
