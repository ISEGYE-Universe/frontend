import { Global, css } from '@emotion/react'

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
  }

  a {
    text-decoration: none;
  }
`

const GlobalStyle = () => (
  <>
    {/* Font CDN */}
    <link
      href="https://cdn.jsdelivr.net/gh/ayaan-fonts/NotoSans-IsegyeUniverse/fonts/webfonts/NotoSansCJKkr-dynamic-subset.css"
      rel="stylesheet"
    />
    <Global styles={resetStyle} />
  </>
)

export default GlobalStyle
