'use client'

import FooterLink from '@/components/FooterLink'
import LinkWithIcon from '@/components/LinkWithIcon'
import SpotifyRecent from '@/components/SpotifyRecent'

export default function Footer() {
  return (
    <div className="p-4 px-10 flex gap-4">
      <div className="w-2/3 justify-center">
        <SpotifyRecent
          song="Alaska"
          album="Heard It In A Past Life"
          artist="Maggie Rogers"
          link="https://open.spotify.com/track/4HfLQJtVT1KiX1eVedDyTm?si=1c60c57247944998"
        />
      </div>
      {/* <div className="w-1/3 flex items-center justify-center gap-2">
      </div> */}
      <div className="w-1/3 flex items-center justify-end">
        <LinkWithIcon link="https://github.com/BenBrochtrup" icon="github" />
        <LinkWithIcon
          link="https://www.linkedin.com/in/benbrochtrup/"
          icon="linkedin"
        />
        <LinkWithIcon
          link="https://open.spotify.com/user/ben.brochtrup"
          icon="spotify"
        />
      </div>
    </div>
  )
}
