'use client'

import { FC } from 'react'

interface FooterLink {
  text: string
  link: string
}

const FooterLink: FC<FooterLink> = ({ text, link }) => {
  return (
    <a href={link}>
      <div className="w-min hover:bg-skin-button-accent-hover p-2 inline-block align-middle items-center rounded-lg">
        {text}
      </div>
    </a>
  )
}

export default FooterLink
