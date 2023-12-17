import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'

export const ProfileDetail = () => {
  return <ProfileMemberDetail data={profileData.jururuIntroduction} />
}

export default ProfileDetail
