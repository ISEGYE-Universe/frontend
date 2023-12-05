import ChartColor from '@/styles/ChartColor'
import {
  CaptionMdLight,
  LineHeight,
  TextMdLight,
  TextMdRegular,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

const weeklyAwardContainer = css`
  border-radius: 14px;
  background: ${ChartColor.bgGrey};
  border: 1px solid ${ChartColor.borderGrey};
  border-radius: 14px;
  width: 100%;
  height: 124px;
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
  min-width: 110px;
  min-height: 26px;
  border-radius: 30px;
  background: ${ChartColor.bgDarkGrey};
  color: ${ChartColor.textWhiteGrey};
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

export const WeeklyAward = ({
  position,
  voteNum,
  voteRatio,
  endDate,
}: WeeklyAwardProps) => {
  const [timeLeftResult, setTimeLeftResult] =
    useState<string>('00일 00:00:00 남음')
  useEffect(() => {
    // 남은 시간 계산
    const now = new Date().getTime()
    const futureDate = new Date(endDate).getTime()

    const timeleft = futureDate - now

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

    setTimeLeftResult(
      `${days}일 ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds} 남음`,
    )
  }, [])

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
          {timeLeftResult}
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
        />
      </div>
    </div>
  )
}
