import { TextMdRegular } from '@/styles/Font'
import { css } from '@emotion/react'

interface AlbumNewsCardProps {
  title: string
}

const albumCardContainer = css`
  border-radius: 14px;
  padding: 20px 14px;
  background: #f6f6f6;
`
const AlbumNewsCard = ({ title }: AlbumNewsCardProps) => {
  return (
    <li css={albumCardContainer}>
      <h3 css={TextMdRegular}>{title}</h3>
    </li>
  )
}

export default AlbumNewsCard
