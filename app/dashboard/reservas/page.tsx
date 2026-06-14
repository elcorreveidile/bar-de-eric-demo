import type { Metadata } from "next";
import { ReservasTable } from "@/components/dashboard/ReservasTable";

export const metadata: Metadata = { title: "Gestión Reservas" };

export default function ReservasPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        Gestión de Reservas
      </h2>
      <ReservasTable />
    </div>
  );
}
