import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

const Section = css`
  margin-top: 40px;
  display: grid;
  justify-items: center;
`

export const IconSection = () => {
  return (
    <section css={Section}>
      <Link href="/" target="_blank">
        <Image
          src="/images/logo/isguni_logo.png"
          alt="temp"
          width={40}
          height={40}
        />
      </Link>
    </section>
  )
}
