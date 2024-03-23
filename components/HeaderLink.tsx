'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface HeaderLinkProps {
  displayText: string
  path: string
}

const HeaderLink: FC<HeaderLinkProps> = ({ displayText, path }) => {
  const pathname = usePathname()
  const url = new URL(path, process.env.BASE_URL)

  return (
    <Link href={path}>
      <div
        className={`${
          pathname === url.pathname
            ? 'bg-skin-button-accent-hover rounded-full py-2 px-4'
            : 'bg-transparent py-2 px-4'
        }`}
      >
        <div className="w-min text-lg text-skin-inverted inline-block align-middle items-center">
          {displayText}
        </div>
      </div>
    </Link>
  )
}

export default HeaderLink
