import type { Metadata } from "next";
import { CarritoContent } from "@/components/reservas/CarritoContent";

export const metadata: Metadata = {
  title: "Carrito",
};

export default function CarritoPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-dorado mb-4">
        Tu Pedido Para Llevar
      </h1>
      <CarritoContent />
    </section>
  );
}
