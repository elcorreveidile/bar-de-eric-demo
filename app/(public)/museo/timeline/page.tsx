import { TimelineMusical } from "@/components/museo/TimelineMusical";

export const metadata = {
  title: "Timeline Musical",
};

export default function TimelinePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Timeline Musical: 1982-2024
        </h1>
        <p className="text-gris-light max-w-2xl mx-auto text-lg">
          Un recorrido por los momentos clave del rock granadino y su
          conexion con El Bar de Eric.
        </p>
      </div>

      <TimelineMusical />
    </div>
  );
}
