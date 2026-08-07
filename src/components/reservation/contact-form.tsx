"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, sessionOptions, foundByOptions } from "@/lib/contact";
import type { ContactFormValues, SendContactEmailResult } from "@/types/contact";
import { sendContactEmail } from "@/actions/sendContactEmail";
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel, Input, Textarea, Select, Checkbox, FormMessage } from "@/components/ui/form";


export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      sessionType: "Retrato",
      date: "",
      dateFlexible: true,
      location: "",
      story: "",
      foundBy: "Instagram",
      consent: false,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setSuccessMessage(null);
    setStatus("submitting");

    const result: SendContactEmailResult = await sendContactEmail(values);

    if (!result.success) {
      setStatus("idle");
      setServerError(result.error);
      return;
    }

    setStatus("success");
    setSuccessMessage(result.message);
    form.reset({
      name: "",
      email: "",
      sessionType: "Retrato",
      date: "",
      dateFlexible: true,
      location: "",
      story: "",
      foundBy: "Instagram",
      consent: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="mx-auto max-w-4xl rounded-[2rem] border border-[#E8E0D4] bg-white p-8 shadow-[0_20px_80px_rgba(57,50,43,0.09)] sm:p-10"
    >
      <div className="mb-12 grid gap-6">
        <div className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8B7D67]">Reservas</p>
          <h1 className="font-[Cormorant_Garamond] text-4xl leading-[1.05] text-[#2B2927] sm:text-5xl">
            Cuéntame tu historia
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[#6F6254] sm:text-lg">
            Me encantará conocer tu idea y acompañarte a crear recuerdos que hablen de vosotros.
          </p>
        </div>

        {successMessage ? (
          <div className="rounded-[1.75rem] border border-[#E8E0D4] bg-[#F7F4EE] p-8 text-[#3A322B] shadow-sm">
            <p className="text-lg font-semibold"> Gracias por confiar en mí.</p>
            <p className="mt-3 leading-7 text-[#6F6254]">{successMessage}</p>
          </div>
        ) : null}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        {serverError ? (
          <div className="rounded-[1.5rem] border border-red-100 bg-[#FFF2F0] p-5 text-sm text-[#9B2C2C]">
            {serverError}
          </div>
        ) : null}

        <FormItem>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input id="name" placeholder="¿Cómo te llamas?" {...form.register("name")} />
          {form.formState.errors.name ? <FormMessage>{form.formState.errors.name.message}</FormMessage> : null}
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="tu@email.com" {...form.register("email")} />
          {form.formState.errors.email ? <FormMessage>{form.formState.errors.email.message}</FormMessage> : null}
        </FormItem>

        <FormItem>
          <FormLabel>Tipo de sesión</FormLabel>
          <div className="grid gap-3 sm:grid-cols-3">
            {sessionOptions.map((option) => {
              const selected = form.watch("sessionType") === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`group flex flex-col gap-3 rounded-[1.5rem] border px-4 py-5 text-left transition-shadow duration-300 ${
                    selected
                      ? "border-[#2B2927] bg-[#FAF7F2] shadow-[0_4px_30px_rgba(43,41,39,0.09)]"
                      : "border-[#E8E0D4] bg-white hover:border-[#B2A997] hover:bg-[#FBF8F3]"
                  }`}
                  onClick={() => form.setValue("sessionType", option.value)}
                >
                  <div>
                    <p className="font-semibold text-[#2B2927]">{option.label}</p>
                    <p className="mt-1 text-sm leading-6 text-[#6F6254]">{option.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </FormItem>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormItem>
            <FormLabel htmlFor="date">Fecha aproximada</FormLabel>
            <Input id="date" placeholder="Mes o fecha aproximada" {...form.register("date")} />
            {form.formState.errors.date ? <FormMessage>{form.formState.errors.date.message}</FormMessage> : null}
          </FormItem>
          <FormItem>
            <FormLabel className="opacity-0">Flexible</FormLabel>
            <Checkbox {...form.register("dateFlexible")}>Aún no lo tengo decidido</Checkbox>
          </FormItem>
        </div>

        <FormItem>
          <FormLabel htmlFor="location">Lugar</FormLabel>
          <Input id="location" placeholder="Cantabria, playa, bosque..." {...form.register("location")} />
          {form.formState.errors.location ? <FormMessage>{form.formState.errors.location.message}</FormMessage> : null}
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="story">Cuéntame vuestra historia</FormLabel>
          <Textarea
            id="story"
            placeholder="¿Qué os gustaría recordar cuando veáis estas fotografías dentro de diez años? Cuéntame vuestra idea, cómo sois o cualquier detalle que quieras compartir."
            {...form.register("story")}
          />
          {form.formState.errors.story ? <FormMessage>{form.formState.errors.story.message}</FormMessage> : null}
        </FormItem>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormItem>
            <FormLabel htmlFor="foundBy">¿Cómo me encontraste?</FormLabel>
            <Select id="foundBy" {...form.register("foundBy")}> 
              {foundByOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormItem>
          <FormItem>
            <FormLabel className="opacity-0">Privacidad</FormLabel>
            <Checkbox {...form.register("consent")}>Acepto la política de privacidad.</Checkbox>
            {form.formState.errors.consent ? <FormMessage>{form.formState.errors.consent.message}</FormMessage> : null}
          </FormItem>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#6F6254]">
            Un espacio pensado para que puedas compartir lo que más importa.
          </p>
          <Button type="submit" className="rounded-full px-8 py-4" variant="primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Enviando solicitud..." : "Enviar solicitud"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
