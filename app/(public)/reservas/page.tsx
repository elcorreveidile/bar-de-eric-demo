import type { Metadata } from "next";
import { ReservaForm } from "@/components/reservas/ReservaForm";

export const metadata: Metadata = {
  title: "Reservar Mesa",
};

export default function ReservasPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-reservas.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <section className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-dorado mb-4">
        Reservar Mesa
      </h1>
      <p className="text-gris-light mb-10 leading-relaxed">
        Disponemos de unas 10-12 mesas en nuestro local. Te recomendamos
        reservar con antelaci&oacute;n, especialmente los fines de semana y d&iacute;as de
        evento. Completa el formulario y te confirmaremos tu reserva por email.
      </p>
      <ReservaForm />
    </section>
    </div>
    </div>
  );
}
