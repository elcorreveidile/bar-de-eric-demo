import Link from "next/link";

const tapas = [
  {
    name: "Inercia",
    band: "Lagartija Nick",
    description: "Croquetas de jamón ibérico",
    price: "6€",
  },
  {
    name: "Omega",
    band: "Lagartija Nick + Morente",
    description: "Tabla de quesos y jamón",
    price: "12€",
  },
  {
    name: "Qué Puedo Hacer",
    band: "Los Planetas",
    description: "Camarones al ajillo",
    price: "7€",
  },
  {
    name: "Keith Moon",
    band: "The Who",
    description: "Surtido de carnes a la brasa",
    price: "10€",
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
          <div className="mt-3 mx-auto w-24 h-1 bg-dorado rounded-full" />
          <p className="mt-4 text-gris-light text-lg max-w-2xl mx-auto">
            Cada plato es un homenaje a la música que suena entre estas paredes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tapas.map((tapa) => (
            <div
              key={tapa.name}
              className="bg-negro rounded-xl p-6 border border-dorado/10 hover:border-dorado/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-bold text-white">
                  {tapa.name}
                </h3>
                <span className="text-dorado font-bold text-lg shrink-0 ml-2">
                  {tapa.price}
                </span>
              </div>
              <p className="text-sm text-dorado-dark mt-1 italic">{tapa.band}</p>
              <p className="text-gris-light mt-3">{tapa.description}</p>
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
