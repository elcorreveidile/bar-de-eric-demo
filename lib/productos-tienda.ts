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
    id: "vinilo-lagartija-nick",
    nombre: "Lagartija Nick — Val del Omar",
    descripcion: "LP vinilo 180g. El álbum que definió el sonido de Granada. Incluye libreto con fotos inéditas.",
    precio: 2900,
    imagen: "/images/tienda/vinilo-lagartija.png",
    categoria: "vinilos",
  },
  {
    id: "vinilo-los-planetas",
    nombre: "Los Planetas — Una Ópera Egipcia",
    descripcion: "Doble LP vinilo 180g. La obra maestra del indie español con colaboración de Eric Jiménez.",
    precio: 3500,
    imagen: "/images/tienda/vinilo-planetas.png",
    categoria: "vinilos",
  },
  {
    id: "vinilo-napoleon-solo",
    nombre: "Napoleón Solo — Psychobilly",
    descripcion: "LP vinilo edición limitada numerada. Psychobilly granadino en estado puro.",
    precio: 2500,
    imagen: "/images/tienda/vinilo-napoleon.png",
    categoria: "vinilos",
  },
  {
    id: "libro-eric",
    nombre: "La importancia de llamarse Ernesto...",
    descripcion: "El libro de Eric Jiménez (Plaza & Janés, 2017). Memorias del underground granadino, co-escrito con Holden Centeno. Premio Mejor Libro Musical 2017.",
    precio: 1990,
    imagen: "/images/tienda/libro-eric.png",
    categoria: "libros",
  },
];

export const categoriasTienda = ["Todos", "Camisetas", "Vinilos", "Libros"] as const;
