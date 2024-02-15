'use client'
import HeaderLink from '@/components/HeaderLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // <div className="flex p-4 sticky top-0">
    //   <div className="flex-grow flex justify-center">
    //     <div className="flex h-full justify-center w-min rounded-full bg-bay-leaf-100 backdrop-blur-sm">
    //       <HeaderLink displayText="About" path="/about" first></HeaderLink>
    //       <HeaderLink displayText="Projects" path="/projects"></HeaderLink>
    //       <HeaderLink displayText="Blog" path="/blog"></HeaderLink>
    //       <HeaderLink displayText="Contact" path="/contact" last></HeaderLink>
    //     </div>
    //   </div>
    // </div>
    // components/Header.js

    <header className="sticky top-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          <button
            onClick={() => scrollToSection('about')}
            className="focus:outline-none"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="focus:outline-none"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="focus:outline-none"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="focus:outline-none"
          >
            Blog
          </button>
        </nav>
      </div>
    </header>
  )
}
