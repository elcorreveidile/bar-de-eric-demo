import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-negro-light bg-blend-overlay"
        style={{
          backgroundImage: "url('/images/bar-real/neon-fachada.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 85%",
          transform: "scaleX(-1)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,0,0,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,215,0,0.05) 0%, transparent 50%), linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(17,17,17,0.65) 100%)",
        }}
      />

      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,0.1) 35px, rgba(255,215,0,0.1) 36px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-dorado leading-tight tracking-wide">
          Donde la música se hace tapa
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-gris-light font-body">
          Bar museo del rock en Granada — Desde 2013
        </p>

        <p className="mt-4 text-lg text-gris-light/80 max-w-2xl mx-auto">
          170+ fotografías históricas · Tapas con nombre de canción · Eventos en vivo
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/museo"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-dorado text-negro font-semibold text-lg hover:bg-dorado-dark transition-colors"
          >
            Explorar Museo
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-dorado text-dorado font-semibold text-lg hover:bg-dorado/10 transition-colors"
          >
            Ver Menú
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-dorado/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
