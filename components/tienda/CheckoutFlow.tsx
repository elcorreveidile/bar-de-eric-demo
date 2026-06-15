"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productos } from "@/lib/productos-tienda";
import { useCarrito } from "@/context/CarritoContext";

type Step = "email" | "email-sent" | "datos" | "procesando";

export function CheckoutFlow() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { items } = useCarrito();

  const [step, setStep] = useState<Step>(token ? "datos" : "email");
  const [email, setEmail] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  async function verifyToken(t: string) {
    const res = await fetch(`/api/tienda/verify-token?token=${t}`);
    if (res.ok) {
      const data = await res.json();
      setVerifiedEmail(data.email);
      setStep("datos");
    } else {
      setError("El enlace ha expirado o no es válido. Solicita uno nuevo.");
      setStep("email");
    }
  }

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/tienda/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStep("email-sent");
    } catch {
      setError("No se pudo enviar el enlace. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const carrito = Array.from(items.entries()).map(([id, cantidad]) => ({ id, cantidad }));

  async function handleDatosSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStep("procesando");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: carrito,
          email: verifiedEmail,
          nombre,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error();
      }
    } catch {
      setError("Error al procesar el pago. Inténtalo de nuevo.");
      setStep("datos");
      setLoading(false);
    }
  }

  const carritoItems = carrito
    .map((c) => ({
      producto: productos.find((p) => p.id === c.id)!,
      cantidad: c.cantidad,
    }))
    .filter((c) => c.producto);

  const total = carritoItems.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );

  const totalFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(total / 100);

  if (carrito.length === 0 && step !== "procesando") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-dorado mb-4">
            Tu carrito está vacío
          </h1>
          <Link
            href="/tienda"
            className="text-dorado hover:text-dorado-dark transition-colors"
          >
            ← Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/tienda"
          className="text-dorado hover:text-dorado-dark transition-colors mb-8 inline-block"
        >
          ← Volver a la tienda
        </Link>

        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Checkout
        </h1>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {["Email", "Datos", "Pago"].map((label, i) => {
            const stepIndex =
              step === "email" || step === "email-sent" ? 0 : step === "datos" ? 1 : 2;
            return (
              <div key={label} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    i <= stepIndex ? "bg-dorado" : "bg-gris/30"
                  }`}
                />
                <span
                  className={`text-xs mt-1 block ${
                    i <= stepIndex ? "text-dorado" : "text-gris-light"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3">
            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="bg-negro-light rounded-xl p-6 border border-gris/20">
                  <h2 className="font-display text-xl font-bold text-white mb-4">
                    Verifica tu email
                  </h2>
                  <p className="text-gris-light text-sm mb-4">
                    Te enviaremos un enlace para confirmar tu email antes de continuar con la compra.
                  </p>
                  <label htmlFor="email" className="block text-sm text-gris-light mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-negro border border-gris/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-rojo text-white font-semibold rounded-lg hover:bg-rojo/80 transition-colors disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar enlace de verificación"}
                </button>
              </form>
            )}

            {step === "email-sent" && (
              <div className="bg-negro-light rounded-xl p-8 border border-dorado/30 text-center">
                <div className="w-16 h-16 bg-dorado/10 border border-dorado/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-display text-xl font-bold text-dorado mb-2">
                  Revisa tu email
                </h2>
                <p className="text-gris-light">
                  Te hemos enviado un enlace a <strong className="text-white">{email}</strong>.
                  Haz clic en él para continuar con tu compra.
                </p>
              </div>
            )}

            {step === "datos" && (
              <form onSubmit={handleDatosSubmit} className="space-y-6">
                <div className="bg-negro-light rounded-xl p-6 border border-gris/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-green-900/50 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-green-400 text-sm">Email verificado: {verifiedEmail}</span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-white mb-4">
                    Datos de contacto
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm text-gris-light mb-2">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-negro border border-gris/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm text-gris-light mb-2">
                        Teléfono (opcional)
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 bg-negro border border-gris/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <p className="text-gris-light/60 text-xs mt-4">
                    La dirección de envío se solicitará en la pasarela de pago.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="privacidad-checkout"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 accent-rojo"
                  />
                  <label htmlFor="privacidad-checkout" className="text-xs text-gris-light leading-relaxed">
                    He leído y acepto la{" "}
                    <a href="/legal/privacidad" target="_blank" className="text-dorado hover:text-dorado-dark underline">
                      Política de Privacidad
                    </a>{" "}
                    y los{" "}
                    <a href="/legal/condiciones" target="_blank" className="text-dorado hover:text-dorado-dark underline">
                      Términos y Condiciones
                    </a>
                    . *
                  </label>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-rojo text-white font-semibold rounded-lg hover:bg-rojo/80 transition-colors disabled:opacity-50"
                >
                  {loading ? "Procesando..." : `Pagar ${totalFormateado}`}
                </button>
              </form>
            )}

            {step === "procesando" && (
              <div className="bg-negro-light rounded-xl p-8 border border-gris/20 text-center">
                <div className="w-12 h-12 border-4 border-dorado/30 border-t-dorado rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gris-light">Redirigiendo a la pasarela de pago...</p>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="md:col-span-2">
            <div className="bg-negro-light rounded-xl p-5 border border-gris/20 sticky top-20">
              <h3 className="font-display text-lg font-bold text-dorado mb-4">
                Tu pedido
              </h3>
              <div className="space-y-3">
                {carritoItems.map((item) => (
                  <div key={item.producto.id} className="flex justify-between text-sm">
                    <span className="text-gris-light">
                      {item.cantidad}x {item.producto.nombre}
                    </span>
                    <span className="text-white font-medium">
                      {new Intl.NumberFormat("es-ES", {
                        style: "currency",
                        currency: "EUR",
                      }).format((item.producto.precio * item.cantidad) / 100)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gris/20 mt-4 pt-4 flex justify-between">
                <span className="text-white font-bold">Total</span>
                <span className="text-dorado font-bold text-lg">{totalFormateado}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
