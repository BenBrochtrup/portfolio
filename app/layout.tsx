import type { Metadata } from 'next'
import Header from './Header'

import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ben Brochtrup | Software Engineer',
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
      className="bg-gradient-to-b from-bay-leaf-200 to-bay-leaf-300"
    >
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="mb-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
