"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function handleChoice(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setAnimateOut(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ease-out ${
        animateOut ? "translate-y-full" : "animate-[slideUp_0.3s_ease-out]"
      }`}
    >
      <div className="bg-negro-light border-t border-ambar/20 px-4 py-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-gris-light text-sm flex-1">
            Utilizamos cookies t&eacute;cnicas necesarias para el funcionamiento
            del sitio. Puedes consultar nuestra{" "}
            <Link
              href="/legal/cookies"
              className="text-dorado hover:underline"
            >
              pol&iacute;tica de cookies
            </Link>{" "}
            para m&aacute;s informaci&oacute;n.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleChoice("rejected")}
              className="border border-gris/30 text-gris-light text-sm px-4 py-2 rounded hover:bg-gris/10 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => handleChoice("accepted")}
              className="bg-rojo text-white text-sm px-4 py-2 rounded hover:bg-rojo/80 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
