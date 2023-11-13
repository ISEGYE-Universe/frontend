import {
  LineHeight,
  TextSmLight,
  TitleMdBold,
  TitleSmLight,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleADBannerProps {
  title: string
  desc?: string
  CTAText?: string
  bgImage?: string
  bgColor?: string
}

const contentsContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const textContainerStyle = css`
  display: flex;
  flex-direction: column;
`
const CTAContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 11px;
`

function ArticleADBanner({
  title,
  desc,
  CTAText,
  bgImage,
  bgColor,
}: ArticleADBannerProps) {
  const mainContainerStyle = css`
    width: 100%;
    border-radius: 10px;
    color: #fff;
    padding: 20px 40px 26px;
    background:
      linear-gradient(90deg, ${bgColor} 37.85%, rgba(234, 68, 118, 0.5) 100%),
      url('${bgImage}'),
      lightgray 50% / cover no-repeat;
    background-position: center;
  `
  return (
    <Link href="#">
      <section css={mainContainerStyle}>
        <div css={contentsContainerStyle}>
          <div css={textContainerStyle}>
            <h1
              css={[
                TitleMdBold,
                LineHeight,
                css`
                  margin-bottom: 8px;
                `,
              ]}
            >
              {title}
            </h1>
            {/* Figma 내에 TextSmRegular로 명시되어 있으나 Light에 가까워 보임 */}
            <h2 css={[TextSmLight, LineHeight]}>{desc}</h2>
          </div>
          <div css={CTAContainerStyle}>
            <span css={[TitleSmLight, LineHeight]}>{CTAText}</span>
            <Image
              src="/images/icon/ad-right-chevron.svg"
              alt="right icon"
              width={12}
              height={24}
            />
          </div>
        </div>
      </section>
    </Link>
  )
}

export default ArticleADBanner
