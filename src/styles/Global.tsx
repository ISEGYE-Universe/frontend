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

const GlobalStyle = () => <Global styles={style} />

export default GlobalStyle