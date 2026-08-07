import { z } from "zod";

export const sessionTypes = [
  "Retrato",
  "Pareja",
  "Familia",
  "Maternidad",
  "Marca personal",
  "Otro",
] as const;

export const sessionOptions = [
  {
    value: "Retrato",
    label: "Retrato",
    description: "Una sesión íntima para una sola persona.",
  },
  {
    value: "Pareja",
    label: "Pareja",
    description: "Capturar la conexión y la calma compartida.",
  },
  {
    value: "Familia",
    label: "Familia",
    description: "Imágenes naturales que hablan de vínculos y ternura.",
  },
  {
    value: "Maternidad",
    label: "Maternidad",
    description: "Un momento de calma y emoción antes de la llegada.",
  },
  {
    value: "Marca personal",
    label: "Marca personal",
    description: "Una sesión editorial con una presencia auténtica.",
  },
  {
    value: "Otro",
    label: "Otro",
    description: "Tengo una idea especial que quiero compartir.",
  },
] as const;

export const foundByOptions = [
  "Instagram",
  "TikTok",
  "Google",
  "Recomendación",
  "Otro",
] as const;

export const contactFormSchema = z
  .object({
    name: z.string().min(2, "Por favor, dime cómo te llamas."),
    email: z.string().email("El email no parece válido."),
    sessionType: z.enum(sessionTypes),
    date: z.string().optional(),
    dateFlexible: z.boolean(),
    location: z.string().min(2, "Cuéntame sobre el lugar."),
    story: z
      .string()
      .min(20, "Comparte algunos detalles para que pueda conectar con tu historia."),
    foundBy: z.enum(foundByOptions),
    consent: z.boolean().refine((value) => value === true, {
      message: "Debes aceptar la política de privacidad.",
    }),
  })
  .refine((data) => data.dateFlexible || Boolean(data.date?.trim()), {
    path: ["date"],
    message: "Elige un mes aproximado o indica que aún no está decidida.",
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
