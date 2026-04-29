import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { Inter } from "next/font/google"
import { site } from "@/lib/site"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap"
})
const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Tyler Hartwell"
  },
  description: site.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/images/forest.jpg",
        width: 1200,
        height: 630,
        alt: "Tyler Hartwell portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/forest.jpg"]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen min-w-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  )
}
