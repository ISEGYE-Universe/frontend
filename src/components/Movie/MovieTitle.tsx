import { css } from '@emotion/react'
import { TitleSmRegular } from "@/styles/Font"

interface MovieTitelProps {
  title: string
}

const MovieTitle = ({title}: MovieTitelProps) => {
  return (
      <div css={css`
        ${TitleSmRegular} 
        margin-bottom: 20px;
      `}>{title}</div>
  )
}

export default MovieTitle