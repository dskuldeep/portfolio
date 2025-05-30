import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kuldeep Paul - Portfolio",
  description: "Product Manager & Data Scientist",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <CSPostHogProvider>
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
      </CSPostHogProvider>
      
    </html>
  )
}

