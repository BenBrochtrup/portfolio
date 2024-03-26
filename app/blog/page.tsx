import Post from '@/components/Post'
import Hero from '@/components/Hero'

export default function Blog() {
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
        title="Blog"
        subtitle="Updates on what I have been working on lately"
      />
      <div className="w-full">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 content-start gap-6 px-4">
            {projects.map((p, index) => {
              return (
                <Post
                  key={p.id}
                  id={p.id}
                  tag={p.tag}
                  title={p.title}
                  delay={index * 200}
                />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
