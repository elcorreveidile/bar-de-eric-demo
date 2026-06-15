import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de El Bar de Eric. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Política de Privacidad
        </h1>
        <div className="prose-invert space-y-6 text-gris-light text-sm leading-relaxed">
          <p className="text-xs text-gris-light/60">
            Última actualización: 15 de junio de 2026
          </p>

          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo
            y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley Orgánica
            3/2018, de 5 de diciembre, de Protección de Datos Personales y
            garantía de los derechos digitales (LOPDGDD), le informamos sobre el
            tratamiento de sus datos personales.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Denominación:</strong> El Bar de
              Eric
            </li>
            <li>
              <strong className="text-white">Dirección:</strong> Calle Escuelas
              8, 18001 Granada, España
            </li>
            <li>
              <strong className="text-white">Teléfono:</strong> +34 958 276 301
            </li>
            <li>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:info@elbardeeric.com"
                className="text-dorado hover:underline"
              >
                info@elbardeeric.com
              </a>
            </li>
            <li>
              <strong className="text-white">Actividad:</strong> Bar-museo
              musical con tienda online, reservas y eventos culturales
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            2. Datos personales que recopilamos
          </h2>
          <p>
            Dependiendo de su interacción con nuestro sitio web, podemos
            recopilar los siguientes datos personales:
          </p>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.1 Reservas y eventos
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Fecha y hora de la reserva</li>
            <li>Número de comensales</li>
            <li>Comentarios o peticiones especiales</li>
          </ul>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.2 Tienda online (merchandising)
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Dirección de envío</li>
            <li>Número de teléfono</li>
            <li>Datos de pago (gestionados por Stripe; no almacenamos datos de tarjeta)</li>
            <li>Historial de pedidos</li>
          </ul>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.3 Autenticación
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dirección de correo electrónico</li>
            <li>Tokens de autenticación (magic link) temporales</li>
            <li>Cookie de sesión</li>
          </ul>

          <h3 className="text-white font-medium mt-4 mb-2">
            2.4 Contacto
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Contenido del mensaje</li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            3. Finalidad del tratamiento
          </h2>
          <p>Sus datos personales son tratados con las siguientes finalidades:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Gestión de reservas:</strong>{" "}
              Tramitar y confirmar sus reservas en el bar-museo.
            </li>
            <li>
              <strong className="text-white">Gestión de pedidos:</strong>{" "}
              Procesar compras realizadas en nuestra tienda online, incluyendo
              envío y facturación.
            </li>
            <li>
              <strong className="text-white">Autenticación:</strong> Verificar
              su identidad mediante magic link para acceder a su cuenta.
            </li>
            <li>
              <strong className="text-white">Comunicación:</strong> Responder a
              sus consultas y solicitudes de información.
            </li>
            <li>
              <strong className="text-white">Información sobre eventos:</strong>{" "}
              Enviarle información sobre programación y eventos, solo si ha dado
              su consentimiento expreso.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            4. Base jurídica del tratamiento
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Ejecución de un contrato</strong>{" "}
              (art. 6.1.b RGPD): Para la gestión de reservas y pedidos en la
              tienda online.
            </li>
            <li>
              <strong className="text-white">Consentimiento</strong> (art. 6.1.a
              RGPD): Para el envío de comunicaciones comerciales y boletines
              informativos.
            </li>
            <li>
              <strong className="text-white">Interés legítimo</strong> (art.
              6.1.f RGPD): Para la mejora de nuestros servicios y la seguridad
              del sitio web.
            </li>
            <li>
              <strong className="text-white">Obligación legal</strong> (art.
              6.1.c RGPD): Para el cumplimiento de obligaciones fiscales y
              contables derivadas de las transacciones comerciales.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            5. Plazo de conservación de los datos
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Datos de reservas:</strong> Se
              conservan durante 12 meses tras la fecha de la reserva.
            </li>
            <li>
              <strong className="text-white">Datos de pedidos:</strong> Se
              conservan durante 5 años conforme a la legislación fiscal y
              mercantil.
            </li>
            <li>
              <strong className="text-white">Datos de cuenta:</strong> Mientras
              la cuenta permanezca activa. Puede solicitar su eliminación en
              cualquier momento.
            </li>
            <li>
              <strong className="text-white">Tokens de autenticación:</strong>{" "}
              Se eliminan automáticamente tras su uso o tras 24 horas.
            </li>
            <li>
              <strong className="text-white">Datos de contacto:</strong> Se
              conservan durante 12 meses tras la última comunicación.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            6. Destinatarios y encargados del tratamiento
          </h2>
          <p>
            Para la prestación de nuestros servicios, compartimos datos con los
            siguientes proveedores (encargados del tratamiento):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Stripe, Inc.</strong> (EE.UU.) —
              Procesamiento de pagos online. Stripe cumple con el EU-US Data
              Privacy Framework.{" "}
              <a
                href="https://stripe.com/es/privacy"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad de Stripe
              </a>
            </li>
            <li>
              <strong className="text-white">Resend, Inc.</strong> (EE.UU.) —
              Envío de correos electrónicos transaccionales (confirmaciones de
              pedido, magic links de autenticación).{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad de Resend
              </a>
            </li>
            <li>
              <strong className="text-white">Vercel, Inc.</strong> (EE.UU.) —
              Alojamiento del sitio web.{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad de Vercel
              </a>
            </li>
            <li>
              <strong className="text-white">Neon, Inc.</strong> (EE.UU.) —
              Base de datos en la nube.{" "}
              <a
                href="https://neon.tech/privacy"
                className="text-dorado hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad de Neon
              </a>
            </li>
          </ul>
          <p>
            Las transferencias internacionales de datos a EE.UU. se realizan al
            amparo de las Cláusulas Contractuales Tipo de la Comisión Europea
            y/o el EU-US Data Privacy Framework, según corresponda.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            7. Derechos del interesado
          </h2>
          <p>
            Conforme al RGPD, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-white">Acceso:</strong> Conocer qué datos
              personales suyos tratamos.
            </li>
            <li>
              <strong className="text-white">Rectificación:</strong> Solicitar
              la corrección de datos inexactos o incompletos.
            </li>
            <li>
              <strong className="text-white">Supresión:</strong> Solicitar la
              eliminación de sus datos cuando ya no sean necesarios.
            </li>
            <li>
              <strong className="text-white">Limitación:</strong> Solicitar la
              limitación del tratamiento en determinadas circunstancias.
            </li>
            <li>
              <strong className="text-white">Portabilidad:</strong> Recibir sus
              datos en un formato estructurado y de uso común.
            </li>
            <li>
              <strong className="text-white">Oposición:</strong> Oponerse al
              tratamiento de sus datos por motivos relacionados con su situación
              particular.
            </li>
            <li>
              <strong className="text-white">
                Retirada del consentimiento:
              </strong>{" "}
              Retirar su consentimiento en cualquier momento, sin que ello afecte
              a la licitud del tratamiento previo.
            </li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, puede contactarnos en{" "}
            <a
              href="mailto:info@elbardeeric.com"
              className="text-dorado hover:underline"
            >
              info@elbardeeric.com
            </a>{" "}
            indicando en el asunto &quot;Ejercicio de derechos RGPD&quot;.
          </p>
          <p>
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos (AEPD) si considera que el
            tratamiento de sus datos personales no es adecuado:{" "}
            <a
              href="https://www.aepd.es"
              className="text-dorado hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aepd.es
            </a>
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            8. Seguridad de los datos
          </h2>
          <p>
            Hemos implementado medidas técnicas y organizativas adecuadas para
            proteger sus datos personales contra el acceso no autorizado, la
            pérdida, la alteración o la destrucción. Entre estas medidas se
            incluyen: cifrado de datos en tránsito (HTTPS/TLS), autenticación
            sin contraseña mediante magic link, almacenamiento seguro en bases de
            datos cifradas y acceso restringido a los datos.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            9. Modificaciones de esta política
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad
            para adaptarla a novedades legislativas o jurisprudenciales. Cualquier
            cambio será publicado en esta página con la fecha de actualización
            correspondiente.
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
