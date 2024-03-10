'use client'

import { FC } from 'react'
import { FaSpotify } from 'react-icons/fa'
import Equalizer from './Equalizer'
import Image from 'next/image'
import SpotifyIcon from '../public/assets/icons/spotify.svg'

interface SpotifyRecent {
  song: string
  album: string
  artist: string
  link: string
}

const SpotifyRecent: FC<SpotifyRecent> = ({ song, album, artist, link }) => {
  return (
    <div className="max-w-lg p-2 rounded-full bg-skin-button-accent-hover">
      <div className='flex justify-between items-center'>
        <div className='m-2 flex space-x-3'>
          <Image 
            src={SpotifyIcon}
            width={50}
            alt='Spotify logo'
          />
        <div>
          <div className='text-skin-inverted'>Listening to lately</div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {song} by {artist}
          </a>
        </div>
      </div>
      <div className="mx-4">
        <Equalizer/>
      </div>
      </div>
    </div>
  )
}

export default SpotifyRecent