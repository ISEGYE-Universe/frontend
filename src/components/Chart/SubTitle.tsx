import { TextMdLight } from '@/styles/Font'
import { css } from '@emotion/react'

interface SubTitleProps {
  children: React.ReactNode
  color?: string
}

const SubTitle = ({ children, color }: SubTitleProps) => {
  return (
    <h2
      css={[
        TextMdLight,
        css`
          color: ${color || '#777'};
        `,
      ]}
    >
      {children}
    </h2>
  )
}

export default SubTitle
