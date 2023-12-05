import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

const mainContainer = css`
  width: 770px;
  height: 460px;
  border-radius: 40px;
  border: 2px solid ${MemberProfileColor.coverBorderGrey};
  background: ${MemberProfileColor.coverBackgroundGrey};
  padding: 20px 40px 20px 32px;
`

const MemberProfileCoverSong = () => {
  return <section css={mainContainer} />
}

export default MemberProfileCoverSong
