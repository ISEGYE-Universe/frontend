import Album from '@/data/Album/Album.json'
import {
  AlignJustify,
  MainTitleRegular,
  TextMdBold,
  LineHeight,
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

function AlbumDetail({ album }: { album: string }) {
  const info: Type = Album
  return (
    <div css={DivMarginSize}>
      <div>
        <div css={[MainTitleRegular, LineHeight, AlbumTitle]}>
          {info[album].title}
        </div>
        <div css={[DetailDesDiv, TextMdBold, LineHeight]}>
          {info[album].description}
        </div>
      </div>
      <div css={AlbumInfoDiv}>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight]}>발매일</span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].release}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight, AlignJustify]}>
            장르
          </span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].genre}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight]}>발매사</span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].publisher}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight]}>기획사</span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].agency}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight]}>작사</span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].Lyrics}
          </span>
        </div>
        <div css={SubInfo}>
          <span css={[SubTitle, LineHeight, TextMdLight]}>작곡</span>
          <span css={[SubColorMargin, TextMdRegular, LineHeight]}>
            {info[album].composition}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AlbumDetail
