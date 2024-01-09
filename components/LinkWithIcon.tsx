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
  displayText: string
  link: string
  icon: string
}

const LinkWithIcon: FC<LinkWithIcon> = ({ displayText, link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-min flex hover:bg-bay-leaf-400 bg-transparent p-2 align-middle items-center rounded-lg">
        <div className="pr-2">
          <DynamicIcon id={icon} />
        </div>
        <div>{displayText}</div>
      </div>
    </a>
  )
}

export default LinkWithIcon
