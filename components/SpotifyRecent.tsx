'use client'

import { FC } from 'react'
import { FaSpotify } from 'react-icons/fa'

interface SpotifyRecent {
  song: string
  album: string
  artist: string
  link: string
}

const SpotifyRecent: FC<SpotifyRecent> = ({ song, album, artist, link }) => {
  return (
    <div className="flex rounded-full bg-bay-leaf-50 w-1/4">
      <FaSpotify className="w-12" />
      <div>
        <div>On repeat</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {song} by {artist}
        </a>
      </div>
    </div>
  )
}

export default SpotifyRecent
