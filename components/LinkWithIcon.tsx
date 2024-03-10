'use client'

import { FC } from 'react'
import Image from 'next/image'

interface DynamicIcon {
  name: string
}

const DynamicIcon: FC<DynamicIcon> = ({ name }) => {
  const icons = require.context('../public/assets/icons', true)
  return <Image src={icons(`./${name}.svg`)} width={75} alt={`${name} icon`}/>
}

interface LinkWithIcon {
  link: string
  icon: string
}

const LinkWithIcon: FC<LinkWithIcon> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-12 hover:bg-skin-button-accent-hover p-2 inline-block align-middle items-center rounded-lg">
        <div>
          <DynamicIcon name={icon} />
        </div>
      </div>
    </a>
  )
}

export default LinkWithIcon
