import Link from "next/link";

const tapas = [
  {
    name: "Inercia",
    band: "Lagartija Nick",
    description: "Croquetas de jamón ibérico",
    price: "6€",
    image: "/images/bar-real/tapa-salmorejo.jpg",
  },
  {
    name: "Omega",
    band: "Lagartija Nick + Morente",
    description: "Tabla de quesos y jamón",
    price: "12€",
    image: "/images/bar-real/tapa-gourmet.jpg",
  },
  {
    name: "Qué Puedo Hacer",
    band: "Los Planetas",
    description: "Camarones al ajillo",
    price: "7€",
    image: "/images/bar-real/tapa-salmorejo.jpg",
  },
  {
    name: "Keith Moon",
    band: "The Who",
    description: "Surtido de carnes a la brasa",
    price: "10€",
    image: "/images/bar-real/tapa-gourmet.jpg",
  },
];

export function MenuPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-negro-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-dorado">
            Tapas con Nombre de Canción
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-ambar rounded-full" />
          <p className="mt-4 text-gris-light text-lg max-w-2xl mx-auto">
            Cada plato es un homenaje a la música que suena entre estas paredes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tapas.map((tapa) => (
            <div
              key={tapa.name}
              className="bg-negro rounded-xl overflow-hidden border border-ambar/15 hover:border-ambar/35 transition-colors"
            >
              <div
                className="relative aspect-[16/9] bg-negro-light bg-blend-overlay"
                style={{
                  backgroundImage: `url('${tapa.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/20 to-transparent" />
              </div>
              <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-bold text-white">
                  {tapa.name}
                </h3>
                <span className="text-ambar font-bold text-lg shrink-0 ml-2">
                  {tapa.price}
                </span>
              </div>
              <p className="text-sm text-ambar/70 mt-1 italic">{tapa.band}</p>
              <p className="text-gris-light mt-3">{tapa.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="text-dorado hover:text-dorado-dark transition-colors font-semibold text-lg"
          >
            Ver menú completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
