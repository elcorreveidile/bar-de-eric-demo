"use client";

import { Suspense } from "react";
import { CheckoutFlow } from "@/components/tienda/CheckoutFlow";

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-dorado/30 border-t-dorado rounded-full animate-spin" />
        </div>
      }
    >
      <CheckoutFlow />
    </Suspense>
  );
}
