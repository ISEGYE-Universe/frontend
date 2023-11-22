import { css } from '@emotion/react'
import memberProfileData from '@/data/member-profile.json'

interface MemberProfileTopBannerProp {
  memberName: IsedolMember
}

const MemberProfileTopBanner = (prop: MemberProfileTopBannerProp) => {
  const { memberName } = prop

  const topBannerContainer = css`
    height: 388px;
    background-repeat: no-repeat;
    background-position: center top;
    margin-bottom: 32px;
  `

  return (
    <section
      css={[
        css`
          background: url('${memberProfileData[memberName]?.topBannerImage}');
        `,
        topBannerContainer,
      ]}
    />
  )
}

export default MemberProfileTopBanner
