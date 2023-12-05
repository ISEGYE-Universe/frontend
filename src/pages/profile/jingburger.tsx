import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'

const ProfileDetail = () => {
  return <ProfileMemberDetail data={profileData.jingburgerIntroduction} />
}

export default ProfileDetail
