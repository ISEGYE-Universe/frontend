import ChartColor from '@/styles/ChartColor'
import {
  LineHeight,
  TextMdLight,
  TextSmLight,
  TextSmRegular,
  TitleSmRegular,
} from '@/styles/Font'
import { css } from '@emotion/react'
import Image from 'next/image'

const historyCardContainer = css`
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${ChartColor.borderGrey};
  border-radius: 14px;
  background-color: ${ChartColor.bgGrey};
  padding: 67px 0 46px 0;
`
const categoryContainer = css`
  min-width: 166px;
  background-color: ${ChartColor.isedolPink};
  color: ${ChartColor.textWhite};
  padding: 7px 10px 8px 10px;
  border-radius: 30px;
  text-align: center;
`

interface HistoryCardProps {
  thumbnail: string
  category: string
  title: string
  desc: string
  date: Date
}
export const HistoryCard = ({
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
        width={240}
        height={240}
        alt={`역대 기록 - ${title} 이미지`}
        css={{ marginBottom: '24px', objectFit: 'cover' }}
      />
      <h3
        css={[
          categoryContainer,
          TextSmRegular,
          LineHeight,
          { marginBottom: '10px' },
        ]}
      >
        {category}
      </h3>
      <h2 css={[TitleSmRegular, LineHeight, { marginBottom: '16px' }]}>
        {title}
      </h2>
      <span css={[TextMdLight, LineHeight, { marginBottom: '8px' }]}>
        {desc}
      </span>
      <span css={[TextSmLight, LineHeight, { color: '#777' }]}>
        {formattedDate}
      </span>
    </div>
  )
}
