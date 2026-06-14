import Link from "next/link";

export function SobreEric() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-negro-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
            Eric Jiménez
          </h2>
          <div className="mt-3 w-24 h-1 bg-ambar rounded-full" />

          <p className="mt-6 text-lg text-gris-light leading-relaxed">
            Batería de{" "}
            <span className="text-white font-semibold">Los Planetas</span>,{" "}
            <span className="text-white font-semibold">Lagartija Nick</span> y{" "}
            <span className="text-white font-semibold">Los Evangelistas</span>.
            Durante 20 años consecutivos ha sido galardonado con el Premio al
            Mejor Batería español.
          </p>

          <p className="mt-4 text-lg text-gris-light leading-relaxed">
            Autor de los libros{" "}
            <em className="text-ambar">&quot;Cuatro millones de golpes&quot;</em>{" "}
            y{" "}
            <em className="text-ambar">
              &quot;Viaje al centro de mi cerebro&quot;
            </em>
            . Protagonista del documental{" "}
            <em className="text-ambar">
              &quot;La importancia de llamarse Ernesto…&quot;
            </em>
            .
          </p>

          <p className="mt-4 text-lg text-gris-light leading-relaxed">
            En 2013 abrió las puertas de El Bar de Eric, convirtiendo su pasión
            por la música y la gastronomía en un espacio único en Granada.
          </p>

          <div className="mt-8">
            <Link
              href="/sobre-eric"
              className="text-dorado hover:text-ambar transition-colors font-semibold text-lg"
            >
              Conocer más →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="relative w-full max-w-md aspect-square bg-negro rounded-xl border border-dorado/10 overflow-hidden"
            style={{
              backgroundImage: "url('/images/bar-real/logo-eric-bateria.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
