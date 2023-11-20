import ChartColor from '@/styles/ChartColor'
import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface TitleProps {
  children: React.ReactNode
  mb?: string
  color?: string
}

export const Title = (prop: TitleProps) => {
  const { children, mb, color } = prop
  return (
    <h2
      css={[
        TitleSmRegular,
        LineHeight,
        css`
          ${mb && `margin-bottom: ${mb};`}
          color: ${color || ChartColor.textBlack};
        `,
      ]}
    >
      {children}
    </h2>
  )
}
