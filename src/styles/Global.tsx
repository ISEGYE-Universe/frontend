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

const fontFace = css`
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 100;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Thin.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 200;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Light.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-DemiLight.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Medium.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 600;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Bold.otf') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Black.otf') format('opentype');
  }
`

const GlobalStyle = () => <Global styles={[resetStyle, fontFace]} />

export default GlobalStyle
