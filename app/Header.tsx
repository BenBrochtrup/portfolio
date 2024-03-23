'use client'
import { useEffect, useState } from 'react'
import HeaderLink from '@/components/HeaderLink'

export default function Header() {
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener('scroll', updatePosition)

      updatePosition()

      return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
  }

  const scrollPosition = useScrollPosition()

  return (
    <header className="sticky top-0 text-skin-base z-20">
      <div className="flex p-4 sticky top-0">
        <div className="flex-grow flex justify-center items-center">
          <div
            className={
              scrollPosition === 0
                ? 'flex h-full w-min rounded-full bg-opacity-50 backdrop-filter backdrop-blur-md gap-6 my-2 px-2 items-center bg-transparent'
                : 'flex h-full w-min rounded-full bg-opacity-50 backdrop-filter backdrop-blur-md gap-6 my-2 px-2 items-center bg-bay-leaf-50'
            }
          >
            <HeaderLink displayText="About" path="/about"></HeaderLink>
            <HeaderLink displayText="Projects" path="/projects"></HeaderLink>
            <HeaderLink displayText="Blog" path="/blog"></HeaderLink>
            <HeaderLink displayText="Contact" path="/contact"></HeaderLink>
          </div>
        </div>
      </div>
    </header>
  )
}
