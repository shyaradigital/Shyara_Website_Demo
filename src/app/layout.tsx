import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Shyara - Social Media Management Agency",
    template: "%s | Shyara",
  },
  description: "TODO: User will provide content",
  keywords: ["TODO: User will provide content"],
  authors: [{ name: "Shyara" }],
  creator: "Shyara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shyara.com",
    siteName: "Shyara",
    title: "Shyara - Social Media Management Agency",
    description: "TODO: User will provide content",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shyara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyara - Social Media Management Agency",
    description: "TODO: User will provide content",
    images: ["/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
