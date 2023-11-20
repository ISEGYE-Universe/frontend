import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'

export const IneProfileDetail = () => {
  return <ProfileMemberDetail data={profileData.ineIntroduction} />
}
