import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Tyler Hartwell",
  description: "Portfolio and Developer Blog"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen min-w-screen`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  )
}
