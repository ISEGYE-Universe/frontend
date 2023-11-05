import {
  LineHeight,
  TextMdLight,
  TextSmLight,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'

const historyCardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface HistoryCardProps {
  thumbnail: string
  category: string
  title: string
  desc: string
  date: Date
}
const HistoryCard = ({
  thumbnail,
  category,
  title,
  desc,
  date,
}: HistoryCardProps) => {
  // 날짜 formatting
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedDate = `${year}.${formattedMonth}.${formattedDay}`

  return (
    <div css={historyCardContainer} className="embla__slide__img">
      <Image
        src={thumbnail}
        width={300}
        height={300}
        alt={`역대 기록 - ${title} 이미지`}
        css={{ marginBottom: '38px', objectFit: 'cover' }}
      />
      <h3 css={[TextMdLight, LineHeight, { marginBottom: '12px' }]}>
        {category}
      </h3>
      <h2 css={[TitleSmRegular, LineHeight, { marginBottom: '12px' }]}>
        {title}
      </h2>
      <span css={[TextMdLight, LineHeight, { marginBottom: '6px' }]}>
        {desc}
      </span>
      <span css={[TextSmLight, LineHeight, { color: '#777' }]}>
        {formattedDate}
      </span>
    </div>
  )
}

export default HistoryCard
