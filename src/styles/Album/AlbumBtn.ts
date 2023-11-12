import { css } from '@emotion/react'

const blackImg = css`
  opacity: 1;
  &:hover {
    opacity: 0;
  }
`
const SpotifyPosition = css`
  position: absolute;
  top: 3.4px;
  left: 2.5px;
`
const colorImg = css`
  opacity: 0;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
const textImgPosition = css`
  position: absolute;
  top: 14.7px;
  left: 2.5px;
`
const YoutubePosition = css`
  position: absolute;
  top: 7px;
  left: 10px;
`
const VibePosition = css`
  position: absolute;
  top: 8px;
  left: 7px;
`
const BugsPosition = css`
  position: absolute;
  top: 12px;
  left: 6px;
`

export const BlackImg = css`
  ${blackImg}
  ${SpotifyPosition}
`
export const ColorImg = css`
  ${colorImg}
  ${SpotifyPosition}
`
export const BlackTextImg = css`
  ${blackImg}
  ${textImgPosition}
`
export const ColorTextImg = css`
  ${ColorImg}
  ${textImgPosition}
`
export const BlackYoutube = css`
  ${blackImg}
  ${YoutubePosition}
`
export const ColorYoutube = css`
  ${ColorImg}
  ${YoutubePosition}
`
export const BlackVibe = css`
  ${blackImg}
  ${VibePosition}
`
export const ColorVibe = css`
  ${ColorImg}
  ${VibePosition}
`
export const BlackBugs = css`
  ${blackImg}
  ${BugsPosition}
`
export const ColorBugs = css`
  ${ColorImg}
  ${BugsPosition}
`
