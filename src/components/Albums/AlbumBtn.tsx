import {
  ColorImg,
  BlackImg,
  BlackTextImg,
  ColorTextImg,
  BlackYoutube,
  ColorYoutube,
  BlackVibe,
  ColorVibe,
  BlackBugs,
  ColorBugs,
} from '@/styles/Album/AlbumBtn'
import { AlbumBtnSize } from '@/styles/Album/AlbumInfo'
import Image from 'next/image'
import BtnLink from '@/data/Album/AlbumBtnLink.json'
import Link from 'next/link'

type PropType = {
  player: string
  width: number
  height: number
  album: string
}

type JSONType = {
  [key: string]: {
    Spotify: string
    Gaon: string
    Youtube: string
    Vibe: string
    Melon: string
    Genie: string
    Bugs: string
    Flo: string
  }
}

export const SpotButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Spotify} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackImg}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorImg}
      />
    </Link>
  )
}

export const GOButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Gaon} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackTextImg}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorTextImg}
      />
    </Link>
  )
}

export const YTButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Youtube} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackYoutube}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorYoutube}
      />
    </Link>
  )
}

export const VBButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Vibe} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const MLButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Melon} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const GNButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Genie} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const BGButton = ({ player, width, height, album }: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[album].Bugs} target="_blank">
      <Image
        src={`/images/album/btnImg/${player}_black.png`}
        alt={`${player} Black Img`}
        width={width}
        height={height}
        css={BlackBugs}
      />
      <Image
        src={`/images/album/btnImg/${player}_Color.png`}
        alt={`${player} Color Img`}
        width={width}
        height={height}
        css={ColorBugs}
      />
    </Link>
  )
}
