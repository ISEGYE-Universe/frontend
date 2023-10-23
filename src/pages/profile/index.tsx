import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import profileData from '@/data/profile.json'

const Profile = () => {
  return (
    <>
      <ProfileMainBg />
      <ProfileIntroductionBox
        mainTitle={profileData.mainIntroduction.mainTitle}
        description={profileData.mainIntroduction.description}
      ></ProfileIntroductionBox>
    </>
  )
}

export default Profile
