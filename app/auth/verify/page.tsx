"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const timer = setTimeout(() => {
      setStatus("success");
    }, 2000);

    return () => clearTimeout(timer);
  }, [token]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-negro-light border border-gris-light/20 rounded-xl p-8 text-center">
        {status === "loading" && (
          <>
            <div className="w-12 h-12 border-4 border-dorado/30 border-t-dorado rounded-full animate-spin mx-auto mb-6" />
            <h1 className="font-display text-2xl font-bold text-dorado mb-2">
              Verificando acceso...
            </h1>
            <p className="text-gris-light">
              Comprobando tu enlace de acceso.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-16 h-16 bg-green-900/30 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-bold text-dorado mb-2">
              Acceso verificado
            </h1>
            <p className="text-gris-light">
              Redirigiendo al dashboard...
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-16 h-16 bg-red-900/30 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-bold text-dorado mb-2">
              Enlace inv&aacute;lido o expirado
            </h1>
            <p className="text-gris-light">
              El enlace de acceso no es v&aacute;lido. Solicita uno nuevo desde la p&aacute;gina de acceso.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
