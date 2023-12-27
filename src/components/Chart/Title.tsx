import ChartColor from '@/styles/ChartColor'
import { TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface TitleProps {
  children: React.ReactNode
  mb?: string
  color?: string
}

export const Title = ({ children, mb, color }: TitleProps) => {
  return (
    <h2
      css={[
        TitleSmRegular,

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
