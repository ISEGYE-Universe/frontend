import ChartColor from '@/styles/ChartColor'
import { LineHeight, TextMdLight } from '@/styles/Font'
import { css } from '@emotion/react'

interface SubTitleProps {
  children: React.ReactNode
  mb?: string
  color?: string
}

export const SubTitle = (prop: SubTitleProps) => {
  const { children, mb, color } = prop
  return (
    <h2
      css={[
        TextMdLight,
        LineHeight,
        css`
          ${mb && `margin-bottom: ${mb};`}
          color: ${color || ChartColor.textGrey};
        `,
      ]}
    >
      {children}
    </h2>
  )
}
