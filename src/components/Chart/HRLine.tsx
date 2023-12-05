import ChartColor from '@/styles/ChartColor'
import { css } from '@emotion/react'

interface HRLineProps {
  margin?: string
}
export const HRLine: React.FC<HRLineProps> = ({ margin }: HRLineProps) => {
  return (
    <hr
      css={css`
        margin: ${margin || '30px 0 20px 0'};
        border: 0;
        height: 1px;
        background-color: ${ChartColor.bgLightGrey};
      `}
    />
  )
}
