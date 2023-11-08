import { css } from '@emotion/react'
import { TitleSmRegular } from '@/styles/Font'
import { MovieTitleProps } from './type/types'

const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <div
      css={css`
        ${TitleSmRegular}
        margin-bottom: 20px;
        color: #151515;
      `}
    >
      {title}
    </div>
  )
}

export default MovieTitle
