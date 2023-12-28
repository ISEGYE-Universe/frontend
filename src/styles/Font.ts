import { css } from '@emotion/react'

// Pre-defined font style
// Font Family
const fontFamily = css`
  font-family: 'Noto Sans CJK KR';
`
// Font Weight
const fontWeightThin = css`
  font-weight: 100;
`
const fontWeightLight = css`
  font-weight: 300;
`
const fontWeightDemiLight = css`
  font-weight: 200;
`
const fontWeightRegular = css`
  font-weight: 400;
`
const fontWeightMedium = css`
  font-weight: 500;
`
const fontWeightBold = css`
  font-weight: 700;
`
const fontWeightBlack = css`
  font-weight: 900;
`
// Font Size
const fontSizeMainTitle = css`
  font-size: 72px;
  letter-spacing: -2.16px;
`
const fontSizeTitleLg = css`
  font-size: 48px;
  letter-spacing: -1.44px;
`
const fontSizeTitleMd = css`
  font-size: 36px;
  letter-spacing: -1.08px;
`
const fontSizeTitleSm = css`
  font-size: 24px;
  letter-spacing: -0.72px;
`
const fontSizeTextMd = css`
  font-size: 16px;
  letter-spacing: -0.48px;
`
const fontSizeTextSm = css`
  font-size: 14px;
  letter-spacing: -0.42px;
`
const fontSizeCaptionMd = css`
  font-size: 12px;
  letter-spacing: -0.36px;
`
const fontSizeCaptionSm = css`
  font-size: 8px;
  letter-spacing: -0.24px;
`
const lineHeight = css`
  line-height: 110%;
`
const textAlignJustify = css`
  text-align: justify;
`

// main_title
export const MainTitleLight = css`
  ${fontFamily}
  ${fontWeightMedium}
  ${fontSizeMainTitle}
  ${lineHeight}
`
export const MainTitleRegular = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeMainTitle}
  ${lineHeight}
`
export const MainTitleBold = css`
  ${fontFamily}
  ${fontWeightBlack}
  ${fontSizeMainTitle}
  ${lineHeight}
`
// title_lg
export const TitleLgLight = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTitleLg}
  ${lineHeight}
`
export const TitleLgRegular = css`
  ${fontFamily}
  ${fontWeightMedium}
  ${fontSizeTitleLg}
  ${lineHeight}
`
export const TitleLgBold = css`
  ${fontFamily}
  ${fontWeightBlack}
  ${fontSizeTitleLg}
  ${lineHeight}
`
// title_md
export const TitleMdLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTitleMd}
  ${lineHeight}
`
export const TitleMdRegular = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTitleMd}
  ${lineHeight}
`
export const TitleMdBold = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeTitleMd}
  ${lineHeight}
`
// title_sm
export const TitleSmLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTitleSm}
  ${lineHeight}
`
export const TitleSmRegular = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTitleSm}
  ${lineHeight}
`
export const TitleSmBold = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeTitleSm}
  ${lineHeight}
`
// text_md
export const TextMdLight = css`
  ${fontFamily}
  ${fontWeightThin}
  ${fontSizeTextMd}
  ${lineHeight}
`
export const TextMdRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTextMd}
  ${lineHeight}
`
export const TextMdBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTextMd}
  ${lineHeight}
`
// text_sm
export const TextSmLight = css`
  ${fontFamily}
  ${fontWeightThin}
  ${fontSizeTextSm}
  ${lineHeight}
`
export const TextSmRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTextSm}
  ${lineHeight}
`
export const TextSmBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTextSm}
  ${lineHeight}
`
// caption_md
export const CaptionMdLight = css`
  ${fontFamily}
  ${fontWeightThin}
  ${fontSizeCaptionMd}
  ${lineHeight}
`
export const CaptionMdRegular = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeCaptionMd}
  ${lineHeight}
`
export const CaptionMdBold = css`
  ${fontFamily}
  ${fontWeightMedium}
  ${fontSizeCaptionMd}
  ${lineHeight}
`
// caption_sm
export const CaptionSmLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeCaptionSm}
  ${lineHeight}
`
export const CaptionSmRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeCaptionSm}
  ${lineHeight}
`
export const CaptionSmBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeCaptionSm}
  ${lineHeight}
`
export const AlignJustify = css`
  ${textAlignJustify}
`
