import Link from 'next/link'
import { TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

const fontColor = css`
  color: #a3a3a3;
  line-height: 110%;
`
const textCenter = css`
  text-align: center;
  cursor: pointer;
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
      <Link href="/profile" css={[TitleSmRegular, fontColor, textCenter]}>
        프로필
      </Link>
      <Link href="/albums/detail" css={[TitleSmRegular, fontColor, textCenter]}>
        음반
      </Link>
      <Link href="/chart" css={[TitleSmRegular, fontColor, textCenter]}>
        차트
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        활동
      </Link>
      <Link href="/bangon" css={[TitleSmRegular, fontColor, textCenter]}>
        뱅온정보
      </Link>
      <Link href="/" css={[TitleSmRegular, fontColor, textCenter]}>
        유입가이드
      </Link>
    </section>
  )
}
