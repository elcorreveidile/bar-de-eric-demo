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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-900/30 flex items-center justify-center">
          <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-3xl font-bold text-dorado mb-4">
          ¡Gracias por tu compra!
        </h1>

        <div className="space-y-4 text-gris-light leading-relaxed mb-8">
          <p>
            Tu pedido ha sido recibido correctamente. Procesaremos tu artículo lo antes posible
            y lo recibirás en la dirección que has indicado durante el pago.
          </p>
          <p>
            En breve recibirás un <strong className="text-white">email de confirmación</strong> con
            los detalles de tu pedido y la información de seguimiento del envío.
          </p>
          <p className="text-sm text-gris-light/70">
            Si tienes cualquier duda sobre tu pedido, no dudes en escribirnos
            o pasarte por el bar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/tienda"
            className="px-6 py-3 bg-negro-light text-dorado font-medium rounded-lg border border-gris/30 hover:border-dorado/50 transition-colors"
          >
            Seguir comprando
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-rojo text-white font-medium rounded-lg hover:bg-rojo/80 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
