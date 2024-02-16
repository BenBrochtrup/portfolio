'use client'

import { FC } from 'react'
import * as Icons from 'react-icons/fa'

interface DynamicIcon {
  id: string
}

const DynamicIcon: FC<DynamicIcon> = ({ id }) => {
  const IconComponent = Icons[id]

  // Return external link icon if none found
  if (!IconComponent) {
    return <Icons.FaExternalLinkAlt />
  }

  return <IconComponent />
}

interface LinkWithIcon {
  link: string
  icon: string
}

const LinkWithIcon: FC<LinkWithIcon> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-min hover:bg-bay-leaf-400 bg-transparent p-2 inline-block align-middle items-center rounded-lg">
        <div>
          <DynamicIcon id={icon} />
        </div>
      </div>
    </a>
  )
}

export default LinkWithIcon
