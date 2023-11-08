import { css } from '@emotion/react'
import { TitleSmRegular } from '@/styles/Font'
import { MovieTitleProps } from './type/types'
import { SubTitle } from './style/Movie.Style'

const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <div
      css={css`
        ${TitleSmRegular}
        ${SubTitle}
      `}
    >
      {title}
    </div>
  )
}

export default MovieTitle
