import { z } from "zod";

export const reservaSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().optional(),
  fecha: z.string(),
  hora: z.string(),
  comensales: z.number().int().min(1).max(8),
  observaciones: z.string().optional(),
});

export const pedidoSchema = z.object({
  clienteNombre: z.string().min(2),
  clienteTelefono: z.string(),
  items: z.array(
    z.object({
      menuItemId: z.number(),
      cantidad: z.number().int().min(1),
    })
  ),
  observaciones: z.string().optional(),
  horaRecogida: z.string(),
});

export const menuItemSchema = z.object({
  nombre: z.string().min(2),
  slug: z.string(),
  descripcion: z.string(),
  precio: z.number().positive(),
  categoryId: z.number(),
  historiaMusicales: z.string().optional(),
  banda: z.string().optional(),
  anio: z.number().optional(),
  alergenos: z.array(z.string()).optional(),
});

export const eventoSchema = z.object({
  titulo: z.string().min(2),
  slug: z.string(),
  tipo: z.string(),
  descripcion: z.string(),
  fecha: z.string(),
  hora: z.string().optional(),
  artista_banda: z.string().optional(),
  aforo_maximo: z.number().int().optional(),
  entrada_libre: z.boolean(),
  precio_entrada: z.number().optional(),
});

export const contactoSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  mensaje: z.string().min(10),
});

export type Reserva = z.infer<typeof reservaSchema>;
export type Pedido = z.infer<typeof pedidoSchema>;
export type MenuItem = z.infer<typeof menuItemSchema>;
export type Evento = z.infer<typeof eventoSchema>;
export type Contacto = z.infer<typeof contactoSchema>;
