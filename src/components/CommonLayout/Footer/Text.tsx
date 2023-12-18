import Link from 'next/link'
import { TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

const fontColor = css`
  color: #a3a3a3;
  line-height: 110%;
`
const textCenter = css`
  text-align: center;
`
const displayGrid = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0px 530px;
  margin-top: 30px;
`

export const TextURL = () => {
  return (
    <section css={displayGrid}>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        프로필
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        음반
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        소식
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        멤버 프로필
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        공지사항
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        유입가이드
      </Link>
    </section>
  )
}
