import GalleryImage from '@/components/GalleryImage'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <div>
            <div className="relative w-96 h-96">
              <div className="absolute rounded-t-3xl top-0 left-0 w-full h-full bg-skin-fill-accent"></div>
              {/* Example color for abstract shape */}
              <img
                src="/assets/images/transparent_headshot.png"
                alt="Headshot"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 transition-transform duration-300 ease-out hover:scale-105"
              />
            </div>
          </div>
          <div className="w-1/2">
            <Hero
              title="Hi, I'm Ben"
              subtitle="I'm a software engineer from [chilly]
              Minneapolis, Minnesota."
            />
          </div>
        </div>
        <div className="grid place-items-center">
          <div>
            <p>
              I recently graduated with my Bachelor of Science in Computer
              Science and currently work in the AdTech industry as a backend
              engineer.
            </p>
            <p>
              Growing up I always had a passion for building. From 3D design to
              desktop PC’s to 3D printers and beyond, I’ve always loved using
              technology to create.
            </p>
            <p>
              After landing my first internship, I found myself learning Python
              and Visual Basic in an effort to automate some of my weekly tasks.
              A few short months later, I somehow became the sole IT technician,
              Excel macro writer, and enterprise resource planning software
              consultant; a true jack-of-all-trades yet master of none.
            </p>
            <p>
              Nonetheless, that internship gave me a peek into the realm of
              automation and software. After my wide variety of experiences from
              the summer, I decide to pursue a degree in computer science.
            </p>
            <p>
              The next four years consisted of grueling algorithm classes, way
              too many nights spent in a windowless computer lab, and more
              internships. Along the way I did my best to find time for personal
              projects, rekindling my passion for engineering.
            </p>
            <p>
              Nowadays I work in the retail AdTech industry, leveraging my
              passion for creating to architect enterprise level solutions. As
              things calm down, I feel I finally have the time to pursue the
              long laundry list of ideas I’ve accumulated over the years. My
              goal for this page is to serve a more elegant portfolio than the
              cluttered filesystem on my laptop.
            </p>
            <p>
              When I’m not working on a laptop, I enjoy reading at a local
              coffeeshop, building out my Spotify playlist collection, and
              spending too much money on getting film developed. Thanks for
              taking the time to visit, don’t be a stranger.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <GalleryImage
            src="/assets/images/lauterbrunnen.jpeg"
            alt="Waterfall"
            location="Lauterbrunnen, Switzerland"
          />
          <GalleryImage
            src="/assets/images/lauterbrunnen.jpeg"
            alt="Waterfall"
            location="Lauterbrunnen, Switzerland"
          />
        </div>
      </div>
    </main>
  )
}
