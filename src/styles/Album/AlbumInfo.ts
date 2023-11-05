import { css } from '@emotion/react'

const divFlex = css`
  width: 1185px;
  display: grid;
  grid-template-columns: 764px 445.25px;
`
const DivWithMargin = css`
  width: 1633px;
  height: 662px;
  margin-left: 287px;
  margin-top: 152px;
`
const albumTitleSize = css`
  width: 600px;
`
// Album Description Div
const DesMgTop = css`
  margin-top: 134px;
`
const DesMgLeft = css`
  margin-left: 82.25px;
`
const DesSize = css`
  width: 363px;
  height: 343px;
`
// Album Detail Description Div
const DetailDiv = css`
  margin-top: 12px;
  width: 365px;
`
// Album Info(genre...)
const InfoDiv = css`
  margin-top: 48px;
`
const SubInfoDiv = css`
  margin-top: 12px;
`
const SubTitleSize = css`
  width: 45px;
  height: 18px;
  display: inline-block;
`
const SubTitleColor = css`
  color: #bababa;
`
const subContent = css`
  margin-left: 24px;
`
const subContentColor = css`
  color: #777;
`
// Album Button Div
const btnDiv = css`
  width: 422px;
  height: 50px;
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`
const btnSize = css`
  width: 45px;
  height: 45px;
  border: 2px solid lightgray;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`
const positionRelative = css`
  position: relative;
`

export const AlbumTitle = css`
  ${albumTitleSize}
`
export const DivFlexBox = css`
  ${divFlex}
`
export const DivMargin = css`
  ${DivWithMargin}
`
export const DivMarginSize = css`
  ${DesMgTop}
  ${DesMgLeft}
  ${DesSize}
`
export const DetailDesDiv = css`
  ${DetailDiv}
`
export const AlbumInfoDiv = css`
  ${InfoDiv}
`
export const SubInfo = css`
  ${SubInfoDiv}
`
export const SubTitle = css`
  ${SubTitleColor}
  ${SubTitleSize}
`
export const SubColorMargin = css`
  ${subContent}
  ${subContentColor}
`
export const AlbumBtnDiv = css`
  ${btnDiv}
`
export const AlbumBtnSize = css`
  ${btnSize}
  ${positionRelative}
`
