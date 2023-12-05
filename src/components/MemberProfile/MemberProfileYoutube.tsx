import { css } from '@emotion/react'

const mainContainer = css`
  margin-bottom: 100px;
`
const titleContainer = css`
  height: 200px;
`
const youtubeContainer = css`
  display: flex;
  gap: 20px;
  height: 214px;
`
const MemberProfileYoutube = () => {
  return (
    <section css={mainContainer}>
      {/* 제목 */}
      <div css={titleContainer}></div>
      {/* 영상 */}
      <ul css={youtubeContainer}></ul>
    </section>
  )
}

export default MemberProfileYoutube
