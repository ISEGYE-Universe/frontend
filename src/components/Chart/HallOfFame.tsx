import { ChartColor } from '@/styles/ChartColor'
import {
  LineHeight,
  TextMdBold,
  TextMdRegular,
  TextSmRegular,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'

const mainBg = css`
  width: 100%;
  border-radius: 14px;
  background: ${ChartColor.bgGrey};
  border: 1px solid ${ChartColor.borderGrey};
`
const musicInfoBox = css`
  padding: 30px 40px;
`
const flexRow = css`
  display: flex;
`
const flexCol = css`
  display: flex;
  flex-direction: column;
`
const spaceBetween = css`
  justify-content: space-between;
`
const fullWidth = css`
  width: 100%;
`
const highlightMessageBox = css`
  width: 100%;
  align-items: center;
  gap: 10px;
`
const highlightMessage = css`
  width: 100%;
  background: #000;
  border-radius: 15px;
  padding: 11px;
  color: ${ChartColor.textWhite};
  text-align: center;
`
const highlightText = css`
  color: ${ChartColor.isedolPink};
`

interface HallOfFameProps {
  musicTitle: string
  artist: string
  releasedAt: Date
}

const HallOfFame = ({ musicTitle, artist, releasedAt }: HallOfFameProps) => {
  // 날짜 formatting
  const year = releasedAt.getFullYear()
  const month = releasedAt.getMonth() + 1
  const day = releasedAt.getDate()
  const hours = releasedAt.getHours()

  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedHours = hours < 10 ? `0${hours}` : hours

  const formattedDate = `${year}.${formattedMonth}.${formattedDay} ${formattedHours}`

  return (
    <div css={mainBg}>
      {/* 음악 정보 영역 */}
      <div css={[musicInfoBox, flexRow, { gap: '24px' }]}>
        <Image
          src="/images/chart/album-art-isegye-festival.jpg"
          width={190}
          height={190}
          alt="최근 명예의 전당 음악 썸네일"
        />
        <div css={[fullWidth, flexCol, spaceBetween]}>
          <div css={[flexCol, { gap: '10px' }]}>
            {/* metadata */}
            <h2 css={[TitleSmRegular, LineHeight]}>{musicTitle}</h2>
            <h3 css={[TextMdBold, LineHeight, { color: ChartColor.textGrey }]}>
              {artist}
            </h3>
            <span
              css={[
                TextSmRegular,
                LineHeight,
                {
                  color: '#b0b0b0',
                  display: 'inline-block',
                },
              ]}
            >
              {formattedDate}시 발매
            </span>
          </div>
          {/* 하이라이트 메시지 list */}
          {/* 텍스트는 백엔드 소통 이후 변경 예정 */}
          <ul css={[flexCol, highlightMessageBox]}>
            <li css={[TextMdRegular, LineHeight, highlightMessage]}>
              <span css={[highlightText]}>11시간 50분</span>만에 100만 스트리밍
              달성 성공
            </li>
            <li css={[TextMdRegular, LineHeight, highlightMessage]}>
              24시간 <span css={[highlightText]}>1,825,900회</span> 스트리밍
              달성!
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HallOfFame
