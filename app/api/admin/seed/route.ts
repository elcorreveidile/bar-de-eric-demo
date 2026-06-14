import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { menuCategories, menuItems, galeriaFotos } from "@/lib/db/schema";
import { sql } from "drizzle-orm";

const categorias = [
  { nombre: "Para Comer", orden: 1 },
  { nombre: "Roscas", orden: 2 },
  { nombre: "Raciones", orden: 3 },
  { nombre: "Para Beber", orden: 4 },
];

const menu = [
  { nombre: "Inercia", descripcion: "Finas láminas de calabacín con limón, parmesano rallado, rúcula, aceite, pimentón, soja y sésamo caramelizado.", precio: 800, slug: "inercia", categoria: "Para Comer", imagen: "/images/menu/tapa-1.png", orden: 1 },
  { nombre: "Omega", descripcion: "Ensaladilla de patatas con salsa tártara, atún, huevo cocido, alcaparras, aceitunas negras y mostaza. Con crujiente de lentejas.", precio: 1100, slug: "omega", categoria: "Para Comer", imagen: "/images/menu/tapa-2.png", orden: 2 },
  { nombre: "Qué Puedo Hacer", descripcion: "Rollito de pasta brick relleno de queso brie, mezcla de brotes tiernos, cherry de tomate, mayonesa vegana de soja. Con sésamo caramelizado y miel de caña.", precio: 1200, slug: "que-puedo-hacer", categoria: "Para Comer", imagen: "/images/menu/tapa-3.png", orden: 3 },
  { nombre: "Sonic Youth", descripcion: "Rollito de pasta brick relleno de salmón ahumado, queso crema, reducción de yogur griego. Con alcaparras, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1350, slug: "sonic-youth", categoria: "Para Comer", imagen: "/images/menu/tapa-4.png", orden: 4 },
  { nombre: "Pop", descripcion: "Rollito de pasta brick relleno de queso de anacardos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, slug: "pop", categoria: "Para Comer", imagen: "/images/menu/tapa-5.png", orden: 5 },
  { nombre: "Satisfaction", descripcion: "Rollitos de pasta filo rellenos de lomo a la leña con vinagreta de miel y mostaza, caramelo, aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1340, slug: "satisfaction", categoria: "Para Comer", imagen: "/images/menu/tapa-6.png", orden: 6 },
  { nombre: "Serrat", descripcion: "Ventresca de atún marinada sobre base de hojaldre, pimientos de piquillo, chorizos. Con aceite, pimentón, soja, sésamo caramelizado y miel de caña.", precio: 1200, slug: "serrat", categoria: "Para Comer", imagen: "/images/menu/tapa-7.png", orden: 7 },
  { nombre: "Patti Smith", descripcion: "Pan de chapata relleno de jamón reserva de castaña, pera, queso gorgonzola, rúcula con tomate cherry, soja y sésamo caramelizado.", precio: 800, slug: "patti-smith", categoria: "Para Comer", imagen: "/images/menu/tapa-8.png", orden: 8 },
  { nombre: "London Calling", descripcion: "Pan de chapata relleno de hummus, pimientos de piquillo, brotes frescos de espinacas con tomate cherry, soja y sésamo caramelizado.", precio: 750, slug: "london-calling", categoria: "Para Comer", imagen: "/images/menu/tapa-9.png", orden: 9 },
  { nombre: "Joe Strummer", descripcion: "Pan de hamburguesa relleno de pollo asado, alioli de azafrán y manzana, tomate cherry, soja y sésamo caramelizado.", precio: 800, slug: "joe-strummer", categoria: "Para Comer", imagen: "/images/menu/tapa-10.png", orden: 10 },
  { nombre: "Un Buen Día", descripcion: "Ensalada de quinoa, lentejas y frutos rojos con crujiente de lentejas, aceite, pimentón, soja y sésamo caramelizado.", precio: 980, slug: "un-buen-dia", categoria: "Para Comer", imagen: "/images/menu/tapa-11.png", orden: 11 },
  { nombre: "Maxi-Quesadilla Pepperoni", descripcion: "Quesadilla rellena de pepperoni, queso cheddar, rodajas de tomate, aceite, pimentón y sésamo.", precio: 750, slug: "maxi-quesadilla-pepperoni", categoria: "Para Comer", imagen: "/images/menu/tapa-12.png", orden: 12 },
  { nombre: "Maxi-Quesadilla Margarita", descripcion: "Quesadilla rellena de queso mozzarella, albahaca fresca, rodajas de tomate, pesto, aceite, pimentón y sésamo caramelizado.", precio: 750, slug: "maxi-quesadilla-margarita", categoria: "Para Comer", imagen: "/images/menu/tapa-13.png", orden: 13 },
  { nombre: "Keith Moon", descripcion: "Crujiente rosca prensada al grill con jamón reserva de castaña, parmesano, tomate natural y rúcula.", precio: 1250, slug: "keith-moon", categoria: "Roscas", imagen: "/images/menu/tapa-14.png", orden: 1 },
  { nombre: "Lux Interior", descripcion: "Rosca crujiente prensada al grill con lomo a la leña, dijonesa (mayonesa con toque de mostaza y pepinillos).", precio: 1250, slug: "lux-interior", categoria: "Roscas", imagen: "/images/menu/tapa-14.png", orden: 2 },
  { nombre: "Lagartija", descripcion: "Rosca crujiente prensada al grill con pechuga de pollo al horno, mahonesa vegana de wasabi y pimientos rojos.", precio: 1250, slug: "lagartija", categoria: "Roscas", imagen: "/images/menu/tapa-14.png", orden: 3 },
  { nombre: "091", descripcion: "Rosca crujiente prensada al grill con sobrasada, queso brie y miel de abeja.", precio: 1250, slug: "091", categoria: "Roscas", imagen: "/images/menu/tapa-16.png", orden: 4 },
  { nombre: "Encuentros", descripcion: "Rosca crujiente prensada al grill con queso crema, eneldo y cebolla crujiente.", precio: 1250, slug: "encuentros", categoria: "Roscas", imagen: "/images/menu/tapa-15.png", orden: 5 },
  { nombre: "Rosca Vegana", descripcion: "Rosca crujiente prensada al grill con hummus, champiñones salteados y aceitunas negras.", precio: 1250, slug: "rosca-vegana", categoria: "Roscas", imagen: "/images/menu/tapa-14.png", orden: 6 },
  { nombre: "Los Evangelistas", descripcion: "Jamón gran reserva de castaña y queso manchego extra de leche cruda, acompañado de piquitos, pan y nueces.", precio: 1550, slug: "los-evangelistas", categoria: "Raciones", imagen: "/images/menu/tapa-17.png", orden: 1 },
  { nombre: "Ración Morente", descripcion: "Jamón gran reserva de castaña cortado a mano.", precio: 1550, slug: "racion-morente", categoria: "Raciones", imagen: "/images/menu/tapa-18.png", orden: 2 },
  { nombre: "Ración Omega", descripcion: "Queso manchego extra de leche cruda.", precio: 1250, slug: "racion-omega", categoria: "Raciones", imagen: "/images/menu/tapa-19.png", orden: 3 },
  { nombre: "Cerveza Strummer", descripcion: "Cerveza de grifo.", precio: 290, slug: "cerveza-strummer", categoria: "Para Beber", imagen: "/images/menu/bebida-cerveza.png", orden: 1 },
  { nombre: "Tinto de Rock", descripcion: "Tinto de verano clásico.", precio: 280, slug: "tinto-de-rock", categoria: "Para Beber", imagen: "/images/menu/bebida-tinto.png", orden: 2 },
  { nombre: "Vermú Rockero", descripcion: "Vermut casero de la casa.", precio: 380, slug: "vermu-rockero", categoria: "Para Beber", imagen: "/images/menu/bebida-vermu.png", orden: 3 },
  { nombre: "Mojito Punk", descripcion: "Mojito clásico.", precio: 700, slug: "mojito-punk", categoria: "Para Beber", imagen: "/images/menu/bebida-mojito.png", orden: 4 },
  { nombre: "Sangría Indie", descripcion: "Sangría de la casa.", precio: 450, slug: "sangria-indie", categoria: "Para Beber", imagen: "/images/menu/bebida-sangria.png", orden: 5 },
];

const galeria = [
  { titulo: "Joe Strummer en el Albaicin", banda: "The Clash", anio: 1991, categoria: "personajes", urlFoto: "/images/museo/foto-1.png", orden: 1 },
  { titulo: "Lagartija Nick en directo", banda: "Lagartija Nick", anio: 1995, categoria: "conciertos", urlFoto: "/images/museo/foto-2.png", orden: 2 },
  { titulo: "Grabacion de Omega", banda: "Lagartija Nick", anio: 1996, categoria: "estudio", urlFoto: "/images/museo/foto-3.png", orden: 3 },
  { titulo: "Los Planetas en Planta Baja", banda: "Los Planetas", anio: 1998, categoria: "conciertos", urlFoto: "/images/museo/foto-4.png", orden: 4 },
  { titulo: "Enrique Morente retrato", banda: "Enrique Morente", anio: 2005, categoria: "personajes", urlFoto: "/images/museo/foto-5.png", orden: 5 },
  { titulo: "KGB primer concierto", banda: "KGB", anio: 1982, categoria: "conciertos", urlFoto: "/images/museo/foto-6.png", orden: 6 },
  { titulo: "Guitarra firmada por J", banda: "Los Planetas", anio: 2010, categoria: "mementos", urlFoto: "/images/museo/foto-7.png", orden: 7 },
  { titulo: "Eric en el estudio", banda: "Los Evangelistas", anio: 2007, categoria: "estudio", urlFoto: "/images/museo/foto-8.png", orden: 8 },
  { titulo: "Cartel Omega Tour", banda: "Lagartija Nick", anio: 1997, categoria: "mementos", urlFoto: "/images/museo/foto-9.png", orden: 9 },
  { titulo: "091 despedida", banda: "091", anio: 1996, categoria: "conciertos", urlFoto: "/images/museo/foto-10.png", orden: 10 },
  { titulo: "Apertura Bar de Eric", banda: "Varios", anio: 2013, categoria: "personajes", urlFoto: "/images/museo/foto-11.png", orden: 11 },
  { titulo: "Baquetas de Eric", banda: "Los Planetas", anio: 2015, categoria: "mementos", urlFoto: "/images/museo/foto-12.png", orden: 12 },
];

export async function POST() {
  try {
    // Clear existing data
    await db.execute(sql`TRUNCATE menu_items, menu_categories, galeria_fotos RESTART IDENTITY CASCADE`);

    // Insert categories
    const insertedCats = await db
      .insert(menuCategories)
      .values(categorias.map((c) => ({ nombre: c.nombre, orden: c.orden, activa: true })))
      .returning();

    const catMap = Object.fromEntries(insertedCats.map((c) => [c.nombre, c.id]));

    // Insert menu items
    await db.insert(menuItems).values(
      menu.map((item) => ({
        nombre: item.nombre,
        slug: item.slug,
        categoryId: catMap[item.categoria] ?? null,
        descripcion: item.descripcion,
        precio: item.precio,
        imagen: item.imagen,
        orden: item.orden,
        disponible: true,
      }))
    );

    // Insert gallery
    await db.insert(galeriaFotos).values(
      galeria.map((foto) => ({
        titulo: foto.titulo,
        urlFoto: foto.urlFoto,
        banda: foto.banda,
        anio: foto.anio,
        categoria: foto.categoria,
        orden: foto.orden,
        destacada: false,
      }))
    );

    return NextResponse.json({
      ok: true,
      message: `Seeded: ${insertedCats.length} categorías, ${menu.length} items de menú, ${galeria.length} fotos`,
    });
  } catch (err) {
    console.error("[seed] Error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
