'use client'
import HeaderLink from '@/components/HeaderLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="flex p-4 sticky top-0">
      <div className="flex-grow flex justify-center">
        <div className="flex h-full justify-center w-min rounded-full bg-bay-leaf-100 backdrop-blur-sm">
          <HeaderLink displayText="About" path="/about" first></HeaderLink>
          <HeaderLink displayText="Projects" path="/projects"></HeaderLink>
          <HeaderLink displayText="Blog" path="/blog"></HeaderLink>
          <HeaderLink displayText="Contact" path="/contact" last></HeaderLink>
        </div>
      </div>
    </div>
  )
}
