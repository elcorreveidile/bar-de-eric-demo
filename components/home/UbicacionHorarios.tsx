import Link from "next/link";

export function UbicacionHorarios() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
          Encuéntranos
        </h2>
        <div className="mt-3 mx-auto w-24 h-1 bg-dorado rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Dirección
            </h3>
            <p className="text-gris-light text-lg">
              Calle Escuelas 8, Centro
              <br />
              18001 Granada
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Teléfono
            </h3>
            <a
              href="tel:+34958276301"
              className="text-dorado hover:text-dorado-dark transition-colors text-lg"
            >
              +34 958 276 301
            </a>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Horario
            </h3>
            <div className="space-y-2 text-lg text-gris-light">
              <div className="flex justify-between max-w-xs">
                <span>Lunes a Sábado</span>
                <span className="text-white">09:00 - 02:00</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Domingo</span>
                <span className="text-white">Horario variable</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Valoraciones
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dorado"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-dorado/40"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-white font-semibold">4.3/5</span>
              <span className="text-gris-light">(1244 valoraciones)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://maps.google.com/?q=Calle+Escuelas+8+Granada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-dorado text-dorado font-semibold hover:bg-dorado/10 transition-colors"
            >
              Cómo llegar
            </a>
            <Link
              href="/reservas"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-dorado text-negro font-semibold hover:bg-dorado-dark transition-colors"
            >
              Reservar mesa
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full aspect-square bg-negro-light rounded-xl border border-dorado/10 flex items-center justify-center">
            <div className="text-center px-6">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="mt-4 text-gris-light text-sm">
                Mapa — Calle Escuelas 8, Granada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
