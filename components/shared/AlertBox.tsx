"use client";

interface AlertBoxProps {
  type: "success" | "error" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
}

const variantStyles = {
  success: {
    container: "border-green-600 bg-green-900/30",
    icon: "text-green-400",
    title: "text-green-300",
  },
  error: {
    container: "border-rojo bg-rojo/20",
    icon: "text-red-400",
    title: "text-red-300",
  },
  info: {
    container: "border-dorado bg-dorado/10",
    icon: "text-dorado",
    title: "text-dorado",
  },
};

export function AlertBox({ type, title, message, onClose }: AlertBoxProps) {
  const styles = variantStyles[type];

  return (
    <div
      className={`rounded-lg border px-4 py-3 ${styles.container}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <span className={`mt-0.5 flex-shrink-0 ${styles.icon}`}>
          {type === "success" && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {type === "error" && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )}
          {type === "info" && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          )}
        </span>

        {/* Content */}
        <div className="flex-1">
          {title && (
            <p className={`text-sm font-semibold ${styles.title}`}>{title}</p>
          )}
          <p className="text-sm text-gris-light">{message}</p>
        </div>

        {/* Close button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 text-gris-light hover:text-white transition-colors"
            aria-label="Cerrar alerta"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
