import { Resend } from "resend";

const FROM = "El Bar de Eric <noreply@elbardeeric.com>";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendReservaConfirmation(
  to: string,
  reserva: { nombre: string; fecha: string; hora: string; comensales: number }
): Promise<void> {
  const resend = getResend();
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Confirmación de reserva - El Bar de Eric",
    html: `
      <div style="font-family:sans-serif;background:#1a1a1a;color:#ededed;padding:32px;">
        <h1 style="color:#FFD700;">¡Reserva confirmada!</h1>
        <p>Hola ${reserva.nombre},</p>
        <p>Tu reserva ha sido confirmada:</p>
        <ul>
          <li><strong>Fecha:</strong> ${reserva.fecha}</li>
          <li><strong>Hora:</strong> ${reserva.hora}</li>
          <li><strong>Comensales:</strong> ${reserva.comensales}</li>
        </ul>
        <p>Te esperamos en El Bar de Eric.</p>
      </div>
    `,
  });
}

export async function sendMagicLink(
  to: string,
  token: string
): Promise<void> {
  const resend = getResend();
  const url = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/auth/verify?token=${token}`;
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Acceso a El Bar de Eric",
    html: `
      <div style="font-family:sans-serif;background:#1a1a1a;color:#ededed;padding:32px;">
        <h1 style="color:#FFD700;">Enlace de acceso</h1>
        <p>Haz clic en el siguiente enlace para acceder al panel de administración:</p>
        <a href="${url}" style="display:inline-block;background:#8B0000;color:#FFD700;padding:12px 24px;text-decoration:none;border-radius:6px;margin:16px 0;">
          Acceder
        </a>
        <p style="color:#9CA3AF;font-size:14px;">Este enlace expira en 15 minutos.</p>
      </div>
    `,
  });
}

export async function sendPedidoConfirmation(
  to: string,
  pedido: { numeroReferencia: string }
): Promise<void> {
  const resend = getResend();
  await resend.emails.send({
    from: FROM,
    to,
    subject: `Pedido ${pedido.numeroReferencia} - El Bar de Eric`,
    html: `
      <div style="font-family:sans-serif;background:#1a1a1a;color:#ededed;padding:32px;">
        <h1 style="color:#FFD700;">Pedido confirmado</h1>
        <p>Tu pedido <strong>${pedido.numeroReferencia}</strong> ha sido recibido.</p>
        <p>Te avisaremos cuando esté listo para recoger.</p>
        <p>Gracias por elegir El Bar de Eric.</p>
      </div>
    `,
  });
}
