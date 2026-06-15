import Link from "next/link";

export const metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de El Bar de Eric. Información sobre las cookies utilizadas en nuestro sitio web.",
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Política de Cookies
        </h1>
        <div className="prose-invert space-y-6 text-gris-light text-sm leading-relaxed">
          <p className="text-xs text-gris-light/60">
            Última actualización: 15 de junio de 2026
          </p>

          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de
            la sociedad de la información y de comercio electrónico (LSSI-CE), y
            del Reglamento (UE) 2016/679 (RGPD), le informamos sobre el uso de
            cookies y tecnologías similares en el sitio web de El Bar de Eric.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en su navegador cuando los visita. Se utilizan ampliamente
            para hacer que los sitios web funcionen de manera más eficiente, así
            como para proporcionar información a los propietarios del sitio.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            2. Cookies que utilizamos
          </h2>
          <p>
            Nuestro sitio web utiliza exclusivamente cookies técnicas y
            necesarias para el funcionamiento del sitio. No utilizamos cookies de
            análisis, publicidad ni seguimiento.
          </p>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.1 Cookies necesarias (autenticación)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gris-light/20">
                  <th className="text-white py-2 pr-4">Cookie</th>
                  <th className="text-white py-2 pr-4">Finalidad</th>
                  <th className="text-white py-2 pr-4">Duración</th>
                  <th className="text-white py-2">Tipo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gris-light/10">
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">
                    __Secure-next-auth.session-token
                  </td>
                  <td className="py-2 pr-4">
                    Mantener la sesión del usuario autenticado (HTTPS)
                  </td>
                  <td className="py-2 pr-4">Sesión / 30 días</td>
                  <td className="py-2">Necesaria</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">
                    next-auth.session-token
                  </td>
                  <td className="py-2 pr-4">
                    Mantener la sesión del usuario autenticado (HTTP, desarrollo)
                  </td>
                  <td className="py-2 pr-4">Sesión / 30 días</td>
                  <td className="py-2">Necesaria</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">
                    next-auth.csrf-token
                  </td>
                  <td className="py-2 pr-4">
                    Protección contra ataques CSRF en formularios de
                    autenticación
                  </td>
                  <td className="py-2 pr-4">Sesión</td>
                  <td className="py-2">Necesaria</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">
                    next-auth.callback-url
                  </td>
                  <td className="py-2 pr-4">
                    Almacenar la URL de retorno tras la autenticación
                  </td>
                  <td className="py-2 pr-4">Sesión</td>
                  <td className="py-2">Necesaria</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.2 Almacenamiento local (localStorage)
          </h3>
          <p>
            Además de las cookies, utilizamos el almacenamiento local del
            navegador (localStorage) para las siguientes funciones. Aunque
            técnicamente no son cookies, le informamos por transparencia:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gris-light/20">
                  <th className="text-white py-2 pr-4">Clave</th>
                  <th className="text-white py-2 pr-4">Finalidad</th>
                  <th className="text-white py-2">Tipo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gris-light/10">
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">carrito</td>
                  <td className="py-2 pr-4">
                    Almacenar los productos añadidos al carrito de compra para
                    que persistan entre páginas
                  </td>
                  <td className="py-2">Funcional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            3. Cookies de terceros
          </h2>
          <p>
            Actualmente, nuestro sitio web{" "}
            <strong className="text-white">
              no utiliza cookies de análisis ni de terceros
            </strong>
            . No empleamos Google Analytics, Facebook Pixel ni ningún otro
            servicio de rastreo. Si en el futuro incorporásemos este tipo de
            cookies, actualizaremos esta política y solicitaremos su
            consentimiento previo.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            4. Base jurídica
          </h2>
          <p>
            Las cookies necesarias que utilizamos están exentas del requisito de
            consentimiento conforme al artículo 22.2 de la LSSI-CE, ya que son
            estrictamente necesarias para la prestación del servicio solicitado
            por el usuario (autenticación y sesión).
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            5. Cómo gestionar y eliminar cookies
          </h2>
          <p>
            Puede gestionar y eliminar las cookies a través de la configuración
            de su navegador. Tenga en cuenta que desactivar las cookies
            necesarias puede impedir que funciones como la autenticación y el
            carrito de compra funcionen correctamente.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Para eliminar los datos de localStorage, puede hacerlo desde las
            herramientas de desarrollo de su navegador (normalmente F12 →
            Application → Local Storage).
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            6. Modificaciones de esta política
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta política de cookies para
            adaptarla a cambios en nuestro sitio web o en la legislación
            aplicable. Cualquier cambio será publicado en esta página con la
            fecha de actualización correspondiente.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            7. Más información
          </h2>
          <p>
            Para cualquier consulta sobre nuestra política de cookies, puede
            contactarnos en{" "}
            <a
              href="mailto:info@elbardeeric.com"
              className="text-dorado hover:underline"
            >
              info@elbardeeric.com
            </a>
            .
          </p>
          <p>
            Consulte también nuestra{" "}
            <Link
              href="/legal/privacidad"
              className="text-dorado hover:underline"
            >
              Política de Privacidad
            </Link>{" "}
            para más información sobre el tratamiento de sus datos personales.
          </p>

          <div className="mt-12 pt-6 border-t border-gris-light/20">
            <Link
              href="/"
              className="text-dorado hover:underline text-sm"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
