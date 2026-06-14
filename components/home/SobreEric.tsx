import Link from "next/link";

export function SobreEric() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-negro-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
            Eric Jiménez
          </h2>
          <div className="mt-3 w-24 h-1 bg-dorado rounded-full" />

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
            <em className="text-dorado-dark">&quot;Cuatro millones de golpes&quot;</em>{" "}
            y{" "}
            <em className="text-dorado-dark">
              &quot;Viaje al centro de mi cerebro&quot;
            </em>
            . Protagonista del documental{" "}
            <em className="text-dorado-dark">
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
              className="text-dorado hover:text-dorado-dark transition-colors font-semibold text-lg"
            >
              Conocer más →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* PLACEHOLDER: reemplazar por imagen real en preproducción */}
          <div
            className="relative w-full max-w-md aspect-[3/4] bg-negro bg-blend-overlay rounded-xl border border-dorado/10 flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/equipo/eric.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 text-center px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-dorado/30 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="mt-4 text-gris-light text-sm">Foto de Eric Jiménez</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
