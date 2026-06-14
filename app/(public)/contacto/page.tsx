
export const metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
          Contacto
        </h1>
        <p className="text-gris-light text-lg">
          Visitanos, llamanos o escríbenos. Estamos en el corazon de Granada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="bg-negro-light rounded-xl p-6 border border-gris/20 space-y-6">
            <div>
              <h2 className="font-display text-lg font-semibold text-dorado mb-2">
                Direccion
              </h2>
              <p className="text-gris-light">
                Calle Elvira, 85
                <br />
                18010 Granada, Espana
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-dorado mb-2">
                Telefono
              </h2>
              <p className="text-gris-light">+34 958 XXX XXX</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-dorado mb-2">
                Email
              </h2>
              <p className="text-gris-light">info@elbardeeric.com</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-dorado mb-2">
                Horario
              </h2>
              <div className="text-gris-light text-sm space-y-1">
                <p>Martes a Jueves: 12:00 - 00:00</p>
                <p>Viernes y Sabado: 12:00 - 02:00</p>
                <p>Domingo: 12:00 - 18:00</p>
                <p>Lunes: Cerrado</p>
              </div>
            </div>
          </div>

          <div className="bg-negro-light rounded-xl border border-gris/20 overflow-hidden">
            {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
            <div
              className="relative aspect-video flex items-center justify-center bg-negro"
              style={{
                backgroundImage: "url('/images/ubicacion/fachada.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-negro/55" />
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gris-light mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gris-light text-sm">Mapa de ubicacion</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-negro-light rounded-xl p-6 border border-gris/20">
            <h2 className="font-display text-xl font-semibold text-dorado mb-6">
              Envíanos un mensaje
            </h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm text-gris-light mb-1.5"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full bg-negro border border-gris/30 rounded-lg px-4 py-2.5 text-white placeholder:text-gris-light focus:outline-none focus:border-dorado transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gris-light mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-negro border border-gris/30 rounded-lg px-4 py-2.5 text-white placeholder:text-gris-light focus:outline-none focus:border-dorado transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm text-gris-light mb-1.5"
                >
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  className="w-full bg-negro border border-gris/30 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-dorado transition-colors"
                >
                  <option value="general">Consulta general</option>
                  <option value="reservas">Reservas</option>
                  <option value="eventos">Eventos y programacion</option>
                  <option value="guia">Guia Rockera</option>
                  <option value="prensa">Prensa</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm text-gris-light mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  className="w-full bg-negro border border-gris/30 rounded-lg px-4 py-2.5 text-white placeholder:text-gris-light focus:outline-none focus:border-dorado transition-colors resize-none"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rojo hover:bg-rojo/80 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
