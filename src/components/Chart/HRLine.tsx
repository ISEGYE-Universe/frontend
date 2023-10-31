import { css } from '@emotion/react'

const hrLineStyle = css`
  margin: 30px 0;
  border: 0;
  height: 1px;
  background-color: #d9d9d9;
`

const HRLine = () => {
  return <hr css={hrLineStyle} />
}

export default HRLine
