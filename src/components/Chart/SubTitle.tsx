import ChartColor from '@/styles/ChartColor'
import { TextMdLight } from '@/styles/Font'
import { css } from '@emotion/react'

interface SubTitleProps {
  children: React.ReactNode
  mb?: string
  color?: string
}

export const SubTitle = ({ children, mb, color }: SubTitleProps) => {
  return (
    <h2
      css={[
        TextMdLight,

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
