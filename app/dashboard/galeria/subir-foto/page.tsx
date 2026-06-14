import type { Metadata } from "next";
import { FotoUpload } from "@/components/dashboard/FotoUpload";

export const metadata: Metadata = { title: "Subir Foto" };

export default function SubirFotoPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-display text-2xl md:text-3xl text-dorado">
        Subir Foto
      </h2>
      <FotoUpload />
    </div>
  );
}
