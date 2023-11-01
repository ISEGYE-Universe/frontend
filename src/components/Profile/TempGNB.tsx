import { css } from '@emotion/react'

const TempGNB = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 120px;
        background-color: white;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 60px;
          background: linear-gradient(90deg, #f03c6b 0%, #fbaa9f 100%);
        `}
      ></div>
    </div>
  )
}

export default TempGNB
