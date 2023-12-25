import { css } from '@emotion/react'

export const articleLayoutContainer = css`
  max-width: 1300px;
  margin: 0 auto;
`

export const fullWidthContainer = css`
  max-width: 1920px;
  margin: 0 auto;
`

export const splittedContainer = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 90px;
  margin-bottom: 60px;
`

export const playerRail = css`
  position: absolute;
  height: 1500px;
  top: 416px;
  right: -116px;
`