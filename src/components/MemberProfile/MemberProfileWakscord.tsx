import { MemberProfileColor } from '@/styles/MemberProfileColor'
import { css } from '@emotion/react'

const mainContainer = css`
  width: 440px;
  height: 460px;
  border-radius: 40px;
  background: ${MemberProfileColor.wakscordBackgroundGrey};
`

const MemberProfileWakscord = () => {
  return <section css={mainContainer} />
}

export default MemberProfileWakscord
