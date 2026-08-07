"use server";

import { contactFormSchema } from "@/lib/contact";
import { sendContactEmailNotification } from "@/lib/resend-mailer";
import type { ContactFormValues, SendContactEmailResult } from "@/types/contact";

export async function sendContactEmail(values: ContactFormValues): Promise<SendContactEmailResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: "Los datos del formulario no son válidos. Revisa los campos marcados y vuelve a intentarlo.",
    };
  }

  try {
    await sendContactEmailNotification(parsed.data);
    return {
      success: true,
      message: "Tu solicitud se ha enviado correctamente. En breve te escribiré para preparar la sesión.",
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "No se pudo enviar el correo. Intenta de nuevo más tarde.",
    };
  }
}
