import { Global, css } from '@emotion/react'

const fontStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/ayaan-fonts/NotoSans-IsegyeUniverse@latest/fonts/webfonts/NotoSansCJKkr-dynamic-subset.css');
`

const resetStyle = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

const GlobalStyle = () => <Global styles={[fontStyle, resetStyle]} />

export default GlobalStyle
