"use client";

interface FotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  foto: {
    titulo: string;
    descripcion: string;
    url_foto: string;
    banda: string;
    anio: number;
  };
}

export function FotoModal({ isOpen, onClose, foto }: FotoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 bg-negro-light rounded-xl border border-gris/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-negro/80 text-white hover:text-dorado transition-colors"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="aspect-video bg-gris/20 flex items-center justify-center">
          <span className="text-gris-light">Foto</span>
        </div>

        <div className="p-6">
          <h2 className="font-display text-2xl font-bold text-dorado">
            {foto.titulo}
          </h2>
          <p className="text-gris-light mt-2 leading-relaxed">
            {foto.descripcion}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <span className="text-white">{foto.banda}</span>
            <span className="text-gris-light">&middot;</span>
            <span className="text-gris-light">{foto.anio}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
