import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de compra en la tienda online de El Bar de Eric.",
};

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-dorado mb-8">
          Términos y Condiciones
        </h1>
        <div className="prose-invert space-y-6 text-gris-light text-sm leading-relaxed">
          <p className="text-xs text-gris-light/60">
            Última actualización: 15 de junio de 2026
          </p>

          <p>
            Los presentes Términos y Condiciones regulan el uso del sitio web de
            El Bar de Eric y, en particular, las condiciones de contratación de
            los productos y servicios ofrecidos a través de nuestra tienda online
            y sistema de reservas.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            1. Identificación del vendedor
          </h2>
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
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            2. Ámbito de aplicación
          </h2>
          <p>
            Estos términos se aplican a todas las compras realizadas a través de
            la tienda online de El Bar de Eric (artículos de merchandising:
            camisetas, discos de vinilo, pósters y demás productos) así como a
            las reservas de mesa y eventos realizados a través del sitio web.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            3. Proceso de compra
          </h2>
          <p>El proceso de compra en nuestra tienda online es el siguiente:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong className="text-white">Selección de productos:</strong>{" "}
              Navegue por nuestro catálogo y añada los productos deseados al
              carrito de compra.
            </li>
            <li>
              <strong className="text-white">Revisión del carrito:</strong>{" "}
              Revise los productos seleccionados, cantidades y precios en la
              página del carrito.
            </li>
            <li>
              <strong className="text-white">
                Verificación de identidad:
              </strong>{" "}
              Introduzca su dirección de correo electrónico. Recibirá un enlace
              de verificación (magic link) para confirmar su identidad.
            </li>
            <li>
              <strong className="text-white">Datos de envío:</strong> Complete
              su nombre, dirección de envío y teléfono de contacto.
            </li>
            <li>
              <strong className="text-white">Pago:</strong> Será redirigido a
              la pasarela de pago segura de Stripe para completar la
              transacción.
            </li>
            <li>
              <strong className="text-white">Confirmación:</strong> Recibirá un
              correo electrónico con la confirmación de su pedido y los detalles
              del mismo.
            </li>
          </ol>
          <p>
            Al completar el pago, usted declara haber leído y aceptado los
            presentes Términos y Condiciones, así como nuestra{" "}
            <Link
              href="/legal/privacidad"
              className="text-dorado hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            4. Precios
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Todos los precios mostrados en la tienda están expresados en euros
              (EUR) e incluyen el IVA aplicable.
            </li>
            <li>
              Los gastos de envío, si los hubiera, se indicarán de forma
              desglosada antes de confirmar el pedido.
            </li>
            <li>
              El Bar de Eric se reserva el derecho de modificar los precios en
              cualquier momento, sin que ello afecte a los pedidos ya
              confirmados.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            5. Forma de pago
          </h2>
          <p>
            El pago se realiza exclusivamente a través de la pasarela de pago
            segura{" "}
            <strong className="text-white">Stripe</strong>. Se aceptan las
            principales tarjetas de crédito y débito (Visa, Mastercard, American
            Express). El Bar de Eric no almacena ni tiene acceso a los datos de
            su tarjeta bancaria en ningún momento; estos son gestionados
            íntegramente por Stripe conforme a los estándares PCI DSS.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            6. Envío y entrega
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Los pedidos se envían a toda España peninsular. Consulte
              disponibilidad para Baleares, Canarias, Ceuta y Melilla.
            </li>
            <li>
              El plazo de entrega estimado es de 5 a 10 días laborables desde
              la confirmación del pedido.
            </li>
            <li>
              Recibirá un correo electrónico con la información de seguimiento
              de su envío cuando esté disponible.
            </li>
            <li>
              En caso de retraso en la entrega, le informaremos lo antes posible
              y podrá optar por mantener el pedido o solicitar su cancelación con
              reembolso completo.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            7. Derecho de desistimiento
          </h2>
          <p>
            De conformidad con el Real Decreto Legislativo 1/2007, de 16 de
            noviembre, por el que se aprueba el texto refundido de la Ley General
            para la Defensa de los Consumidores y Usuarios, usted tiene derecho
            a desistir del contrato de compra en un plazo de{" "}
            <strong className="text-white">14 días naturales</strong> desde la
            recepción del producto, sin necesidad de justificación.
          </p>
          <p>Para ejercer el derecho de desistimiento:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Comunique su decisión enviando un correo electrónico a{" "}
              <a
                href="mailto:info@elbardeeric.com"
                className="text-dorado hover:underline"
              >
                info@elbardeeric.com
              </a>{" "}
              indicando su nombre, número de pedido y la fecha de recepción.
            </li>
            <li>
              Devuelva el producto en su embalaje original, sin usar y en
              perfecto estado, en un plazo máximo de 14 días desde la
              comunicación del desistimiento.
            </li>
            <li>
              Los gastos de envío de la devolución correrán a cargo del
              comprador.
            </li>
            <li>
              El reembolso se efectuará a través del mismo medio de pago
              utilizado en la compra, en un plazo máximo de 14 días desde la
              recepción del producto devuelto.
            </li>
          </ol>

          <h3 className="text-white font-medium mt-4 mb-2">
            Excepciones al derecho de desistimiento
          </h3>
          <p>
            No se admitirá el desistimiento en los siguientes casos, conforme a
            la legislación vigente:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Productos precintados que no sean aptos para ser devueltos por
              razones de higiene y que hayan sido desprecintados tras la entrega.
            </li>
            <li>
              Productos personalizados o confeccionados bajo especificaciones del
              consumidor.
            </li>
            <li>
              Grabaciones sonoras o de vídeo precintadas que hayan sido
              desprecintadas.
            </li>
          </ul>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            8. Devoluciones por producto defectuoso
          </h2>
          <p>
            Si el producto recibido es defectuoso o no corresponde con lo
            pedido, tiene derecho a la sustitución o reembolso completo,
            incluyendo los gastos de envío de la devolución. Contacte con
            nosotros en{" "}
            <a
              href="mailto:info@elbardeeric.com"
              className="text-dorado hover:underline"
            >
              info@elbardeeric.com
            </a>{" "}
            adjuntando fotografías del producto y una descripción del defecto.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            9. Garantía legal
          </h2>
          <p>
            Todos los productos vendidos a través de nuestra tienda online están
            cubiertos por la garantía legal de conformidad de{" "}
            <strong className="text-white">3 años</strong> establecida en el
            Real Decreto-ley 7/2021, que transpone la Directiva (UE) 2019/771.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            10. Reservas
          </h2>
          <p>
            Las reservas realizadas a través del sitio web están sujetas a
            disponibilidad. Una vez confirmada la reserva, recibirá un correo
            electrónico de confirmación. Le rogamos que nos informe con la mayor
            antelación posible en caso de no poder acudir a su reserva.
          </p>
          <p>
            El Bar de Eric se reserva el derecho de cancelar reservas en caso de
            fuerza mayor o circunstancias excepcionales, en cuyo caso se lo
            comunicaremos lo antes posible.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            11. Limitación de responsabilidad
          </h2>
          <p>
            El Bar de Eric no será responsable de los daños indirectos,
            incidentales o consecuentes que puedan derivarse del uso de los
            productos adquiridos o de la imposibilidad de acceder al sitio web.
            En todo caso, nuestra responsabilidad se limita al importe
            efectivamente abonado por el cliente.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            12. Legislación aplicable y jurisdicción
          </h2>
          <p>
            Los presentes Términos y Condiciones se rigen por la legislación
            española. Para la resolución de cualquier controversia derivada de
            la contratación a través de este sitio web, las partes se someten a
            la jurisdicción de los juzgados y tribunales de Granada, España, sin
            perjuicio de los derechos que la legislación de protección de
            consumidores pueda reconocer al comprador.
          </p>
          <p>
            Plataforma europea de resolución de litigios en línea:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-dorado hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-3">
            13. Contacto
          </h2>
          <p>
            Para cualquier consulta relacionada con estos Términos y Condiciones,
            puede contactarnos en:
          </p>
          <ul className="list-disc pl-5 space-y-1">
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
              <strong className="text-white">Teléfono:</strong> +34 958 276 301
            </li>
            <li>
              <strong className="text-white">Dirección:</strong> Calle Escuelas
              8, 18001 Granada
            </li>
          </ul>

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
