import { LineHeight, TextMdRegular, TitleSmRegular } from '@/styles/Font'
import { css } from '@emotion/react'
import ChartColor from '@/styles/ChartColor'
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
  background: ${ChartColor.bgGrey};
  padding: 35px 20px;
  border: 1px solid ${ChartColor.borderGrey};
  height: 124px;
`

interface MelonInfoProps {
  musicTitle: string
  dailyListenerNum: number
  dailyChartPosition: number
}

/**
 * 멜론 정보 컴포넌트
 * @param musicTitle `string` 곡명
 * @param dailyListenerNum `number` 일간 감상자 수
 * @param dailyChartPosition `number` 곡명
 * @author 민타이
 */
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
              min-width: 200px;
            `,
          ]}
        >
          <h3 css={[TextMdRegular, LineHeight]}>일간 감상자</h3>
          <span css={[TitleSmRegular, LineHeight]}>
            {/* comma 처리를 위해 toLocaleString() 이용 */}
            {dailyListenerNum.toLocaleString()}명
          </span>
        </div>
        <div
          css={[
            melonInfoCard,
            css`
              min-width: 200px;
            `,
          ]}
        >
          <h3 css={[TextMdRegular, LineHeight]}>일간 차트</h3>
          <span css={[TitleSmRegular, LineHeight]}>
            {dailyChartPosition.toLocaleString()}위
          </span>
        </div>
      </div>
    </>
  )
}

export default MelonInfo
