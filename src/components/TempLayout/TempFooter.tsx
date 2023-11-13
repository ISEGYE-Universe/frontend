import { css } from '@emotion/react'

const footerStyle = css`
  width: 100%;
  height: 380px;
  background-color: #252525;
`
function TempFooter() {
  return <footer css={footerStyle} />
}

export default TempFooter
