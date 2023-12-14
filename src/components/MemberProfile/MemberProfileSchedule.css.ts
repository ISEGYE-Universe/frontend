import { css } from '@emotion/react'

export const mainContainer = css`
  margin-bottom: 100px;
`
export const overlay = css`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
`
export const calendarMainContainer = (imageUrl: string) => {
  return css`
    position: relative;
    // 6주까지 있는 달이 있기 때문에 800px -> 882px
    height: 882px;
    background: url('${imageUrl}');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  `
}
