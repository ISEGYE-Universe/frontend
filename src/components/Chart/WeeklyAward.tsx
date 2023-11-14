import {
  CaptionMdLight,
  LineHeight,
  TextMdLight,
  TextMdRegular,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'

const weeklyAwardContainer = css`
  border-radius: 14px;
  background: #f6f6f6;
  width: 100%;
  padding: 20px;
`
const flexRow = css`
  display: flex;
  flex-direction: row;
`
const flexCol = css`
  display: flex;
  flex-direction: column;
`
const alignCenter = css`
  align-items: center;
`
const spaceBetween = css`
  justify-content: space-between;
`
const leftTimeStyle = css`
  border-radius: 30px;
  background: #777;
  color: #fdfdfd;
  padding: 6px 12px 7px 13px;
`
const voteBarStyle = css`
  width: 100%;
  height: 10px;
  border-radius: 30px;
  background: #d9d9d9;
`
interface WeeklyAwardProps {
  position: number
  voteNum: number
  voteRatio: number
  endDate: Date
}

const WeeklyAward = ({
  position,
  voteNum,
  voteRatio,
  endDate,
}: WeeklyAwardProps) => {
  // 남은 시간 계산

  return (
    <div css={[weeklyAwardContainer, flexCol]}>
      <div
        css={[
          flexRow,
          spaceBetween,
          alignCenter,
          css`
            margin-bottom: 10px;
          `,
        ]}
      >
        {/* 투표, 남은시간 */}
        <h3 css={[TitleSmRegular, LineHeight]}>투표 {position}위</h3>
        <div css={[leftTimeStyle, CaptionMdLight, LineHeight]}>
          {/* 남은 시간 계산 로직으로 대체할 예정 */}
          3일 11:54:17 남음
        </div>
      </div>
      {/* 득표수, 비율 */}
      <div
        css={[
          flexRow,
          alignCenter,
          css`
            gap: 8px;
            margin-bottom: 20px;
          `,
        ]}
      >
        <span css={[TextMdRegular, LineHeight]}>
          {voteNum.toLocaleString()}표
        </span>
        <span css={[TextMdLight, LineHeight]}>({voteRatio}%)</span>
      </div>
      {/* 득표 바 */}
      <div css={voteBarStyle}>
        <div
          css={css`
            width: ${voteRatio}%;
            height: 100%;
            border-radius: 30px;
            background: linear-gradient(
              90deg,
              #f03c6b 0%,
              #fbaa9f 100%,
              #f5f5f5 100%
            );
          `}
        ></div>
      </div>
    </div>
  )
}

export default WeeklyAward
