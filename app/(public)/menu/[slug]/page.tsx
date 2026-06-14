import Link from "next/link";

export const metadata = {
  title: "Detalle del Plato",
};

const platos: Record<string, { nombre: string; nombreReal: string; descripcion: string; precio: number; imagen: string }> = {
  "inercia": { nombre: "Inercia", nombreReal: "Carpaccio de Calabacín", descripcion: "Finas láminas de calabacín con limón, parmesano rallado, rúcula, aceite, pimentón, soja y sésamo caramelizado.", precio: 800, imagen: "/images/menu/tapa-1.png" },
  "omega": { nombre: "Omega", nombreReal: "Ensaladilla Tartara de Atún", descripcion: "Ensaladilla de patatas con salsa tártara, atún, huevo cocido, alcaparras, aceitunas negras y mostaza. Con crujiente de lentejas.", precio: 1100, imagen: "/images/menu/tapa-2.png" },
  "que-puedo-hacer": { nombre: "Qué Puedo Hacer", nombreReal: "Ravioli de Queso y Brie", descripcion: "Rollito de pasta brick relleno de queso brie, mezcla de brotes tiernos, cherry de tomate, mayonesa vegana de soja. Con sésamo caramelizado y miel de caña.", precio: 1200, imagen: "/images/menu/tapa-3.png" },
  "sonic-youth": { nombre: "Sonic Youth", nombreReal: "Ravioli de Salmón", descripcion: "Rollito de pasta brick relleno de salmón ahumado, queso crema, reducción de yogur griego. Con alcaparras, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1350, imagen: "/images/menu/tapa-4.png" },
  "pop": { nombre: "Pop", nombreReal: "Ravioli Vegano", descripcion: "Rollito de pasta brick relleno de queso de anacardos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, imagen: "/images/menu/tapa-5.png" },
  "satisfaction": { nombre: "Satisfaction", nombreReal: "Rollitos Crujientes de Lomo", descripcion: "Rollitos de pasta filo rellenos de lomo a la leña con vinagreta de miel y mostaza, caramelo, aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1340, imagen: "/images/menu/tapa-6.png" },
  "serrat": { nombre: "Serrat", nombreReal: "Ventresca de Atún sobre Hojaldre", descripcion: "Ventresca de atún marinada sobre base de hojaldre, pimientos de piquillo, chorizos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, imagen: "/images/menu/tapa-7.png" },
  "patti-smith": { nombre: "Patti Smith", nombreReal: "Chapata de Jamón, Pera y Gorgonzola", descripcion: "Pan de chapata relleno de jamón reserva de castaña, pera, queso gorgonzola, rúcula con tomate cherry, soja y sésamo caramelizado.", precio: 800, imagen: "/images/menu/tapa-8.png" },
  "london-calling": { nombre: "London Calling", nombreReal: "Chapata Vegana de Hummus", descripcion: "Pan de chapata relleno de hummus, pimientos de piquillo, brotes frescos de espinacas con tomate cherry, soja y sésamo caramelizado.", precio: 750, imagen: "/images/menu/tapa-9.png" },
  "joe-strummer": { nombre: "Joe Strummer", nombreReal: "Sandwich de Pollo con Alioli de Azafrán y Manzana", descripcion: "Pan de hamburguesa relleno de pollo asado, alioli de azafrán y manzana, tomate cherry, soja y sésamo caramelizado.", precio: 800, imagen: "/images/menu/tapa-10.png" },
  "un-buen-dia": { nombre: "Un Buen Día", nombreReal: "Ensalada de Quinoa, Lentejas y Frutos Rojos", descripcion: "Ensalada de quinoa, lentejas y frutos rojos con crujiente de lentejas, aceite, pimentón, soja y sésamo caramelizado.", precio: 980, imagen: "/images/menu/tapa-11.png" },
  "maxi-quesadilla-pepperoni": { nombre: "Maxi-Quesadilla Pepperoni", nombreReal: "Quesadilla de Pepperoni", descripcion: "Quesadilla rellena de pepperoni, queso cheddar, rodajas de tomate, aceite, pimentón y sésamo.", precio: 750, imagen: "/images/menu/tapa-12.png" },
  "maxi-quesadilla-margarita": { nombre: "Maxi-Quesadilla Margarita", nombreReal: "Quesadilla Margarita", descripcion: "Quesadilla rellena de queso mozzarella, albahaca fresca, rodajas de tomate, pesto, aceite, pimentón y sésamo caramelizado.", precio: 750, imagen: "/images/menu/tapa-13.png" },
  "keith-moon": { nombre: "Keith Moon", nombreReal: "Rosca de Jamón Reserva de Castaña", descripcion: "Crujiente rosca prensada al grill con jamón reserva de castaña, parmesano, tomate natural y rúcula.", precio: 1250, imagen: "/images/menu/tapa-14.png" },
  "lux-interior": { nombre: "Lux Interior", nombreReal: "Rosca de Lomo a la Leña (cara A)", descripcion: "Rosca crujiente prensada al grill con lomo a la leña, dijonesa (mayonesa con toque de mostaza y pepinillos).", precio: 1250, imagen: "/images/menu/tapa-14.png" },
  "lagartija": { nombre: "Lagartija", nombreReal: "Rosca de Pollo", descripcion: "Rosca crujiente prensada al grill con pechuga de pollo al horno, mahonesa vegana de wasabi y pimientos rojos.", precio: 1250, imagen: "/images/menu/tapa-14.png" },
  "091": { nombre: "091", nombreReal: "Rosca Mallorquina", descripcion: "Rosca crujiente prensada al grill con sobrasada, queso brie y miel de abeja.", precio: 1250, imagen: "/images/menu/tapa-16.png" },
  "encuentros": { nombre: "Encuentros", nombreReal: "Rosca de Salmón Ahumado", descripcion: "Rosca crujiente prensada al grill con queso crema, eneldo y cebolla crujiente.", precio: 1250, imagen: "/images/menu/tapa-15.png" },
  "rosca-vegana": { nombre: "Rosca Vegana", nombreReal: "Rosca Vegana (cara A)", descripcion: "Rosca crujiente prensada al grill con hummus, champiñones salteados y aceitunas negras.", precio: 1250, imagen: "/images/menu/tapa-14.png" },
  "los-evangelistas": { nombre: "Los Evangelistas", nombreReal: "Tabla de Jamón y Queso", descripcion: "Jamón gran reserva de castaña y queso manchego extra de leche cruda, acompañado de piquitos, pan y nueces.", precio: 1550, imagen: "/images/menu/tapa-17.png" },
  "racion-morente": { nombre: "Ración Morente", nombreReal: "Ración de Jamón Gran Reserva de Castaña", descripcion: "Jamón gran reserva de castaña cortado a mano.", precio: 1550, imagen: "/images/menu/tapa-18.png" },
  "racion-omega": { nombre: "Ración Omega", nombreReal: "Ración de Queso Manchego Extra", descripcion: "Queso manchego extra de leche cruda.", precio: 1250, imagen: "/images/menu/tapa-19.png" },
  "cerveza-strummer": { nombre: "Cerveza Strummer", nombreReal: "Copa de Cerveza", descripcion: "Cerveza de grifo.", precio: 290, imagen: "/images/menu/bebida-cerveza.png" },
  "tinto-de-rock": { nombre: "Tinto de Rock", nombreReal: "Tinto de Verano", descripcion: "Tinto de verano clásico.", precio: 280, imagen: "/images/menu/bebida-tinto.png" },
  "vermu-rockero": { nombre: "Vermú Rockero", nombreReal: "Vermut Casero", descripcion: "Vermut casero de la casa.", precio: 380, imagen: "/images/menu/bebida-vermu.png" },
  "mojito-punk": { nombre: "Mojito Punk", nombreReal: "Mojito Tradicional", descripcion: "Mojito clásico.", precio: 700, imagen: "/images/menu/bebida-mojito.png" },
  "sangria-indie": { nombre: "Sangría Indie", nombreReal: "Sangría", descripcion: "Sangría de la casa.", precio: 450, imagen: "/images/menu/bebida-sangria.png" },
};

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plato = platos[slug];

  if (!plato) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="font-display text-3xl font-bold text-dorado mb-4">Plato no encontrado</h1>
        <Link href="/menu" className="text-dorado hover:text-dorado-dark transition-colors">
          ← Volver al menú
        </Link>
      </div>
    );
  }

  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(plato.precio / 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/menu"
        className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
      >
        ← Volver al menú
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div
          className="aspect-square bg-negro-light rounded-lg overflow-hidden border border-gris/30"
          style={{
            backgroundImage: `url('${plato.imagen}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="sr-only">{plato.nombreReal}</span>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-dorado">
              {plato.nombre}
            </h1>
            <p className="text-ambar/80 text-lg mt-1 italic">
              {plato.nombreReal}
            </p>
          </div>

          <p className="text-gris-light leading-relaxed">
            {plato.descripcion}
          </p>

          <div className="pt-4 border-t border-gris/20">
            <span className="font-display text-2xl font-bold text-dorado">
              {precioFormateado}
            </span>
          </div>

          <div className="flex gap-4">
            <Link
              href="/reservas"
              className="flex-1 text-center bg-rojo hover:bg-rojo/80 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Reservar mesa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
