import { ProfileIntroductionBox } from '@/components/Profile/ProfileIntroductionBox'
import { ProfileMainBg } from '@/components/Profile/ProfileMainBg'
import profileData from '@/data/profile.json'
import { css } from '@emotion/react'

const profileContainerStyle = css`
  position: relative;
  height: calc(100vh - 120px);
`

export const Profile = () => {
  return (
    <div css={profileContainerStyle}>
      <ProfileMainBg />
      <ProfileIntroductionBox
        mainTitle={profileData.mainIntroduction.mainTitle}
        description={profileData.mainIntroduction.description}
      />
    </div>
  )
}
