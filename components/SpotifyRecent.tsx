'use client'

import { FC } from 'react'
import { FaSpotify } from 'react-icons/fa'
import Equalizer from './Equalizer'

interface SpotifyRecent {
  song: string
  album: string
  artist: string
  link: string
}

const SpotifyRecent: FC<SpotifyRecent> = ({ song, album, artist, link }) => {
  return (
    <div className="flex rounded-full bg-skin-button-accent-hover">
      <div>
        <FaSpotify className="w-12" />
      </div>
      <div>
        <div>Listening to lately</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {song} by {artist}
        </a>
      </div>
      <div>
        <Equalizer/>
      </div>
    </div>
  )
}

export default SpotifyRecent
