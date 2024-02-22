'use client'
import HeaderLink from '@/components/HeaderLink'
import { usePathname } from 'next/navigation'

export default function Header() {
  return (
    <header className="sticky top-0 bg-opacity-50 backdrop-filter backdrop-blur-lg text-skin-base z-10">
      <div className="flex p-2 sticky top-0">
        <div className="flex-grow flex justify-center">
          <div className="flex h-full justify-center w-min rounded-full backdrop-blur-sm">
            <HeaderLink displayText="About" path="/about" first></HeaderLink>
            <HeaderLink displayText="Projects" path="/projects"></HeaderLink>
            <HeaderLink displayText="Blog" path="/blog"></HeaderLink>
            <HeaderLink displayText="Contact" path="/contact" last></HeaderLink>
          </div>
        </div>
      </div>
    </header>
  )
}
