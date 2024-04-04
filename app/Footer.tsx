'use client'

import LinkWithIcon from '@/components/LinkWithIcon'
import SpotifyRecent from '@/components/SpotifyRecent'

export default function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="p-4 flex gap-4 justify-between">
          <div className="justify-center">
            <SpotifyRecent
              song="Alaska"
              album="Heard It In A Past Life"
              artist="Maggie Rogers"
              link="https://open.spotify.com/track/4HfLQJtVT1KiX1eVedDyTm?si=1c60c57247944998"
            />
          </div>
          <div className="flex items-center justify-end">
            <LinkWithIcon
              link="https://github.com/BenBrochtrup"
              icon="github"
            />
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
      </div>
    </div>
  )
}
