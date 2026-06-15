"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCarrito } from "@/context/CarritoContext";

export default function ConfirmacionPage() {
  const { vaciar } = useCarrito();

  useEffect(() => {
    vaciar();
  }, [vaciar]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-900/30 flex items-center justify-center">
          <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-bold text-dorado mb-4">
          ¡Pedido confirmado!
        </h1>
        <p className="text-gris-light mb-8 leading-relaxed">
          Gracias por tu compra. Recibirás un email de confirmación con los detalles del envío.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/tienda"
            className="px-6 py-3 bg-negro-light text-dorado font-medium rounded-lg border border-gris/30 hover:border-dorado/50 transition-colors"
          >
            Volver a la tienda
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-rojo text-white font-medium rounded-lg hover:bg-rojo/80 transition-colors"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
