import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Andrew Liu - Frontend Engineer",
  description: "Personal portfolio of Andrew Liu, a passionate frontend engineer and AI explorer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased overflow-x-hidden bg-deep-black text-white">
        {children}
      </body>
    </html>
  )
}
