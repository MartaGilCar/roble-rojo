import { type z } from "zod";
import { contactFormSchema } from "@/lib/contact";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type SendContactEmailResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      error: string;
    };
