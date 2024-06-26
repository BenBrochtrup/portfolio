'use client'

import React, { useState } from 'react'

interface GalleryImageProps {
  src: string
  alt: string
  location: string
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, location }) => {
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
      <img
        src={src}
        alt={alt}
        className="block w-auto rounded-xl overflow-hidden"
      />
      {isHovered ? (
        <div className="absolute bottom-2 left-2 bg-skin-fill-accent text-skin-base py-1 px-2 rounded-md animate-fadeUp">
          {location}
        </div>
      ) : (
        <div className="absolute bottom-2 left-2 bg-skin-fill-accent text-skin-base py-1 px-2 rounded-md animate-fadeDown">
          {location}
        </div>
      )}
    </div>
  )
}

export default GalleryImage
