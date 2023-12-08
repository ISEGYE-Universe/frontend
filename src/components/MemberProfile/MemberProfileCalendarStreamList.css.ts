import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

export const streamListContainer = css`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 20px;

  position: absolute;
  top: 210.39px;
  min-width: 240px;
`

export const streamListContentList = [
  TitleSmRegular,
  LineHeight,
  css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 320px;
  `,
]

export const streamListContentListItem = css`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
`
export const streamListContentListItemDateText = css`
  text-align: center;
  width: 40px;
  color: ${MemberProfileColor.scheduleTextGrey};
`
export const streamListContentListItemTitleText = css`
  color: ${MemberProfileColor.scheduleTextWhite};
`
