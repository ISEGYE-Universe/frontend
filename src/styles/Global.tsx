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

  p,
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
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  // visx 차트의 tooltip이 portal에 존재하여 global css에 정의
  .visx-tooltip {
    pointer-events: none;
  }
`

const GlobalStyle = () => <Global styles={[fontStyle, resetStyle]} />

export default GlobalStyle
