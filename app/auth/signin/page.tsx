"use client";

import { useState, type FormEvent } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.error === "db_error") {
          throw new Error("Error de base de datos. Contacta al administrador.");
        } else if (data.error === "email_error") {
          throw new Error("Error al enviar email. Verifica la configuración de Resend.");
        } else {
          throw new Error(data.detail || "Error al enviar");
        }
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar el enlace. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-negro-light border border-gris-light/20 rounded-xl p-8">
        <h1 className="font-display text-3xl font-bold text-dorado text-center mb-2">
          Acceso Administraci&oacute;n
        </h1>
        <p className="text-gris-light text-center mb-8">
          Solo para personal autorizado
        </p>

        {sent ? (
          <div className="bg-rojo/20 border border-dorado/30 rounded-lg p-6 text-center">
            <p className="text-dorado font-medium">
              Te hemos enviado un enlace de acceso a tu email
            </p>
            <p className="text-gris-light text-sm mt-2">
              Revisa tu bandeja de entrada y haz clic en el enlace.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
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
                className="w-full px-4 py-3 bg-negro border border-gris-light/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-rojo text-white font-semibold rounded-lg hover:bg-rojo/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar enlace mágico"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
