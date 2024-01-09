'use client'

import LinkWithIcon from '@/components/LinkWithIcon'
import SpotifyRecent from '@/components/SpotifyRecent'

export default function Footer() {
  return (
    <div>
      <div className="flex p-4 justify-center">
        <div className="w-1/2 flex justify-center">
          <LinkWithIcon
            displayText="GitHub"
            link="https://github.com/BenBrochtrup"
            icon="FaGithub"
          />
          <LinkWithIcon
            displayText="LinkedIn"
            link="https://www.linkedin.com/in/benbrochtrup/"
            icon="FaLinkedin"
          />
          <LinkWithIcon
            displayText="Spotify"
            link="https://open.spotify.com/user/ben.brochtrup"
            icon="FaSpotify"
          />
        </div>
      </div>
      <SpotifyRecent
        song="Alaska"
        album="Heard It In A Past Life"
        artist="Maggie Rogers"
        link="https://open.spotify.com/track/4HfLQJtVT1KiX1eVedDyTm?si=1c60c57247944998"
      />
    </div>
  )
}
