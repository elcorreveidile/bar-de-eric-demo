import Link from "next/link";

const tapas = [
  {
    name: "Inercia",
    nombreReal: "Carpaccio de Calabacín",
    description: "Finas láminas de calabacín con limón, parmesano rallado, rúcula, aceite, pimentón, soja y sésamo caramelizado.",
    price: "8€",
    image: "/images/menu/tapa-1.png",
  },
  {
    name: "Omega",
    nombreReal: "Ensaladilla Tártara de Atún",
    description: "Ensaladilla de patatas con salsa tártara, atún, huevo cocido, alcaparras, aceitunas negras y mostaza.",
    price: "11€",
    image: "/images/menu/tapa-2.png",
  },
  {
    name: "Sonic Youth",
    nombreReal: "Ravioli de Salmón",
    description: "Rollito de pasta brick relleno de salmón ahumado, queso crema, reducción de yogur griego.",
    price: "13,50€",
    image: "/images/menu/tapa-4.png",
  },
  {
    name: "Satisfaction",
    nombreReal: "Rollitos Crujientes de Lomo",
    description: "Rollitos de pasta filo rellenos de lomo a la leña con vinagreta de miel y mostaza.",
    price: "13,40€",
    image: "/images/menu/tapa-6.png",
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
              <p className="text-sm text-ambar/70 mt-1 italic">{tapa.nombreReal}</p>
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
