import { css } from '@emotion/react'
import Image from 'next/image'

const LogoContainer = css`
  padding-top: 40px;
  display: relative;
  text-align: center;
`

export const LogoSection = () => {
  return (
    <section css={LogoContainer}>
      <div className="officialIcon">
        <Image
          src="/images/logo/FooterLogo.svg"
          alt="logo icon"
          width={271}
          height={53}
        />
      </div>
    </section>
  )
}
