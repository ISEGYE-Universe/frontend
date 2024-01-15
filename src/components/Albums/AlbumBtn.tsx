import {
  ColorImg,
  BlackImg,
  // BlackYoutube,
  // ColorYoutube,
  // BlackVibe,
  // ColorVibe,
  // BlackBugs,
  // ColorBugs,
} from '@/styles/Album/AlbumBtn'
import { AlbumBtnSize } from '@/styles/Album/AlbumInfo'
import Image from 'next/image'
import BtnLink from '@/data/Album/AlbumBtnLink.json'
import Link from 'next/link'

type PropType = {
  player: string
  // width: number
  // height: number
  album: string
}

type JSONType = {
  [key: string]: {
    [key: string]: string
  }
}

export const PlayerButton = ({ player, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link
      css={AlbumBtnSize}
      href={json[album][player]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`/images/album/btnImg/${player}_black.svg`}
        alt={`${player} Black Img`}
        width={50}
        height={50}
        css={BlackImg}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.svg`}
        alt={`${player} Color Img`}
        width={50}
        height={50}
        css={ColorImg}
      />
    </Link>
  )
}
