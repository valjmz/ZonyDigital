import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Zony Digital - Conexiones Empresariales",
  description: "Especialistas en desarrollo de negocios, proyectos inmobiliarios, producción de eventos corporativos y temas legales de conformación de empresas.",
  generator: "v0.app",
  alternates: {
    canonical: "https://zonydigitals.com/",
  },
  openGraph: {
    siteName: "Zony Digital",
    title: "Zony Digital - Conexiones Empresariales",
    description: "Especialistas en desarrollo de negocios, proyectos inmobiliarios, producción de eventos corporativos y temas legales de conformación de empresas.",
    type: "website",
    url: "https://zonydigital.com/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Zony Digital",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zony Digital - Conexiones Empresariales",
    description: "Especialistas en desarrollo de negocios, proyectos inmobiliarios, producción de eventos corporativos y temas legales de conformación de empresas.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Zony Digital",
      },
    ],
    site: "@zonydigital",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  )
}
