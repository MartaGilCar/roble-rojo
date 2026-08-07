import { Resend } from "resend";
import type { ContactFormValues } from "@/types/contact";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;
const resendFrom = "onboarding@resend.dev";

function createResendClient() {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY no está definido.");
  }

  return new Resend(resendApiKey);
}

function buildContactEmailHtml(values: ContactFormValues) {
  return `
    <div style="font-family: Inter, sans-serif; color: #2B2927; line-height: 1.7;">
      <div style="max-width: 680px; margin: 0 auto; padding: 24px; background: #ffffff; border-radius: 24px; border: 1px solid #E8E0D4;">
        <h1 style="font-size: 1.8rem; margin-bottom: 16px; color: #2B2927;">Nueva solicitud de reserva</h1>
        <p style="margin-bottom: 24px; color: #6F6254;">Has recibido una solicitud desde el formulario de Roble Rojo.</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <tbody>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; width: 140px; color: #2B2927;">Nombre</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.name}</td>
            </tr>
            <tr style="border-top: 1px solid #F0E8DE;">
              <td style="padding: 12px 0; font-weight: 600; color: #2B2927;">Correo</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.email}</td>
            </tr>
            <tr style="border-top: 1px solid #F0E8DE;">
              <td style="padding: 12px 0; font-weight: 600; color: #2B2927;">Tipo de sesión</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.sessionType}</td>
            </tr>
            <tr style="border-top: 1px solid #F0E8DE;">
              <td style="padding: 12px 0; font-weight: 600; color: #2B2927;">Fecha aproximada</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.date || "No definida"}</td>
            </tr>
            <tr style="border-top: 1px solid #F0E8DE;">
              <td style="padding: 12px 0; font-weight: 600; color: #2B2927;">Lugar</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.location}</td>
            </tr>
            <tr style="border-top: 1px solid #F0E8DE;">
              <td style="padding: 12px 0; font-weight: 600; color: #2B2927;">Cómo me encontró</td>
              <td style="padding: 12px 0; color: #4B4B4B;">${values.foundBy}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #FAF7F2; border-radius: 18px; border: 1px solid #E8E0D4;">
          <p style="margin: 0 0 10px 0; font-weight: 600; color: #2B2927;">Mensaje</p>
          <p style="margin: 0; color: #4B4B4B; white-space: pre-wrap;">${values.story}</p>
        </div>
        <p style="margin-top: 28px; font-size: 0.9rem; color: #9B8F7F;">Roble Rojo — Solicitud enviada desde el formulario de contacto.</p>
      </div>
    </div>
  `;
}

export async function sendContactEmailNotification(values: ContactFormValues) {
  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL no está definido.");
  }

  const resend = createResendClient();

  await resend.emails.send({
    from: resendFrom,
    to: contactEmail,
    subject: `Nueva solicitud de reserva · ${values.name}`,
    html: buildContactEmailHtml(values),
  });
}
