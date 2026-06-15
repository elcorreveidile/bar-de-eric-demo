"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface CarritoItem {
  id: string;
  cantidad: number;
}

interface CarritoContextType {
  items: Map<string, number>;
  agregar: (id: string) => void;
  quitar: (id: string) => void;
  vaciar: () => void;
  totalItems: number;
}

const CarritoContext = createContext<CarritoContextType | null>(null);

const STORAGE_KEY = "carrito-tienda";

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Map<string, number>>(new Map());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CarritoItem[] = JSON.parse(stored);
        const map = new Map<string, number>();
        parsed.forEach((item) => map.set(item.id, item.cantidad));
        setItems(map);
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const data = Array.from(items.entries()).map(([id, cantidad]) => ({ id, cantidad }));
    if (data.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [items, loaded]);

  const agregar = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + 1);
      return next;
    });
  }, []);

  const quitar = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      const current = next.get(id) || 0;
      if (current <= 1) {
        next.delete(id);
      } else {
        next.set(id, current - 1);
      }
      return next;
    });
  }, []);

  const vaciar = useCallback(() => {
    setItems(new Map());
  }, []);

  const totalItems = Array.from(items.values()).reduce((a, b) => a + b, 0);

  return (
    <CarritoContext.Provider value={{ items, agregar, quitar, vaciar, totalItems }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error("useCarrito must be used within CarritoProvider");
  return ctx;
}
