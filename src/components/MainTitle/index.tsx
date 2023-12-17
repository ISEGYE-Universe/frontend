import { css } from '@emotion/react'
import { TitleLgRegular } from '@/styles/Font'

interface MainTitleProps {
  width: string
  title: string
}

const h2 = css`
  margin-bottom: 10px;
  text-align: center;
  ${TitleLgRegular}
`

const MainTitle = ({ title, width }: MainTitleProps) => {
  return (
    <>
      <h2 css={h2}>{title}</h2>
      <div
        css={css`
          width: ${width}px;
          height: 2px;
          margin: 0 auto 60px;
          background: linear-gradient(#f1436f 0%, #fbaa9f 100%);
        `}
      />
    </>
  )
}

export default MainTitle
