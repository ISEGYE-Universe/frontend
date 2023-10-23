/*
 * 23.10.20
 * Heo0
 */
import Image from 'next/image'
import { css } from '@emotion/react'
import Album from '../../../Album.json'

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

const divflex = css`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
`
const main_title = css`
  font-size: 72px;
`
const two_letter = css`
  letter-spacing: 1em;
`
const three_letter = css`
  padding-left: 1em;
`
const descriptionDiv = css`
  display: grid;
  grid-template-row: 1fr 1fr;
`
const aligncenter = css`
  align-self: center;
`
const descriptionwidth = css`
  width: 25em;
`

const AlbumLayout = ({ ident }: { ident: string }) => {
  const info: Type = Album
  return (
    <div css={divflex}>
      <div className="img-div">
        <Image
          src={`/images/album/${ident}.png`}
          alt="Image Load Fail"
          width={600}
          height={400}
          priority={true}
        />
        <div className="album-btn-div">
          <button>a</button>
          <button>b</button>
          <button>c</button>
          <button>d</button>
          <button>e</button>
          <button>f</button>
          <button>g</button>
        </div>
      </div>
      <div className="description-div" css={descriptionDiv}>
        <div css={aligncenter}>
          <div css={main_title}>{info[ident].title}</div>
          <div css={descriptionwidth}>{info[ident].description}</div>
        </div>
        <div>
          <div>
            <span>발매일</span>
            <span css={three_letter}>{info[ident].release}</span>
          </div>
          <div>
            <span css={two_letter}>장르</span>
            <span>{info[ident].genre}</span>
          </div>
          <div>
            <span>발매사</span>
            <span css={three_letter}>{info[ident].publisher}</span>
          </div>
          <div>
            <span>기획사</span>
            <span css={three_letter}>{info[ident].agency}</span>
          </div>
          <div>
            <span css={two_letter}>작사</span>
            <span>{info[ident].Lyrics}</span>
          </div>
          <div>
            <span css={two_letter}>작곡</span>
            <span>{info[ident].composition}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumLayout
