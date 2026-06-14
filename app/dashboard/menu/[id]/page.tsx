import type { Metadata } from "next";
import { MenuForm } from "@/components/dashboard/MenuForm";

export const metadata: Metadata = { title: "Editar Tapa" };

export default async function EditMenuPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const isNew = id === "nueva";

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        {isNew ? "Nueva Tapa" : "Editar Tapa"}
      </h2>
      <MenuForm id={isNew ? undefined : id} />
    </div>
  );
}
