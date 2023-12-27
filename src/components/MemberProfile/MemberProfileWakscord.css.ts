import { TextMdRegular } from '@/styles/Font'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

export const mainContainer = css`
  position: relative;
  padding: 20px;
  width: 440px;
  height: 460px;
  border-radius: 40px;
  background: ${MemberProfileColor.wakscordBackgroundGrey};
`

export const wakscordLogo = css`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 20px 0 0;
`

export const messageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const messageList = css`
  flex-grow: 1;
`

export const refreshIconButton = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${MemberProfileColor.wakscordButtonBackgroundGrey};
  padding: 7px 10px;
  border-radius: 20px;
`
export const refreshIconText = [
  TextMdRegular,

  css`
    color: ${MemberProfileColor.wakscordTextGrey};
  `,
]
