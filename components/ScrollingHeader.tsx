'use client'
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
    <header className="sticky top-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-skin-base z-10">
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
