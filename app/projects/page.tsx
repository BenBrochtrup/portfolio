'use client'

import { StrapiClient } from '@/strapi/strapi'
import { useState, useEffect } from 'react'

export default function Projects() {
  const strapi = new StrapiClient()
  const [projects, setProjects] = useState<>([])

  useEffect(() => {
    strapi.getEntries('projects').then((data) => setProjects(data))
  }, [])

  return (
    <main>
      <div className="justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap content-start m-24 gap-12">
          {projects.map((p) => {
            return (
              <div key={p.id} className="w-full h-80 mb-4 bg-bay-leaf-600">
                <div>{p.id}</div>
              </div>
            )
          })}
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>a</div>
          </div>
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>a</div>
          </div>
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>b</div>
          </div>
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>b</div>
          </div>
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>c</div>
          </div>
          <div className="w-full h-80 mb-4 bg-bay-leaf-600">
            <div>c</div>
          </div>
        </div>
      </div>
    </main>
  )
}
