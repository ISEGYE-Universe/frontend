import { css } from '@emotion/react'

interface HRLineProps {
  margin?: string
}
function HRLine({ margin }: HRLineProps) {
  return (
    <hr
      css={css`
        margin: ${margin || '30px 0'};
        border: 0;
        height: 1px;
        background-color: #d9d9d9;
      `}
    />
  )
}

export default HRLine
