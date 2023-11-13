import { css } from '@emotion/react'

import Navbar from '@/components/CommonLayout/Navbar'
// import Footer from '@/components/CommonLayout/Footer'

const layoutGlobalCSS = css`
  position: relative;
  top: 120px;
`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main css={layoutGlobalCSS}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
