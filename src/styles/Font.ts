import { css } from '@emotion/react'

// Pre-defined font style
// Font Family
const fontFamily = css`
  font-family: 'NotoSansCJKkr';
`
// Font Weight
const fontWeightThin = css`
  font-weight: 100;
`
const fontWeightLight = css`
  font-weight: 200;
`
const fontWeightDemiLight = css`
  font-weight: 300;
`
const fontWeightRegular = css`
  font-weight: 400;
`
const fontWeightMedium = css`
  font-weight: 500;
`
const fontWeightBold = css`
  font-weight: 600;
`
const fontWeightBlack = css`
  font-weight: 700;
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
`
export const MainTitleRegular = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeMainTitle}
`
export const MainTitleBold = css`
  ${fontFamily}
  ${fontWeightBlack}
  ${fontSizeMainTitle}
`
// title_lg
export const TitleLgLight = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTitleLg}
`
export const TitleLgRegular = css`
  ${fontFamily}
  ${fontWeightMedium}
  ${fontSizeTitleLg}
`
export const TitleLgBold = css`
  ${fontFamily}
  ${fontWeightBlack}
  ${fontSizeTitleLg}
`
// title_md
export const TitleMdLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTitleMd}
`
export const TitleMdRegular = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTitleMd}
`
export const TitleMdBold = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeTitleMd}
`
// title_sm
export const TitleSmLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTitleSm}
`
export const TitleSmRegular = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTitleSm}
`
export const TitleSmBold = css`
  ${fontFamily}
  ${fontWeightBold}
  ${fontSizeTitleSm}
`
// text_md
export const TextMdLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTextMd}
`
export const TextMdRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTextMd}
`
export const TextMdBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTextMd}
`
// text_sm
export const TextSmLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeTextSm}
`
export const TextSmRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeTextSm}
`
export const TextSmBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeTextSm}
`
// caption_md
export const CaptionMdLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeCaptionMd}
`
export const CaptionMdRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeCaptionMd}
`
export const CaptionMdBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeCaptionMd}
`
// caption_sm
export const CaptionSmLight = css`
  ${fontFamily}
  ${fontWeightLight}
  ${fontSizeCaptionSm}
`
export const CaptionSmRegular = css`
  ${fontFamily}
  ${fontWeightDemiLight}
  ${fontSizeCaptionSm}
`
export const CaptionSmBold = css`
  ${fontFamily}
  ${fontWeightRegular}
  ${fontSizeCaptionSm}
`
export const LineHeight = css`
  ${lineHeight}
`
export const AlignJustify = css`
  ${textAlignJustify}
`
