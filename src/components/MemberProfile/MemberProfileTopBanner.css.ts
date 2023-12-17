import { css } from '@emotion/react'
import { MemberProfileColor } from '@/styles/MemberProfileColor'
import {
  CaptionMdBold,
  LineHeight,
  TextSmLight,
  TextSmRegular,
  TitleSmBold,
} from '@/styles/Font'

export const topBannerContainer = (topBannerImage: string) => {
  return css`
    background: url('${topBannerImage}');
    height: 360px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 60px;
  `
}

export const flexRow = css`
  display: flex;
  flex-direction: row;
`
export const flexCol = css`
  display: flex;
  flex-direction: column;
`
export const justifySpaceBetween = css`
  justify-content: space-between;
`
export const alignCenter = css`
  align-items: center;
`
export const alignFlexEnd = css`
  align-items: flex-end;
`
export const textWhite = css`
  color: ${MemberProfileColor.textWhite};
`
export const layoutContainer = [
  flexRow,
  alignFlexEnd,
  css`
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  `,
]
export const memberInformationContainer = [
  justifySpaceBetween,
  flexRow,
  alignCenter,
  css`
    width: 100%;
    margin-bottom: -28px;
  `,
]
export const memberInformationProfileContainer = [
  flexRow,
  alignCenter,
  css`
    gap: 20px;
  `,
]
export const profileImageStyle = css`
  border-radius: 80px;
`
export const memberNameText = [
  TitleSmBold,
  textWhite,
  LineHeight,
  css`
    margin-bottom: 8px;
  `,
]
export const groupNameText = [
  TextSmLight,
  LineHeight,
  textWhite,
  css`
    margin-bottom: 16px;
  `,
]
export const birthDateText = [TextSmRegular, LineHeight, textWhite]
export const socialMediaContainer = [
  flexCol,
  css`
    min-width: 152px;
    min-height: 80px;
    padding: 14px 20px;
    border-radius: 20px;
    background: rgba(37, 37, 37, 0.3);
    margin-right: 68px;
    gap: 12px;
  `,
]
export const socialMediaIconStyle = css`
  margin-right: 8px;
  // anchor 태그와 크기 맞춰주기 위함
  vertical-align: bottom;
`
export const socialMediaLinkStyle = [flexRow, alignCenter]
export const socialMediaTextStyle = [textWhite, LineHeight, CaptionMdBold]
