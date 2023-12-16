import { css } from '@emotion/react'

import Navbar from '@/components/CommonLayout/Navbar'

const layoutGlobalCSS = css`
  position: relative;
  top: 120px;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main css={layoutGlobalCSS}>{children}</main>
    </>
  )
}

export default Layout
