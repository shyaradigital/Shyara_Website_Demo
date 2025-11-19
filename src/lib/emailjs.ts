// EmailJS Service Configuration
// TODO: Update these values in .env.local when EmailJS keys are provided

interface EmailJSConfig {
  SERVICE_ID: string
  TEMPLATE_ID: string
  PUBLIC_KEY: string
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  company?: string
  budget?: string
}

interface EmailJSResponse {
  success: boolean
  message: string
}

// Get EmailJS configuration from environment variables
export const getEmailJSConfig = (): EmailJSConfig => {
  const serviceId =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xxbj3sv"
  const templateId =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_l1wo2lg"
  const publicKey =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "61WpC-MTI2cvq-BE_"

  return {
    SERVICE_ID: serviceId,
    TEMPLATE_ID: templateId,
    PUBLIC_KEY: publicKey,
  }
}

// EmailJS Service Functions
export const emailService = {
  // Send contact form email
  sendContactForm: async (formData: ContactFormData): Promise<EmailJSResponse> => {
    try {
      // Dynamic import of EmailJS to avoid SSR issues
      const emailjs = (await import("@emailjs/browser")).default

      const config = getEmailJSConfig()

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "",
        message: formData.message,
        company: formData.company || "",
        budget: formData.budget || "Not specified",
        to_name: "Shyara Team",
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        templateParams,
        config.PUBLIC_KEY
      )

      console.log("Email sent successfully:", response)
      return { success: true, message: "Message sent successfully!" }
    } catch (error: unknown) {
      console.error("Email sending failed:", error)

      // Handle specific error cases
      if (error && typeof error === "object" && "status" in error) {
        const status = error.status as number
        if (status === 400) {
          return {
            success: false,
            message: "Invalid email configuration. Please contact support.",
          }
        } else if (status === 401) {
          return {
            success: false,
            message:
              "Email service authentication failed. Please try again later.",
          }
        } else if (status === 403) {
          return {
            success: false,
            message: "Email service access denied. Please contact support.",
          }
        } else if (status === 500) {
          return {
            success: false,
            message:
              "Email service is temporarily unavailable. Please try again later.",
          }
        }
      }

      return {
        success: false,
        message: "Failed to send message. Please try again or contact us directly.",
      }
    }
  },

  // Initialize EmailJS
  init: () => {
    if (typeof window !== "undefined") {
      import("@emailjs/browser").then((emailjs) => {
        const config = getEmailJSConfig()
        emailjs.default.init(config.PUBLIC_KEY)
      })
    }
  },
}

export default emailService
