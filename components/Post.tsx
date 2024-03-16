'use client'

import React, { useState } from 'react'
import LinkWithIcon from './LinkWithIcon'

interface PostProps {
    id: string
    tag: string
    title: string
  }

const Post: React.FC<PostProps> = ({ id, tag, title }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="inline-block relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <div key={id} className={`flex w-full rounded-xl h-32 p-8 ${isHovered === true ? "bg-skin-fill-accent" : "bg-skin-fill"}`}>
            <div>
                <div className="text-left text-skin-base text-xl">{title}</div>
                <div className="text-left text-skin-base text-xl">{tag}</div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex items-center">
                <LinkWithIcon link="https://github.com/BenBrochtrup" icon="github" />
            </div>
        </div>
    </div>
  )
}

export default Post
