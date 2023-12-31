import { TitleSmRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

const itemsPerView = 7

export const streamListContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 210.39px;
`
export const streamListCarousel = [
  TitleSmRegular,

  css`
    overflow: hidden;
    .embla__container {
      display: flex;
      flex-direction: column;
      height: ${54 * itemsPerView}px;
      gap: 16px;
      .embla__slide {
        width: 400px;
        flex: 0 0 40px;
        transition: background-color 1.5s ease;
        border-radius: 9999px;
        &.focused {
          background-color: #ffffff20;
          transition: background-color 0.2s ease;
        }
      }
    }
  `,
]
export const streamListButton = (disabled: boolean) => {
  return css`
    ${disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
    `}
  `
}
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
