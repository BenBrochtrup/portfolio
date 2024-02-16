import type { Metadata } from 'next'
import Header from './Header'

import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ben Brochtrup | Software Engineer",
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-auto min-h-full bg-gradient-to-b from-bay-leaf-200 to-bay-leaf-300"
    >
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
