import {
  CaptionMdLight,
  CaptionMdRegular,
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
export const memberProfileCoverSongListItem = (color: string) => {
  return [
    flexRow,
    alignCenter,
    css`
      padding: 6px 24px 6px 14px;
      border-radius: 12px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: ${color};
      }
    `,
  ]
}
export const memberProfileCoverSongListItemImage = [
  css`
    margin-right: 16px;
    border-radius: 10px;
  `,
]
export const memberProfileCoverSongListItemTitleBox = [
  flexCol,
  css`
    gap: 10px;
    max-width: 444px;
    width: 100%;
    margin-right: auto;
  `,
]
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

export const memberProfileCoverSongListItemPlayButton = (
  isReady: boolean,
) => css`
  ${isReady ? '' : `pointer-events: none;`}
`
export const memberProfileCoverSongListItemPlayIcon = (isReady: boolean) => [
  css`
    color: ${MemberProfileColor.coverDateTextGrey};
    opacity: ${isReady ? 0.5 : 0.1};
    transition: opacity 0.2s ease;
    ${isReady ? '' : `pointer-events: none;`}

    &:hover {
      opacity: 1;
    }
  `,
]

export const youtubeEmbedContainer = css`
  display: none;
  // opacity: 0.7;
  // position: absolute;
`
