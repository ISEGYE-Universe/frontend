import {
  CaptionMdLight,
  CaptionMdRegular,
  LineHeight,
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
  LineHeight,
  css`
    width: 770px;
    height: 460px;
    border-radius: 40px;
    border: 2px solid ${MemberProfileColor.coverBorderGrey};
    background: ${MemberProfileColor.coverBackgroundGrey};
    padding: 20px 16px 20px 32px;
  `,
]

export const memberProfileCoverSongTitleBox = [
  flexCol,
  css`
    gap: 6px;
    border-bottom: 2px solid ${MemberProfileColor.jururuPink};
    padding-bottom: 8px;
    margin-right: 24px;
    margin-bottom: 10px;
  `,
]
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
    transition: background-color 0.2s ease;
    &:hover {
      background-color: ${MemberProfileColor.jururuPinkTransparent};
    }
    &:hover .play-icon {
      opacity: 1;
    }
  `,
]
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
export const memberProfileCoverSongListItemIndexText = [
  CaptionMdLight,
  css`
    color: ${MemberProfileColor.jururuPink};
    margin-right: 20px;
  `,
]
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
export const memberProfileCoverSongListItemPlayIcon = [
  css`
    color: ${MemberProfileColor.coverDateTextGrey};
    opacity: 0.5;
    transition: opacity 0.2s ease;
  `,
]
