import { LineHeight, TextMdRegular, TitleMdRegular } from '@/styles/Font'
import { css } from '@emotion/react'
import Title from './Title'

const melonInfoCardContainer = css`
  display: flex;
  justify-content: space-between;
`
const melonInfoCard = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 14px;
  background: #f6f6f6;
  padding: 33px 20px;
`

interface MelonInfoProps {
  musicTitle: string
  dailyListenerNum: number
  dailyChartPosition: number
}

const MelonInfo = ({
  musicTitle,
  dailyListenerNum,
  dailyChartPosition,
}: MelonInfoProps) => {
  return (
    <>
      <Title mb="16px">{musicTitle} 멜론 정보</Title>
      <div css={melonInfoCardContainer}>
        <div
          css={[
            melonInfoCard,
            css`
              min-width: 190px;
            `,
          ]}
        >
          <h3 css={[TextMdRegular, LineHeight]}>일간 감상자</h3>
          <span css={[TitleMdRegular, LineHeight]}>
            {dailyListenerNum.toLocaleString()}명
          </span>
        </div>
        <div
          css={[
            melonInfoCard,
            css`
              min-width: 190px;
            `,
          ]}
        >
          <h3 css={[TextMdRegular, LineHeight]}>일간 차트</h3>
          <span css={[TitleMdRegular, LineHeight]}>
            {dailyChartPosition.toLocaleString()}위
          </span>
        </div>
      </div>
    </>
  )
}

export default MelonInfo
