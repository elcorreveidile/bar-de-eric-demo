import Link from "next/link";

export const metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de El Bar de Eric. Información legal sobre el sitio web conforme a la LSSI-CE.",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Aviso Legal
        </h1>
        <div className="prose-invert space-y-6 text-gris-light text-sm leading-relaxed">
          <p className="text-xs text-gris-light/60">
            Última actualización: 15 de junio de 2026
          </p>

          <div className="bg-white/5 border border-dorado/30 rounded-lg p-4 text-xs text-gris-light/80">
            <strong className="text-dorado">Nota:</strong> Este sitio web es una{" "}
            <strong className="text-white">demostración ficticia</strong> creada
            con fines ilustrativos. Los datos de empresa, contacto y actividad
            comercial que se muestran no corresponden a una entidad real
            registrada. Este aviso legal se proporciona como plantilla
            representativa.
          </div>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            1. Datos identificativos del titular
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se informa al usuario de los datos del
            titular del sitio web:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Denominación:</strong> El Bar de
              Eric
            </li>
            <li>
              <strong className="text-white">Domicilio:</strong> Calle Escuelas
              8, 18001 Granada, España
            </li>
            <li>
              <strong className="text-white">Teléfono:</strong> +34 958 276 301
            </li>
            <li>
              <strong className="text-white">Correo electrónico:</strong>{" "}
              <a
                href="mailto:info@elbardeeric.com"
                className="text-dorado hover:underline"
              >
                info@elbardeeric.com
              </a>
            </li>
            <li>
              <strong className="text-white">Actividad:</strong> Bar-museo
              musical con tienda online de merchandising, reservas y
              programación de eventos culturales
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            2. Objeto del sitio web
          </h2>
          <p>
            El presente sitio web tiene como finalidad ofrecer información sobre
            El Bar de Eric, su historia, colección museística, programación de
            eventos, carta gastronómica, servicio de reservas y venta online de
            artículos de merchandising.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            3. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo a título enunciativo
            pero no limitativo: textos, fotografías, gráficos, imágenes, iconos,
            tecnología, software, diseño gráfico, código fuente, así como la
            marca &quot;El Bar de Eric&quot; y demás signos distintivos, están
            protegidos por derechos de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución,
            comunicación pública, transformación o cualquier otra forma de
            explotación de los contenidos de este sitio web, total o
            parcialmente, sin la autorización expresa y por escrito de su
            titular.
          </p>
          <p>
            Las fotografías de artistas y eventos que forman parte de la
            colección del museo se muestran con fines informativos y culturales.
            Los derechos de imagen pertenecen a sus respectivos titulares.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            4. Condiciones de uso
          </h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios ofrecidos a través de este sitio web, absteniéndose de:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Emplear los contenidos con fines ilícitos o contrarios a lo
              establecido en el presente aviso legal.
            </li>
            <li>
              Difundir contenidos de carácter racista, xenófobo, pornográfico,
              de apología del terrorismo o que atenten contra los derechos
              humanos.
            </li>
            <li>
              Intentar acceder a áreas restringidas del sitio web sin
              autorización.
            </li>
            <li>
              Introducir virus informáticos u otros elementos que puedan dañar
              o alterar el funcionamiento del sitio web.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            5. Exclusión de responsabilidad
          </h2>
          <p>El titular del sitio web no se responsabiliza de:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Los posibles errores de seguridad que se puedan producir por el
              uso de navegadores no actualizados o inseguros.
            </li>
            <li>
              Los daños que puedan derivarse del uso inadecuado del sitio web
              por parte del usuario.
            </li>
            <li>
              La falta de disponibilidad o continuidad del funcionamiento del
              sitio web, aunque realizaremos los esfuerzos razonables para
              mantener su operatividad.
            </li>
            <li>
              Los contenidos y servicios de sitios web de terceros a los que se
              pueda acceder mediante enlaces desde este sitio web.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            6. Enlaces a terceros
          </h2>
          <p>
            Este sitio web puede contener enlaces a sitios web de terceros. El
            Bar de Eric no se hace responsable del contenido, la política de
            privacidad ni las prácticas de dichos sitios web. Le recomendamos que
            revise las condiciones legales de cada sitio web que visite.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            7. Protección de datos
          </h2>
          <p>
            El tratamiento de datos personales se realiza conforme a lo
            establecido en nuestra{" "}
            <Link
              href="/legal/privacidad"
              className="text-dorado hover:underline"
            >
              Política de Privacidad
            </Link>
            , el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
            (LOPDGDD).
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            8. Legislación aplicable y jurisdicción
          </h2>
          <p>
            El presente aviso legal se rige por la legislación española. Para la
            resolución de cualquier controversia que pudiera derivarse del acceso
            o uso de este sitio web, las partes se someten a la jurisdicción de
            los juzgados y tribunales de la ciudad de Granada, España, con
            renuncia expresa a cualquier otro fuero que pudiera corresponderles,
            salvo en los casos en que la legislación aplicable no lo permita.
          </p>
          <p>
            Para consumidores y usuarios, de conformidad con el Reglamento (UE)
            524/2013, le informamos de que la Comisión Europea pone a su
            disposición una plataforma de resolución de litigios en línea:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-dorado hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
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
