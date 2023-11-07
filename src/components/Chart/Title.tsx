import { LineHeight, TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface TitleProps {
  children: React.ReactNode
  mb?: string
  color?: string
}

const Title = ({ children, mb, color }: TitleProps) => {
  return (
    <h2
      css={[
        TitleSmRegular,
        LineHeight,
        css`
          ${mb && `margin-bottom: ${mb};`}
          color: ${color || '#000'};
        `,
      ]}
    >
      {children}
    </h2>
  )
}

export default Title
