export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex items-center justify-center" role="status">
      <div
        className={`${sizeClasses[size]} rounded-full border-gris-light border-t-dorado animate-spin`}
      />
      <span className="sr-only">Cargando...</span>
    </div>
  );
}
