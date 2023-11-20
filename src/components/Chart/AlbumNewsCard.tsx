import ChartColor from '@/styles/ChartColor'
import { LineHeight, TextMdRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface AlbumNewsCardProps {
  title: string
}

const albumCardContainer = css`
  border-radius: 14px;
  padding: 14px 20px;
  background: ${ChartColor.bgGrey};
  border: 1px solid ${ChartColor.borderGrey};
`
export const AlbumNewsCard = (prop: AlbumNewsCardProps) => {
  const { title } = prop
  return (
    <li css={albumCardContainer}>
      <h3 css={[TextMdRegular, LineHeight]}>{title}</h3>
    </li>
  )
}
