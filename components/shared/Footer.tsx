import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-negro-light border-t border-ambar/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Legal */}
        <div>
          <h3 className="font-display text-lg text-ambar mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gris-light">
            <li>
              <Link href="/legal/aviso-legal" className="hover:text-dorado transition-colors">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/legal/privacidad" className="hover:text-dorado transition-colors">
                Pol&iacute;tica de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/legal/cookies" className="hover:text-dorado transition-colors">
                Pol&iacute;tica de Cookies
              </Link>
            </li>
            <li>
              <Link href="/legal/condiciones" className="hover:text-dorado transition-colors">
                T&eacute;rminos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gris/40 text-center text-sm text-gris-light">
          &copy; 2013-2026 El Bar de Eric. Todos los derechos reservados.
        </div>
      </div>

      {/* Por 2 Duros */}
      <div className="border-t border-ambar/10 bg-negro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <div className="flex items-center justify-center gap-1 text-ambar/40 text-xs tracking-[0.3em] mb-3">
            <span>- - - - - - - - - - -</span>
            <span className="inline-block animate-[hitLeft_0.6s_ease-in-out_infinite_alternate]">&#x1F941;</span>
            <span className="inline-block animate-[hitRight_0.6s_ease-in-out_infinite_alternate-reverse]">&#x1F941;</span>
            <span>- - - - - - - - - - -</span>
          </div>

          <p className="text-gris-light/60 text-xs">
            &copy; 2026 El Bar de Eric &middot; Granada. Negocio ficticio &mdash; proyecto demo. &middot; v1.0
          </p>
          <p className="text-gris-light/40 text-[11px] mt-1">
            Ninguna persona, direcci&oacute;n ni tel&eacute;fono son reales. Los precios y servicios son ilustrativos.
          </p>

          <p className="mt-3 text-sm">
            <span className="text-gris-light/50">Desarrollado por </span>
            <a
              href="https://www.por2duros.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-dorado hover:text-dorado-dark transition-colors"
            >
              Por 2 Duros
            </a>
            <span className="text-gris-light/50"> &middot; buen ritmo, mejor precio </span>
            <span className="inline-block animate-[hitLeft_0.6s_ease-in-out_infinite_alternate]">&#x1F941;</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hitLeft {
          0% { transform: rotate(-25deg); }
          100% { transform: rotate(10deg); }
        }
        @keyframes hitRight {
          0% { transform: rotate(25deg); }
          100% { transform: rotate(-10deg); }
        }
      `}</style>
    </footer>
  );
}
