import { css } from '@emotion/react'

import Navbar from '@/components/CommonLayout/Navbar'
import { usePathname } from 'next/navigation'
import { Footer } from './CommonLayout/Footer'

const layoutGlobalCSS = css`
  position: relative;
  top: 120px;
`

const footerBlackList = ['/albums', '/profile']

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const showFooter = !footerBlackList.find((el) => pathname.indexOf(el) !== -1)
  return (
    <>
      <Navbar />
      <main css={layoutGlobalCSS}>{children}</main>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
