import { css } from '@emotion/react'
import { LogoSection } from './Footer/Logo'
import { TextURL } from './Footer/Text'
import { IconSection } from './Footer/Icon'
import { Location, InfoSection } from './Footer/Bottom'

const footerContainer = css`
  width: 100%;
  height: 380px;
`
const ftCon25 = css`
  background-color: #252525;
`

export const Footer = () => {
  return (
    <footer css={[footerContainer, ftCon25]}>
      <LogoSection />
      <TextURL />
      <IconSection />
      <Location />
      <InfoSection />
    </footer>
  )
}
