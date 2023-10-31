import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import TempGNB from '@/components/Profile/TempGNB'
import profileData from '@/data/profile.json'

const JingBurgerProfileDetail = () => {
  return (
    <>
      <TempGNB />
      <ProfileMemberDetail data={profileData.viichanIntroduction} />
    </>
  )
}

export default JingBurgerProfileDetail
