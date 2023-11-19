import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'

const IneProfileDetail = () => {
  return <ProfileMemberDetail data={profileData.ineIntroduction} />
}

export default IneProfileDetail
