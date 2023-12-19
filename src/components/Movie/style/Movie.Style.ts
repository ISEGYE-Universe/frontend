import { css } from '@emotion/react'

const moviePosition = css`
  position: absolute;
  top: 335px;
`
const left = css`
  left: 40px;
`
const right = css`
  right: 40px;
`
export const relative = css`
  position: relative;
`
export const Flex = css`
  display: flex;
`
export const MovieContainer = css`
  margin: 0 auto;
  width: 1280px;
  text-align: center;
  position: relative;
`
export const CurrentDot = css`
  background-color: #8d8d8d;
  width: 20px;
  height: 10px;
  border-radius: 5px;
`
export const Dot = css`
  background-color: #d1d1d1;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`
export const LeftButton = css`
  ${moviePosition}
  ${left}
`
export const RightButton = css`
  ${moviePosition}
  ${right}
`
export const DotContainer = css`
  gap: 14px;
  justify-content: center;
`
export const SliderDiv = css`
  overflow: hidden;
  height: 720px;
  border-radius: 20px;
  margin-bottom: 10px;
`
export const SubTitle = css`
  margin-bottom: 20px;
  color: #151515;
`
