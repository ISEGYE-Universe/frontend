import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import TempGNB from '@/components/Profile/TempGNB'
import profileData from '@/data/profile.json'

const IneProfileDetail = () => {
  return (
    <>
      <TempGNB />
      <ProfileMemberDetail data={profileData.ineIntroduction} />
    </>
  )
}

export default IneProfileDetail
