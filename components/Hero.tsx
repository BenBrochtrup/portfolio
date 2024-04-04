'use client'

import React, { useState } from 'react'

interface HeroProps {
  title: string
  subtitle: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full h-min m-4">
      <div className="text-8xl text-center font-medium p-2">{title}</div>
      <div className="text-3xl text-center p-2">{subtitle}</div>
    </div>
  )
}

export default Hero
