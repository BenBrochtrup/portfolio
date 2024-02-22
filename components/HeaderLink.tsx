'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface HeaderLinkProps {
  displayText: string
  path: string
  first?: boolean | false
  last?: boolean | false
}

const HeaderLink: FC<HeaderLinkProps> = ({
  displayText,
  path,
  first,
  last,
}) => {
  const pathname = usePathname()
  const url = new URL(path, process.env.BASE_URL)

  return (
    <Link href={path}>
      <div className="w-min text-skin-inverted hover:bg-skin-button-accent-hover p-2 inline-block align-middle items-center rounded-lg">
        <div
          className={`${
            pathname === url.pathname ? 'underline' : 'no-underline'
          }`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  )
}

export default HeaderLink
