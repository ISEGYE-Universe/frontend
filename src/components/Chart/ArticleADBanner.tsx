import ChartColor from '@/styles/ChartColor'
import {
  LineHeight,
  TextSmRegular,
  TitleMdBold,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleADBannerProps {
  title: string
  desc?: string
  CTAText?: string
  CTALink?: string
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

export const ArticleADBanner: React.FC<ArticleADBannerProps> = (
  prop: ArticleADBannerProps,
) => {
  const { title, desc, CTAText, CTALink, bgImage, bgColor } = prop
  const mainContainerStyle = css`
    width: 100%;
    border-radius: 10px;
    color: ${ChartColor.textWhite};
    padding: 18px 40px 19px;
    background:
      linear-gradient(90deg, ${bgColor} 37.85%, rgba(234, 68, 118, 0.5) 100%),
      url('${bgImage}'),
      lightgray 50% / cover no-repeat;
    background-position: center;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  return (
    <Link href={CTALink || '#'}>
      <section css={[mainContainerStyle]}>
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
            <h2 css={[TextSmRegular, LineHeight]}>{desc}</h2>
          </div>
          <div css={CTAContainerStyle}>
            <span css={[TitleSmRegular, LineHeight]}>{CTAText}</span>
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

ArticleADBanner.defaultProps = {
  desc: '',
  CTAText: '바로가기',
  CTALink: '#',
  bgImage: '',
  bgColor: ChartColor.isedolPink,
}
