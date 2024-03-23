'use client'

import { StrapiClient } from '@/strapi/strapi'
import { useState, useEffect } from 'react'

export default function Projects() {
  const strapi = new StrapiClient()
  // const [projects, setProjects] = useState<>([])

  // useEffect(() => {
  //   strapi.getEntries('projects').then((data) => setProjects(data))
  // }, [])
  const projects = [
    {
      id: 1,
      tag: "side projects",
      title: "Creating a portfolio page"
    },
    {
      id: 2,
      tag: "side projects",
      title: "Mocking API data"
    },
    {
      id: 3,
      tag: "cooking",
      title: "Smoking a brisket"
    },
    {
      id: 4,
      tag: "cooking",
      title: "Cleaning the kitchen"
    },
    {
      id: 5,
      tag: "side projects",
      title: "Using pandas for analysis"
    },
    {
      id: 6,
      tag: "development",
      title: "Dual booting Linux"
    },
  ]

  return (
    <main>
      <div className="justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap content-start m-24 gap-12">
          {projects.map((p) => {
            return (
              <div key={p.id} className="w-full rounded-3xl h-80 p-8 bg-skin-fill-accent overflow-hidden">
                <div className="text-right text-skin-muted">{p.tag}</div>
                <div className="text-center text-skin-base text-xl">{p.title}</div>
                {/* Background */}
                <div className="w-full h-full">
                  <div className="bg-bay-leaf-100 w-full h-full">
                    <div className="w-2/3 h-2/3 m-auto">
                      <div className="bg-bay-leaf-800 w-full h-full"/>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
