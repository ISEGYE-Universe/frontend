import ChartColor from '@/styles/ChartColor'
import { CaptionMdBold, LineHeight } from '@/styles/Font'
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
  shadow?: boolean
}
/**
 * 링크 버튼 컴포넌트
 * @param width string `e.g. 100%, 50px, ...`
 * @param fontStyle `Font.ts`에 정의된 폰트 스타일
 * @param target `anchor`태그 내 `target` 속성. 기본값 - `'_blank'`
 * @param customCss emotion css
 * @param shadow boolean
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
  shadow,
}: RoundedLinkButtonProps) => {
  return (
    <Link href={href} target={target || '_blank'}>
      <div
        css={[
          css`
            width: ${width || '100%'};
            background-color: ${bgColor || ChartColor.bgDarkGrey};
            color: ${fontColor || ChartColor.textWhite};
            padding: 6px 0 7px 0;
            border-radius: 30px;
            text-align: center;
            ${shadow && 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);'}
          `,
          fontStyle || CaptionMdBold,
          LineHeight,
          customCss,
        ]}
      >
        {children}
      </div>
    </Link>
  )
}

export default RoundedLinkButton
