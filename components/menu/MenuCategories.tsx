"use client";

import { useState } from "react";
import { TapaCard } from "@/components/menu/TapaCard";

const categorias = ["Para Comer", "Roscas", "Raciones", "Para Beber"];

const items = [
  { nombre: "Inercia", nombreReal: "Carpaccio de Calabacín", descripcion: "Finas láminas de calabacín con limón, parmesano rallado, rúcula, aceite, pimentón, soja y sésamo caramelizado.", precio: 800, slug: "inercia", categoria: "Para Comer", imagen: "/images/menu/tapa-1.png" },
  { nombre: "Omega", nombreReal: "Ensaladilla Tartara de Atún", descripcion: "Ensaladilla de patatas con salsa tártara, atún, huevo cocido, alcaparras, aceitunas negras y mostaza. Con crujiente de lentejas.", precio: 1100, slug: "omega", categoria: "Para Comer", imagen: "/images/menu/tapa-2.png" },
  { nombre: "Qué Puedo Hacer", nombreReal: "Ravioli de Queso y Brie", descripcion: "Rollito de pasta brick relleno de queso brie, mezcla de brotes tiernos, cherry de tomate, mayonesa vegana de soja. Con sésamo caramelizado y miel de caña.", precio: 1200, slug: "que-puedo-hacer", categoria: "Para Comer", imagen: "/images/menu/tapa-3.png" },
  { nombre: "Sonic Youth", nombreReal: "Ravioli de Salmón", descripcion: "Rollito de pasta brick relleno de salmón ahumado, queso crema, reducción de yogur griego. Con alcaparras, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1350, slug: "sonic-youth", categoria: "Para Comer", imagen: "/images/menu/tapa-4.png" },
  { nombre: "Pop", nombreReal: "Ravioli Vegano", descripcion: "Rollito de pasta brick relleno de queso de anacardos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, slug: "pop", categoria: "Para Comer", imagen: "/images/menu/tapa-5.png" },
  { nombre: "Satisfaction", nombreReal: "Rollitos Crujientes de Lomo", descripcion: "Rollitos de pasta filo rellenos de lomo a la leña con vinagreta de miel y mostaza, caramelo, aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1340, slug: "satisfaction", categoria: "Para Comer", imagen: "/images/menu/tapa-6.png" },
  { nombre: "Serrat", nombreReal: "Ventresca de Atún sobre Hojaldre", descripcion: "Ventresca de atún marinada sobre base de hojaldre, pimientos de piquillo, chorizos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, slug: "serrat", categoria: "Para Comer", imagen: "/images/menu/tapa-7.png" },
  { nombre: "Patti Smith", nombreReal: "Chapata de Jamón, Pera y Gorgonzola", descripcion: "Pan de chapata relleno de jamón reserva de castaña, pera, queso gorgonzola, rúcula con tomate cherry, soja y sésamo caramelizado.", precio: 800, slug: "patti-smith", categoria: "Para Comer", imagen: "/images/menu/tapa-8.png" },
  { nombre: "London Calling", nombreReal: "Chapata Vegana de Hummus", descripcion: "Pan de chapata relleno de hummus, pimientos de piquillo, brotes frescos de espinacas con tomate cherry, soja y sésamo caramelizado.", precio: 750, slug: "london-calling", categoria: "Para Comer", imagen: "/images/menu/tapa-9.png" },
  { nombre: "Joe Strummer", nombreReal: "Sandwich de Pollo con Alioli de Azafrán y Manzana", descripcion: "Pan de hamburguesa relleno de pollo asado, alioli de azafrán y manzana, tomate cherry, soja y sésamo caramelizado.", precio: 800, slug: "joe-strummer", categoria: "Para Comer", imagen: "/images/menu/tapa-10.png" },
  { nombre: "Un Buen Día", nombreReal: "Ensalada de Quinoa, Lentejas y Frutos Rojos", descripcion: "Ensalada de quinoa, lentejas y frutos rojos con crujiente de lentejas, aceite, pimentón, soja y sésamo caramelizado.", precio: 980, slug: "un-buen-dia", categoria: "Para Comer", imagen: "/images/menu/tapa-11.png" },
  { nombre: "Maxi-Quesadilla Pepperoni", nombreReal: "Quesadilla de Pepperoni", descripcion: "Quesadilla rellena de pepperoni, queso cheddar, rodajas de tomate, aceite, pimentón y sésamo.", precio: 750, slug: "maxi-quesadilla-pepperoni", categoria: "Para Comer", imagen: "/images/menu/tapa-12.png" },
  { nombre: "Maxi-Quesadilla Margarita", nombreReal: "Quesadilla Margarita", descripcion: "Quesadilla rellena de queso mozzarella, albahaca fresca, rodajas de tomate, pesto, aceite, pimentón y sésamo caramelizado.", precio: 750, slug: "maxi-quesadilla-margarita", categoria: "Para Comer", imagen: "/images/menu/tapa-13.png" },
  { nombre: "Keith Moon", nombreReal: "Rosca de Jamón Reserva de Castaña", descripcion: "Crujiente rosca prensada al grill con jamón reserva de castaña, parmesano, tomate natural y rúcula.", precio: 1250, slug: "keith-moon", categoria: "Roscas", imagen: "/images/menu/tapa-14.png" },
  { nombre: "Lux Interior", nombreReal: "Rosca de Lomo a la Leña (cara A)", descripcion: "Rosca crujiente prensada al grill con lomo a la leña, dijonesa (mayonesa con toque de mostaza y pepinillos).", precio: 1250, slug: "lux-interior", categoria: "Roscas", imagen: "/images/menu/tapa-14.png" },
  { nombre: "Lagartija", nombreReal: "Rosca de Pollo", descripcion: "Rosca crujiente prensada al grill con pechuga de pollo al horno, mahonesa vegana de wasabi y pimientos rojos.", precio: 1250, slug: "lagartija", categoria: "Roscas", imagen: "/images/menu/tapa-14.png" },
  { nombre: "091", nombreReal: "Rosca Mallorquina", descripcion: "Rosca crujiente prensada al grill con sobrasada, queso brie y miel de abeja.", precio: 1250, slug: "091", categoria: "Roscas", imagen: "/images/menu/tapa-16.png" },
  { nombre: "Encuentros", nombreReal: "Rosca de Salmón Ahumado", descripcion: "Rosca crujiente prensada al grill con queso crema, eneldo y cebolla crujiente.", precio: 1250, slug: "encuentros", categoria: "Roscas", imagen: "/images/menu/tapa-15.png" },
  { nombre: "Rosca Vegana", nombreReal: "Rosca Vegana (cara A)", descripcion: "Rosca crujiente prensada al grill con hummus, champiñones salteados y aceitunas negras.", precio: 1250, slug: "rosca-vegana", categoria: "Roscas", imagen: "/images/menu/tapa-14.png" },
  { nombre: "Los Evangelistas", nombreReal: "Tabla de Jamón y Queso", descripcion: "Jamón gran reserva de castaña y queso manchego extra de leche cruda, acompañado de piquitos, pan y nueces.", precio: 1550, slug: "los-evangelistas", categoria: "Raciones", imagen: "/images/menu/tapa-17.png" },
  { nombre: "Racion Morente", nombreReal: "Ración de Jamón Gran Reserva de Castaña", descripcion: "Jamón gran reserva de castaña cortado a mano.", precio: 1550, slug: "racion-morente", categoria: "Raciones", imagen: "/images/menu/tapa-18.png" },
  { nombre: "Racion Omega", nombreReal: "Ración de Queso Manchego Extra", descripcion: "Queso manchego extra de leche cruda.", precio: 1250, slug: "racion-omega", categoria: "Raciones", imagen: "/images/menu/tapa-19.png" },
  { nombre: "Cerveza Strummer", nombreReal: "Copa de Cerveza", descripcion: "Cerveza de grifo.", precio: 290, slug: "cerveza-strummer", categoria: "Para Beber", imagen: "/images/menu/bebida-cerveza.png" },
  { nombre: "Tinto de Rock", nombreReal: "Tinto de Verano", descripcion: "Tinto de verano clásico.", precio: 280, slug: "tinto-de-rock", categoria: "Para Beber", imagen: "/images/menu/bebida-tinto.png" },
  { nombre: "Vermú Rockero", nombreReal: "Vermut Casero", descripcion: "Vermut casero de la casa.", precio: 380, slug: "vermu-rockero", categoria: "Para Beber", imagen: "/images/menu/bebida-vermu.png" },
  { nombre: "Mojito Punk", nombreReal: "Mojito Tradicional", descripcion: "Mojito clásico.", precio: 700, slug: "mojito-punk", categoria: "Para Beber", imagen: "/images/menu/bebida-mojito.png" },
  { nombre: "Sangría Indie", nombreReal: "Sangría", descripcion: "Sangría de la casa.", precio: 450, slug: "sangria-indie", categoria: "Para Beber", imagen: "/images/menu/bebida-sangria.png" },
];

export function MenuCategories() {
  const [categoriaActiva, setCategoriaActiva] = useState("Para Comer");

  const itemsFiltrados = items.filter(
    (item) => item.categoria === categoriaActiva
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              categoriaActiva === cat
                ? "bg-dorado text-negro"
                : "bg-negro-light text-gris-light hover:text-dorado border border-gris/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsFiltrados.map((item) => (
          <TapaCard
            key={item.slug}
            nombre={item.nombre}
            nombreReal={item.nombreReal}
            descripcion={item.descripcion}
            precio={item.precio}
            slug={item.slug}
            imagen={item.imagen}
          />
        ))}
      </div>
    </div>
  );
}
