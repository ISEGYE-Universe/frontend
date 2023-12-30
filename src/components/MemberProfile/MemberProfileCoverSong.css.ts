import {
  CaptionMdLight,
  CaptionMdRegular,
  CaptionSmRegular,
  TextMdBold,
  TextSmLight,
  TitleSmBold,
} from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

const flexRow = css`
  display: flex;
`
const flexCol = css`
  display: flex;
  flex-direction: column;
`
const justifySpaceBetween = css`
  justify-content: space-between;
`
const alignCenter = css`
  align-items: center;
`

export const memberProfileCoverSongMain = [
  flexCol,

  css`
    position: relative;
    width: 770px;
    height: 460px;
    border-radius: 40px;
    border: 2px solid ${MemberProfileColor.coverBorderGrey};
    background: ${MemberProfileColor.coverBackgroundGrey};
    padding: 20px 16px 20px 32px;
  `,
]
export const memberSignatureImg = css`
  position: absolute;
  right: 44px;
  bottom: 35px;
  width: 210px;
  height: auto;
  pointer-events: none;
  z-index: 0;
`
export const memberProfileCoverSongTitleBox = (color: string) => {
  return [
    flexCol,
    css`
      gap: 6px;
      border-bottom: 2px solid;
      border-color: ${color};
      padding-bottom: 8px;
      margin-right: 24px;
      margin-bottom: 10px;
    `,
  ]
}
export const memberProfileCoverSongTitleText = [
  TitleSmBold,
  css`
    color: ${MemberProfileColor.coverTitleTextBlack};
  `,
]
export const memberProfileCoverSongSubTitleBox = [
  flexRow,
  justifySpaceBetween,
  css`
    color: ${MemberProfileColor.coverSubTitleTextGrey};
  `,
]
export const memberProfileCoverSongSubTitleBoxDesc = CaptionMdRegular
export const memberProfileCoverSongSubTitleBoxMore = CaptionMdLight
export const memberProfileCoverSongListBox = [
  flexCol,
  css`
    gap: 6px;
    overflow-y: auto;
    padding-right: 16px;
    z-index: 1;
  `,
  css`
    &::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #646871;
    }
  `,
]
export const memberProfileCoverSongListItem = [
  flexRow,
  alignCenter,
  css`
    padding: 6px 24px 6px 14px;
    border-radius: 12px;
  `,
]

export const memberProfileCoverSongListItemImage = [
  css`
    margin-right: 16px;
    border-radius: 10px;
  `,
]
export const memberProfileCoverSongListItemTitleBox = (isPlaying: boolean) => [
  flexCol,
  css`
    gap: ${isPlaying ? '8px' : '10px'};
    max-width: 444px;
    width: 100%;
    margin-right: auto;
  `,
]
export const memberProfileCoverSongListItemTitleBoxAnchor = css`
  max-width: 444px;
  width: 100%;
  margin-right: auto;
`
export const memberProfileCoverSongListItemIndexText = (color: string) => {
  return [
    CaptionMdLight,
    css`
      color: ${color};
      margin-right: 20px;
    `,
  ]
}
export const memberProfileCoverSongListItemTitleText = [
  TextMdBold,
  css`
    color: ${MemberProfileColor.coverTitleTextBlack};
  `,
]
export const memberProfileCoverSongListItemDateText = [
  TextSmLight,
  css`
    color: ${MemberProfileColor.coverDateTextGrey};
  `,
]
// progress bar
export const memberProfileCoverSongProgressContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`
export const memberProfileCoverSongProgressTimeText = [
  CaptionSmRegular,
  css`
    display: flex;
    gap: 4px;
    color: ${MemberProfileColor.coverProgressTextGrey};
    margin-right: 2px;
    text-align: right;
  `,
]
export const memberProfileCoverSongProgressBar = css`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${MemberProfileColor.coverProgressBackgroundGrey};
  border-radius: 50px;
`
export const memberProfileCoverSongProgressBarHover = (
  hover: boolean,
  width: number,
) => css`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #c7c7c7;
  width: ${width}px;
  height: 100%;
  border-radius: 50px;

  opacity: ${hover ? 1 : 0};
  transition: opacity 0.2s;
`
export const memberProfileCoverSongProgressHighlight = (
  width: number,
  color: string,
) => css`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${color};
  width: ${width}%;
  height: 100%;
  border-radius: 50px;
`

export const memberProfileCoverSongListItemPlayButton = (
  isReady: boolean,
  color: string,
) => css`
  ${isReady ? '' : `pointer-events: none;`}
  width:32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${color};
  opacity: ${isReady ? 0.5 : 0.1};
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`
export const memberProfileCoverSongListItemPlayIcon = css`
  position: relative;
  left: 1px;
`

export const youtubeEmbedContainer = css`
  display: none;
  // opacity: 0.7;
  // position: absolute;
`
