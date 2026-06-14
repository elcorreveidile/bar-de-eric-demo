import { pgTable, text, serial, integer, boolean, timestamp, date, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  role: text("role").default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const magicTokens = pgTable("magic_tokens", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull(),
  token: text("token").unique().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  nombre: text("nombre").notNull(),
  descripcion: text("descripcion"),
  orden: integer("orden").default(0),
  activa: boolean("activa").default(true),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => menuCategories.id),
  nombre: text("nombre").notNull(),
  slug: text("slug").unique().notNull(),
  descripcion: text("descripcion"),
  receta: text("receta"),
  precio: integer("precio").notNull(),
  imagen: text("imagen"),
  historiaMusicales: text("historia_musicales"),
  alergenos: text("alergenos").array(),
  disponible: boolean("disponible").default(true),
  orden: integer("orden").default(0),
  banda: text("banda"),
  anio: integer("anio"),
});

export const galeriaFotos = pgTable("galeria_fotos", {
  id: serial("id").primaryKey(),
  titulo: text("titulo").notNull(),
  descripcion: text("descripcion"),
  urlFoto: text("url_foto").notNull(),
  banda: text("banda"),
  anio: integer("anio"),
  artista: text("artista"),
  categoria: text("categoria").default("conciertos"),
  orden: integer("orden").default(0),
  destacada: boolean("destacada").default(false),
});

export const eventosProgramacion = pgTable("eventos_programacion", {
  id: serial("id").primaryKey(),
  titulo: text("titulo").notNull(),
  slug: text("slug").unique().notNull(),
  tipo: text("tipo").notNull().default("concierto"),
  descripcion: text("descripcion"),
  fecha: date("fecha").notNull(),
  hora: text("hora"),
  artistaBanda: text("artista_banda"),
  aforoMaximo: integer("aforo_maximo"),
  entradaLibre: boolean("entrada_libre").default(true),
  precioEntrada: integer("precio_entrada"),
  imagen: text("imagen"),
  estado: text("estado").default("programado"),
});

export const mesas = pgTable("mesas", {
  id: serial("id").primaryKey(),
  numero: integer("numero").unique().notNull(),
  capacidad: integer("capacidad").notNull().default(4),
  ubicacion: text("ubicacion").default("interior"),
  activa: boolean("activa").default(true),
});

export const reservas = pgTable("reservas", {
  id: serial("id").primaryKey(),
  mesaId: integer("mesa_id").references(() => mesas.id),
  nombre: text("nombre").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono"),
  fecha: date("fecha").notNull(),
  hora: text("hora").notNull(),
  comensales: integer("comensales").notNull().default(2),
  observaciones: text("observaciones"),
  estado: text("estado").default("pendiente"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const pedidos = pgTable("pedidos", {
  id: serial("id").primaryKey(),
  numeroReferencia: text("numero_referencia").unique().notNull(),
  clienteNombre: text("cliente_nombre").notNull(),
  clienteTelefono: text("cliente_telefono"),
  fechaHora: timestamp("fecha_hora").defaultNow(),
  total: integer("total").notNull().default(0),
  estado: text("estado").default("pendiente"),
  observaciones: text("observaciones"),
});

export const pedidoItems = pgTable("pedido_items", {
  id: serial("id").primaryKey(),
  pedidoId: integer("pedido_id").references(() => pedidos.id, { onDelete: "cascade" }),
  menuItemId: integer("menu_item_id").references(() => menuItems.id),
  cantidad: integer("cantidad").notNull().default(1),
  precioUnitario: integer("precio_unitario").notNull(),
});

export const menuCategoriesRelations = relations(menuCategories, ({ many }) => ({
  items: many(menuItems),
}));

export const menuItemsRelations = relations(menuItems, ({ one }) => ({
  category: one(menuCategories, {
    fields: [menuItems.categoryId],
    references: [menuCategories.id],
  }),
}));

export const mesasRelations = relations(mesas, ({ many }) => ({
  reservas: many(reservas),
}));

export const reservasRelations = relations(reservas, ({ one }) => ({
  mesa: one(mesas, {
    fields: [reservas.mesaId],
    references: [mesas.id],
  }),
}));

export const pedidosRelations = relations(pedidos, ({ many }) => ({
  items: many(pedidoItems),
}));

export const pedidoItemsRelations = relations(pedidoItems, ({ one }) => ({
  pedido: one(pedidos, {
    fields: [pedidoItems.pedidoId],
    references: [pedidos.id],
  }),
  menuItem: one(menuItems, {
    fields: [pedidoItems.menuItemId],
    references: [menuItems.id],
  }),
}));
