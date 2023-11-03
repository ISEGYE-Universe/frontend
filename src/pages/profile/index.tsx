import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import TempGNB from '@/components/Profile/TempGNB'
import profileData from '@/data/profile.json'
import { css } from '@emotion/react'

const Profile = () => {
  return (
    <>
      {/* Temp: GNB 섹션 임시 대체 */}
      <TempGNB />
      <ProfileMainBg />
      <ProfileIntroductionBox
        mainTitle={profileData.mainIntroduction.mainTitle}
        description={profileData.mainIntroduction.description}
      ></ProfileIntroductionBox>
    </>
  )
}

export default Profile
