import * as z from "zod"

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  clinica: z.string().min(2, {
    message: "Ingresá el nombre de tu clínica o cargo.",
  }),
  zona: z.string().min(1, {
    message: "Seleccioná tu zona.",
  }),
  whatsapp: z.string().min(8, {
    message: "Ingresá un número de WhatsApp válido.",
  }),
  necesidad: z.string().min(1, {
    message: "Seleccioná qué querés mejorar.",
  }),
  message: z.string().optional(),
})

export const commentSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingresá un correo electrónico válido.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})
