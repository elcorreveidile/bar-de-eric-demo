import type { Metadata } from "next";
import { PedidosTable } from "@/components/dashboard/PedidosTable";

export const metadata: Metadata = { title: "Gestión Pedidos" };

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        Gestión de Pedidos
      </h2>
      <PedidosTable />
    </div>
  );
}
