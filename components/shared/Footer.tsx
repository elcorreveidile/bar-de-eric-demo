import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-negro-light border-t border-ambar/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="font-display text-lg text-ambar mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gris-light">
              <li>Calle Escuelas 8, Centro</li>
              <li>18001 Granada</li>
              <li>
                <a
                  href="tel:+34958276301"
                  className="hover:text-dorado transition-colors"
                >
                  +34 958 276 301
                </a>
              </li>
              <li>L-S 09:00-02:00</li>
            </ul>
          </div>

          {/* Navegacion */}
          <div>
            <h3 className="font-display text-lg text-ambar mb-4">
              Navegaci&oacute;n
            </h3>
            <ul className="space-y-2 text-sm text-gris-light">
              <li>
                <Link href="/museo" className="hover:text-dorado transition-colors">
                  Museo
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-dorado transition-colors">
                  Men&uacute;
                </Link>
              </li>
              <li>
                <Link
                  href="/programacion"
                  className="hover:text-dorado transition-colors"
                >
                  Programaci&oacute;n
                </Link>
              </li>
              <li>
                <Link
                  href="/guia-rockera"
                  className="hover:text-dorado transition-colors"
                >
                  Gu&iacute;a Rockera
                </Link>
              </li>
              <li>
                <Link
                  href="/reservas"
                  className="hover:text-dorado transition-colors"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-eric"
                  className="hover:text-dorado transition-colors"
                >
                  Sobre Eric
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-display text-lg text-ambar mb-4">
              Redes Sociales
            </h3>
            <ul className="space-y-2 text-sm text-gris-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dorado transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dorado transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dorado transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dorado transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gris/40 text-center text-sm text-gris-light">
          &copy; 2013-2026 El Bar de Eric. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
