export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: "camisetas" | "vinilos" | "libros";
}

export const productos: Producto[] = [
  {
    id: "camiseta-logo-negro",
    nombre: "Camiseta Logo El Bar de Eric",
    descripcion: "Camiseta negra 100% algodón con el logo del bar serigrafiado en dorado. Unisex, corte regular.",
    precio: 2500,
    imagen: "/images/tienda/camiseta-logo.png",
    categoria: "camisetas",
  },
  {
    id: "camiseta-lagartija",
    nombre: "Camiseta Lagartija Nick",
    descripcion: "Camiseta negra con diseño exclusivo de Lagartija Nick. Edición limitada, algodón orgánico.",
    precio: 2800,
    imagen: "/images/tienda/camiseta-lagartija.png",
    categoria: "camisetas",
  },
  {
    id: "camiseta-kgb",
    nombre: "Camiseta KGB",
    descripcion: "Homenaje a los inicios. Camiseta con el logo original de KGB, la banda que lo empezó todo en 1982.",
    precio: 2800,
    imagen: "/images/tienda/camiseta-kgb.png",
    categoria: "camisetas",
  },
  {
    id: "vinilo-val-del-omar",
    nombre: "Lagartija Nick — Val del Omar",
    descripcion: "Doble LP vinilo 180g, reedición 2019 del clásico de 1998. Homenaje al cineasta José Val del Omar, entre el metal industrial y el minimalismo electrónico.",
    precio: 2900,
    imagen: "/images/tienda/vinilo-val-del-omar.png",
    categoria: "vinilos",
  },
  {
    id: "vinilo-inercia",
    nombre: "Lagartija Nick — Inercia",
    descripcion: "LP vinilo reedición HQ 2018 del debut de 1992. El álbum que lo empezó todo para el sonido alternativo granadino. Sony Spain.",
    precio: 2500,
    imagen: "/images/tienda/vinilo-inercia.png",
    categoria: "vinilos",
  },
  {
    id: "vinilo-opera-egipcia",
    nombre: "Los Planetas — Una Ópera Egipcia",
    descripcion: "Doble LP vinilo gatefold, edición limitada. La obra maestra del indie español. Incluye 2 temas extra no disponibles en CD.",
    precio: 3500,
    imagen: "/images/tienda/vinilo-planetas.png",
    categoria: "vinilos",
  },
  {
    id: "libro-cuatro-millones",
    nombre: "Cuatro millones de golpes",
    descripcion: "Eric Jiménez (Plaza & Janés, 2017). La insólita y emocionante historia del batería de Lagartija Nick y Los Planetas.",
    precio: 1990,
    imagen: "/images/tienda/libro-cuatro-millones.png",
    categoria: "libros",
  },
  {
    id: "libro-viaje-cerebro",
    nombre: "Viaje al centro de mi cerebro",
    descripcion: "Eric Jiménez (Penguin Random House, 2021). Las anécdotas más ácidas y salvajes del mítico batería. Prólogo de Eduardo Madina.",
    precio: 1890,
    imagen: "/images/tienda/libro-viaje-cerebro.png",
    categoria: "libros",
  },
];

export const categoriasTienda = ["Todos", "Camisetas", "Vinilos", "Libros"] as const;
