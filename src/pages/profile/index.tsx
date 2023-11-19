import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import TempLayout from '@/components/TempLayout/TempLayout'
import profileData from '@/data/profile.json'
import { css } from '@emotion/react'

const profileContainerStyle = css`
  position: relative;
  height: calc(100vh - 120px);
`

const Profile = () => {
  return (
    <TempLayout>
      <div css={profileContainerStyle}>
        <ProfileMainBg />
        <ProfileIntroductionBox
          mainTitle={profileData.mainIntroduction.mainTitle}
          description={profileData.mainIntroduction.description}
        />
      </div>
    </TempLayout>
  )
}

export default Profile
