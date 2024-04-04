'use client'

import { StrapiClient } from '@/strapi/strapi'
import Hero from '@/components/Hero'
import { useState, useEffect } from 'react'
import Post from '@/components/Post'

export default function Projects() {
  const strapi = new StrapiClient()
  // const [projects, setProjects] = useState<>([])

  // useEffect(() => {
  //   strapi.getEntries('projects').then((data) => setProjects(data))
  // }, [])
  const projects = [
    {
      id: '1',
      tag: 'side projects',
      title: 'Creating a portfolio page',
    },
    {
      id: '2',
      tag: 'side projects',
      title: 'Mocking API data',
    },
    {
      id: '3',
      tag: 'cooking',
      title: 'Smoking a brisket',
    },
    {
      id: '4',
      tag: 'cooking',
      title: 'Cleaning the kitchen',
    },
    {
      id: '5',
      tag: 'side projects',
      title: 'Using pandas for analysis',
    },
    {
      id: '6',
      tag: 'development',
      title: 'Dual booting Linux',
    },
    {
      id: '7',
      tag: 'side projects',
      title: 'Creating a portfolio page',
    },
    {
      id: '8',
      tag: 'side projects',
      title: 'Mocking API data',
    },
    {
      id: '9',
      tag: 'cooking',
      title: 'Smoking a brisket',
    },
    {
      id: '10',
      tag: 'cooking',
      title: 'Cleaning the kitchen',
    },
    {
      id: '11',
      tag: 'side projects',
      title: 'Using pandas for analysis',
    },
    {
      id: '12',
      tag: 'development',
      title: 'Dual booting Linux',
    },
  ]

  return (
    <main>
      <Hero
        title="Projects"
        subtitle="Here's what I've been working on lately"
      />
      <div className="justify-center max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-xl flex-wrap content-start mx-4 gap-6">
          {projects.map((p, index) => {
            return (
              <Post
                key={index}
                id={index.toString()}
                tag={p.tag}
                title={p.title}
                delay={index * 150}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
