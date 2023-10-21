import { Global, css } from '@emotion/react'

const style = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle
