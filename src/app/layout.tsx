import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ben Brochtrup's Portfolio",
  description: 'A site to showcase personal projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
