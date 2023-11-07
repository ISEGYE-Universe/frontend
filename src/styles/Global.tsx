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

  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 100;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Thin.otf') format('opentype');
    // exclude ellipsis (…, U+2026)
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 200;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Light.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-DemiLight.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Regular.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Medium.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 600;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Bold.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/NotoSansCJKkr-Black.otf') format('opentype');
    unicode-range: U+0-2025, U+2027-10FFFF;
  }

  button {
    padding: 0;
    border: none;
    background: none;
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

  a {
    text-decoration: none;
  }
`

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle
