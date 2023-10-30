import { TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface TitleProps {
  children: React.ReactNode
  color?: string
}

const Title = ({ children, color }: TitleProps) => {
  return (
    <h2
      css={[
        TitleSmRegular,
        css`
          color: ${color || '#000'};
        `,
      ]}
    >
      {children}
    </h2>
  )
}

export default Title
