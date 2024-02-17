'use client'

import FooterLink from '@/components/FooterLink'
import LinkWithIcon from '@/components/LinkWithIcon'
import SpotifyRecent from '@/components/SpotifyRecent'

export default function Footer() {
  return (
    <div className="p-4 flex gap-4">
      <div className="w-1/3 justify-center">
        <SpotifyRecent
          song="Alaska"
          album="Heard It In A Past Life"
          artist="Maggie Rogers"
          link="https://open.spotify.com/track/4HfLQJtVT1KiX1eVedDyTm?si=1c60c57247944998"
        />
      </div>
      <div className="w-1/3 flex items-center justify-center gap-2">
        <FooterLink text="About" link="/about" />
        <FooterLink text="Projects" link="/projects" />
        <FooterLink text="Contact" link="/contact" />
        <FooterLink text="Blog" link="/blog" />
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <LinkWithIcon link="https://github.com/BenBrochtrup" icon="FaGithub" />
        <LinkWithIcon
          link="https://www.linkedin.com/in/benbrochtrup/"
          icon="FaLinkedin"
        />
        <LinkWithIcon
          link="https://open.spotify.com/user/ben.brochtrup"
          icon="FaSpotify"
        />
      </div>
    </div>
  )
}
