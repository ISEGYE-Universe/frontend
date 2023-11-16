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

export const SpotButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Spotify} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackImg}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorImg}
      />
    </Link>
  )
}

export const GOButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Gaon} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackTextImg}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorTextImg}
      />
    </Link>
  )
}

export const YTButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Youtube} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackYoutube}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorYoutube}
      />
    </Link>
  )
}

export const VBButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Vibe} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const MLButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Melon} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const GNButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Genie} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackVibe}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorVibe}
      />
    </Link>
  )
}

export const BGButton = (props: PropType) => {
  const json: JSONType = BtnLink
  return (
    <Link css={AlbumBtnSize} href={json[props.album].Bugs} target="_blank">
      <Image
        src={`/images/album/btnImg/${props.player}_black.png`}
        alt={`${props.player} Black Img`}
        width={props.width}
        height={props.height}
        css={BlackBugs}
      />
      <Image
        src={`/images/album/btnImg/${props.player}_Color.png`}
        alt={`${props.player} Color Img`}
        width={props.width}
        height={props.height}
        css={ColorBugs}
      />
    </Link>
  )
}
