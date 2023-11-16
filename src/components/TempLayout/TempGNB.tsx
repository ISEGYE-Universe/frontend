import { css } from '@emotion/react'

const GNBContainerStyle = css`
  width: 100%;
  height: 120px;
  background-color: #fdfdfd;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`
const gradientStyle = css`
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%);
`
const TempGNB = () => {
  return (
    <header css={GNBContainerStyle}>
      <nav css={gradientStyle} />
    </header>
  )
}

export default TempGNB
