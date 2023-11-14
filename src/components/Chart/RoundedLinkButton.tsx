import { CaptionMdLight } from '@/styles/Font'
import { Interpolation, Theme, css } from '@emotion/react'
import Link from 'next/link'

interface RoundedLinkButtonProps {
  href: string
  width?: string
  bgColor?: string
  fontColor?: string
  fontStyle?: Interpolation<Theme>
  children: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget
  customCss?: Interpolation<Theme>
}
/**
 * 링크 버튼 컴포넌트
 * @param width string `e.g. 100%, 50px, ...`
 * @param fontStyle `Font.ts`에 정의된 폰트 스타일
 * @param target `anchor`태그 내 `target` 속성. 기본값 - `'_blank'`
 * @param customCss emotion css
 * @author 민타이
 */
const RoundedLinkButton = ({
  href,
  width,
  bgColor,
  fontColor,
  fontStyle,
  children,
  target,
  customCss,
}: RoundedLinkButtonProps) => {
  return (
    <Link href={href} target={target || '_blank'}>
      <div
        css={[
          css`
            width: ${width || '100%'};
            background-color: ${bgColor || '#777'};
            color: ${fontColor || '#fff'};
            padding: 6px 0 7px 0;
            border-radius: 30px;
            text-align: center;
          `,
          fontStyle || CaptionMdLight,
          customCss,
        ]}
      >
        {children}
      </div>
    </Link>
  )
}

export default RoundedLinkButton
