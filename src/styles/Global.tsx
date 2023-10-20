import { Global, css } from '@emotion/react'

const style = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle
