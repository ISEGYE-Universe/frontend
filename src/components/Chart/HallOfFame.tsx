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
  background: #f6f6f6;
`
const musicInfoBox = css`
  padding: 43px 39px 25px 32px;
`
const chartBox = css`
  height: 270px;
  padding: 25px 32px 29px 0;
`
const flexRow = css`
  display: flex;
`
const flexCol = css`
  display: flex;
  flex-direction: column;
`
const fullWidth = css`
  width: 100%;
`
const highlightMessageBox = css`
  width: 100%;
  align-items: center;
  gap: 8.75px;
`
const highlightMessage = css`
  min-width: 423px;
  background: #000;
  border-radius: 15px;
  padding: 13px;
  color: #fff;
  text-align: center;
`
const gradientText = css`
  font-weight: 700;
  background: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%, #f5f5f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
          src="https://s3-alpha-sig.figma.com/img/f5d4/c2bf/256c2eb2deef85b14b3c7c730e35b749?Expires=1699833600&Signature=BI1MwzA-9eloAd23dYI5nPOYgCi3Vv5-9vWygtq8pIUz3MZ8cde0qCxHJWaaAqmyuS0hGv8b1bP3S2OoCNB29PTkSjN6hXzei06LBBdidupEJCs~ghB8aQluBbelFe-YZ1G2CdkiUXIg91HlzcDh71XIvv-XfetJMKcnvaEBNE80b6LpOcl49A6EXfYKLmziwPJabdx6GE1rFovQrGpDXQJYc19f363mgyxKrHu2ImDZ0OZYqYGd2u4pPz4F8x~pylqLZS10KZosHlV2UIvDgfpv-6q7iz5R4p4CvYqHAqKBX~Ca21jiKWX12JuNwAmRzpzifQPQY~bFRW0wdF1v3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={200}
          height={200}
          alt="최근 명예의 전당 음악 썸네일"
        />
        <div css={fullWidth}>
          {/* metadata */}
          <h2 css={[TitleSmRegular, LineHeight, { marginBottom: '13px' }]}>
            {musicTitle}
          </h2>
          <h3 css={[TextMdBold, LineHeight, { color: '#777' }]}>{artist}</h3>
          <span
            css={[
              TextSmRegular,
              LineHeight,
              {
                color: '#b0b0b0',
                display: 'inline-block',
                marginBottom: '15px',
              },
            ]}
          >
            {formattedDate}시 발매
          </span>
          {/* 하이라이트 메시지 list */}
          {/* 텍스트는 백엔드 소통 이후 변경 예정 */}
          <ul css={[flexCol, highlightMessageBox]}>
            <li css={[TextMdRegular, highlightMessage]}>
              11시간 50분만에 100만 스트리밍 달성 성공
            </li>
            <li css={[TextMdRegular, highlightMessage]}>
              24시간 <span css={[gradientText]}>1,825,900회</span> 스트리밍
              달성!
            </li>
          </ul>
        </div>
      </div>
      {/* 막대차트 영역 */}
      <div css={chartBox}></div>
    </div>
  )
}

export default HallOfFame
