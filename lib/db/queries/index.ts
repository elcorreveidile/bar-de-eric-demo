import { db } from "../client";
import { eq, and, desc, asc, not, inArray } from "drizzle-orm";
import {
  menuCategories,
  menuItems,
  galeriaFotos,
  eventosProgramacion,
  mesas,
  reservas,
  pedidos,
} from "../schema";

export async function getMenuCategories() {
  return db
    .select()
    .from(menuCategories)
    .where(eq(menuCategories.activa, true))
    .orderBy(asc(menuCategories.orden));
}

export async function getMenuItems(categoryId?: number) {
  const conditions = [eq(menuItems.disponible, true)];
  if (categoryId !== undefined) {
    conditions.push(eq(menuItems.categoryId, categoryId));
  }
  return db
    .select()
    .from(menuItems)
    .where(and(...conditions))
    .orderBy(asc(menuItems.orden));
}

export async function getMenuItemBySlug(slug: string) {
  const results = await db
    .select()
    .from(menuItems)
    .where(eq(menuItems.slug, slug))
    .limit(1);
  return results[0] ?? null;
}

export async function getGaleriaFotos(options?: {
  categoria?: string;
  banda?: string;
  destacada?: boolean;
  limit?: number;
}) {
  const conditions = [];
  if (options?.categoria) {
    conditions.push(eq(galeriaFotos.categoria, options.categoria));
  }
  if (options?.banda) {
    conditions.push(eq(galeriaFotos.banda, options.banda));
  }
  if (options?.destacada !== undefined) {
    conditions.push(eq(galeriaFotos.destacada, options.destacada));
  }

  let query = db
    .select()
    .from(galeriaFotos)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(asc(galeriaFotos.orden));

  if (options?.limit) {
    query = query.limit(options.limit) as typeof query;
  }

  return query;
}

export async function getGaleriaFotoById(id: number) {
  const results = await db
    .select()
    .from(galeriaFotos)
    .where(eq(galeriaFotos.id, id))
    .limit(1);
  return results[0] ?? null;
}

export async function getEventosProgramados(options?: {
  tipo?: string;
  estado?: string;
  limit?: number;
}) {
  const conditions = [];
  if (options?.tipo) {
    conditions.push(eq(eventosProgramacion.tipo, options.tipo));
  }
  if (options?.estado) {
    conditions.push(eq(eventosProgramacion.estado, options.estado));
  }

  let query = db
    .select()
    .from(eventosProgramacion)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(asc(eventosProgramacion.fecha));

  if (options?.limit) {
    query = query.limit(options.limit) as typeof query;
  }

  return query;
}

export async function getEventoBySlug(slug: string) {
  const results = await db
    .select()
    .from(eventosProgramacion)
    .where(eq(eventosProgramacion.slug, slug))
    .limit(1);
  return results[0] ?? null;
}

export async function getMesasDisponibles(fecha: string, hora: string) {
  const reservedMesaIds = db
    .select({ mesaId: reservas.mesaId })
    .from(reservas)
    .where(
      and(
        eq(reservas.fecha, fecha),
        eq(reservas.hora, hora),
        not(eq(reservas.estado, "cancelada"))
      )
    );

  return db
    .select()
    .from(mesas)
    .where(
      and(
        eq(mesas.activa, true),
        not(inArray(mesas.id, reservedMesaIds))
      )
    )
    .orderBy(asc(mesas.numero));
}

export async function getReservasByDate(fecha: string) {
  return db
    .select()
    .from(reservas)
    .where(eq(reservas.fecha, fecha))
    .orderBy(asc(reservas.hora));
}

export async function getPedidosByEstado(estado?: string) {
  const conditions = [];
  if (estado) {
    conditions.push(eq(pedidos.estado, estado));
  }
  return db
    .select()
    .from(pedidos)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(desc(pedidos.fechaHora));
}
