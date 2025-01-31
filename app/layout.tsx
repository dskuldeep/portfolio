import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import posthog from 'posthog-js'

posthog.init('phc_An1y3jbrNgWRUmsedVIkVhddPBp84FHWJFTsrsy4f1y',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kuldeep Paul - Portfolio",
  description: "Product Manager & Data Scientist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

