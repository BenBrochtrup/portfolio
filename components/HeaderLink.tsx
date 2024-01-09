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
      <div
        className={`h-full p-4 hover:bg-bay-leaf-200 ${
          first ? 'hover:rounded-l-full' : 'rounded-none'
        } ${last ? 'hover:rounded-r-full' : 'rounded-none'}`}
      >
        <div
          className={`text-bay-leaf-950 ${
            pathname === url.pathname ? 'underline' : 'no-underline'
          } ${first ? 'rounded-l-full pl-2' : 'rounded-none'} ${
            last ? 'rounded-r-full pr-2' : 'rounded-none'
          }`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  )
}

export default HeaderLink
