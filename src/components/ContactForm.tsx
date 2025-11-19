"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/validation/contactSchema"
import { sanitizeInput } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// TODO: EmailJS integration will be added when keys are provided
// import emailjs from "@emailjs/browser"

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not Sure" },
] as const

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: undefined,
      message: "",
    },
  })

  const budget = watch("budget")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        company: data.company ? sanitizeInput(data.company) : "",
        budget: data.budget,
        message: sanitizeInput(data.message),
      }

      // TODO: EmailJS integration
      // When EmailJS keys are provided, uncomment and configure:
      /*
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          company: sanitizedData.company,
          budget: sanitizedData.budget || "Not specified",
          message: sanitizedData.message,
        },
        publicKey
      )
      */

      // Placeholder success handling
      setSubmitStatus("success")
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>TODO: User will provide content</CardTitle>
        <CardDescription>TODO: User will provide content</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="TODO: User will provide content"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="TODO: User will provide content"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              {...register("company")}
              placeholder="TODO: User will provide content"
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Select
              value={budget || ""}
              onValueChange={(value) => setValue("budget", value as ContactFormData["budget"])}
              disabled={isSubmitting}
            >
              <SelectTrigger id="budget">
                <SelectValue placeholder="TODO: User will provide content" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget && (
              <p className="text-sm text-destructive">{errors.budget.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="TODO: User will provide content"
              rows={6}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="rounded-md bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-600 dark:text-green-400">
              TODO: User will provide content
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-md bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
              {errorMessage || "TODO: User will provide content"}
            </div>
          )}

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "TODO: User will provide content" : "TODO: User will provide content"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
