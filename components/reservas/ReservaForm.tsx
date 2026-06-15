"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

const horasDisponibles = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
  "00:00", "00:30", "01:00",
];

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
  comensales: number;
  observaciones: string;
}

const initialForm: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  fecha: "",
  hora: "",
  comensales: 2,
  observaciones: "",
};

const inputClass =
  "w-full px-4 py-3 bg-negro-light border border-gris-light/30 rounded-lg text-white placeholder:text-gris-light/50 focus:border-dorado focus:outline-none transition-colors";

export function ReservaForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ id: number; nombre: string; fecha: string; hora: string } | null>(null);
  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "comensales" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!form.nombre || !form.email || !form.fecha || !form.hora) {
      setError("Por favor, completa todos los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Error al enviar la reserva");
      }

      setSuccess({
        id: data.reserva.id,
        nombre: data.reserva.nombre,
        fecha: data.reserva.fecha,
        hora: data.reserva.hora,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-negro-light border border-dorado/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-900/30 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-dorado mb-2">
          ¡Reserva recibida!
        </h2>
        <p className="text-gris-light mb-4">
          Hola {success.nombre}, tu reserva para el {success.fecha} a las {success.hora} ha sido registrada.
        </p>
        <p className="text-sm text-gris-light">
          Referencia: <span className="text-dorado font-mono">#{success.id}</span>
        </p>
        <p className="text-sm text-gris-light mt-1">
          Te enviaremos un email de confirmación en breve.
        </p>
        <button
          onClick={() => {
            setSuccess(null);
            setForm(initialForm);
          }}
          className="mt-6 px-6 py-2 bg-rojo text-white rounded-lg hover:bg-rojo/80 transition-colors"
        >
          Hacer otra reserva
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm text-gris-light mb-2">
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gris-light mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm text-gris-light mb-2">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={form.telefono}
          onChange={handleChange}
          placeholder="+34 600 000 000"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="fecha" className="block text-sm text-gris-light mb-2">
            Fecha *
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            required
            value={form.fecha}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="hora" className="block text-sm text-gris-light mb-2">
            Hora *
          </label>
          <select
            id="hora"
            name="hora"
            required
            value={form.hora}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Seleccionar</option>
            {horasDisponibles.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comensales" className="block text-sm text-gris-light mb-2">
            Comensales *
          </label>
          <select
            id="comensales"
            name="comensales"
            required
            value={form.comensales}
            onChange={handleChange}
            className={inputClass}
          >
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "persona" : "personas"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="observaciones" className="block text-sm text-gris-light mb-2">
          Observaciones
        </label>
        <textarea
          id="observaciones"
          name="observaciones"
          rows={3}
          value={form.observaciones}
          onChange={handleChange}
          placeholder="Alergias, celebraciones, necesidades especiales..."
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacidad"
          name="privacidad"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-rojo"
        />
        <label htmlFor="privacidad" className="text-xs text-gris-light leading-relaxed">
          He leído y acepto la{" "}
          <a href="/legal/privacidad" target="_blank" className="text-dorado hover:text-dorado-dark underline">
            Política de Privacidad
          </a>
          . Consiento el tratamiento de mis datos personales para gestionar mi reserva. *
        </label>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-rojo text-white font-semibold rounded-lg hover:bg-rojo/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {loading ? "Enviando reserva..." : "Reservar mesa"}
      </button>
    </form>
  );
}
