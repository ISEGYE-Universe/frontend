import Album from '@/data/Album/Album.json'
import {
  AlignJustify,
  MainTitleRegular,
  TextMdBold,
  TextMdRegular,
  TextMdLight,
} from '@/styles/Font'
import {
  DivMarginSize,
  DetailDesDiv,
  AlbumInfoDiv,
  SubInfo,
  SubColorMargin,
  SubTitle,
  AlbumTitle,
} from '@/styles/Album/AlbumInfo'

type Type = {
  [key: string]: {
    title: string
    description: string
    release: string
    genre: string
    publisher: string
    agency: string
    Lyrics: string
    composition: string
  }
}

type PropType = {
  album: string
}

export const AlbumDetail = ({ album }: PropType) => {
  const info: Type = Album
  return (
    <div css={DivMarginSize}>
      <div>
        <div css={[MainTitleRegular, AlbumTitle]}>{info[album].title}</div>
        <div css={[DetailDesDiv, TextMdBold]}>{info[album].description}</div>
      </div>
      <div css={AlbumInfoDiv}>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight]}>발매일</span>
          <span css={[SubColorMargin, TextMdRegular]}>
            {info[album].release}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight, AlignJustify]}>장르</span>
          <span css={[SubColorMargin, TextMdRegular]}>{info[album].genre}</span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight]}>발매사</span>
          <span css={[SubColorMargin, TextMdRegular]}>
            {info[album].publisher}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight]}>기획사</span>
          <span css={[SubColorMargin, TextMdRegular]}>
            {info[album].agency}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight]}>작사</span>
          <span css={[SubColorMargin, TextMdRegular]}>
            {info[album].Lyrics}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, TextMdLight]}>작곡</span>
          <span css={[SubColorMargin, TextMdRegular]}>
            {info[album].composition}
          </span>
        </div>
      </div>
    </div>
  )
}
