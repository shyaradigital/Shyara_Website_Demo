import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Invalid email address"),
  company: z.string().max(200, "Company name must be less than 200 characters").optional().or(z.literal("")),
  phone: z
    .string()
    .regex(/^[+]?[0-9\s\-()]{10,}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  budget: z
    .enum(["under-5k", "5k-10k", "10k-25k", "25k-50k", "50k-plus", "not-sure"], {
      errorMap: () => ({ message: "Please select a valid budget range" }),
    })
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
