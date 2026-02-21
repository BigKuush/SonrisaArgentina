"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import ButtonFlip from "@/components/elements/button/ButtonFlip";

type Props = {
  btnText?: string;
};

const zonas = [
  "CABA",
  "GBA Norte",
  "GBA Sur",
  "GBA Oeste",
  "Interior Buenos Aires",
  "Córdoba",
  "Rosario",
  "Mendoza",
  "Otra provincia",
];

const necesidades = [
  "Google Maps / Reseñas",
  "Sitio web nuevo",
  "Rediseño de sitio web",
  "SEO local",
  "Publicidad (Google Ads)",
  "No sé, necesito asesoramiento",
];

const WA_NUMBER = "5491127792717";

const FlexibleForm = ({ btnText }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      clinica: "",
      zona: "",
      whatsapp: "",
      necesidad: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const lines = [
      "Nueva consulta desde sonrisaargentina.com",
      "",
      `Nombre: ${values.name}`,
      `Clínica: ${values.clinica}`,
      `WhatsApp: ${values.whatsapp}`,
      `Zona: ${values.zona}`,
      `Necesidad: ${values.necesidad}`,
    ];
    if (values.message) {
      lines.push(`Mensaje: ${values.message}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-[60px] text-center">
        <h3 className="text-[28px] md:text-[36px] leading-[1.2] font-semibold">
          ¡Gracias!
        </h3>
        <p className="mt-[16px] text-[18px] text-secondary max-w-[400px] mx-auto">
          Te escribimos por WhatsApp en menos de 24h.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-y-[50px] gap-x-[30px] md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nombre y apellido*"
                    {...field}
                    className="blog-form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clinica"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Clínica / Cargo*"
                    {...field}
                    className="blog-form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="WhatsApp*"
                    type="tel"
                    {...field}
                    className="blog-form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zona"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <select
                    {...field}
                    className="blog-form-input w-full bg-transparent border-b border-border pb-[15px] text-[16px] outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Zona*
                    </option>
                    {zonas.map((z) => (
                      <option key={z} value={z} className="text-black">
                        {z}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="necesidad"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormControl>
                  <select
                    {...field}
                    className="blog-form-input w-full bg-transparent border-b border-border pb-[15px] text-[16px] outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      ¿Qué querés mejorar primero?*
                    </option>
                    {necesidades.map((n) => (
                      <option key={n} value={n} className="text-black">
                        {n}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormControl>
                  <Input
                    placeholder="Mensaje (opcional)"
                    {...field}
                    className="blog-form-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <ButtonFlip
          className="bg-black text-text-fixed-2 !mt-[60px]"
          btnText={btnText || "Enviar"}
          type="submit"
        />
      </form>
    </Form>
  );
};

export default FlexibleForm;
