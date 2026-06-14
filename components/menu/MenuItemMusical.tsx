interface MenuItemMusicalProps {
  nombre: string;
  banda: string;
  anio: number;
  descripcion: string;
  receta?: string;
  precio: number;
  historiaMusicales?: string;
  alergenos?: string[];
}

export function MenuItemMusical({
  nombre,
  banda,
  anio,
  descripcion,
  receta,
  precio,
  historiaMusicales,
  alergenos,
}: MenuItemMusicalProps) {
  const precioFormateado = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precio / 100);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-dorado">
          {nombre}
        </h1>
        <p className="text-gris-light mt-1">
          Inspirado en: <span className="text-white">{banda}</span> &middot;{" "}
          {anio}
        </p>
      </div>

      <p className="text-gris-light leading-relaxed">{descripcion}</p>

      {receta && (
        <div className="bg-negro-light rounded-lg p-4 border border-gris/20">
          <h3 className="font-display text-lg font-semibold text-dorado mb-2">
            Receta
          </h3>
          <p className="text-gris-light text-sm leading-relaxed">{receta}</p>
        </div>
      )}

      {historiaMusicales && (
        <div className="bg-negro-light rounded-lg p-4 border border-gris/20">
          <h3 className="font-display text-lg font-semibold text-dorado mb-2">
            Historia Musical
          </h3>
          <p className="text-gris-light text-sm leading-relaxed">
            {historiaMusicales}
          </p>
        </div>
      )}

      {alergenos && alergenos.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Alergenos</h3>
          <div className="flex flex-wrap gap-2">
            {alergenos.map((alergeno) => (
              <span
                key={alergeno}
                className="text-xs bg-negro-light px-3 py-1 rounded-full text-gris-light border border-gris/30"
              >
                {alergeno}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-gris/20">
        <span className="font-display text-2xl font-bold text-dorado">
          {precioFormateado}
        </span>
      </div>
    </div>
  );
}
