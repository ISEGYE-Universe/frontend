import GlobalStyle from '@/styles/Global'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <GlobalStyle />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
