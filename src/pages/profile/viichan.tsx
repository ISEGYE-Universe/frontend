import { ProfileMemberDetail } from '@/components/Profile/ProfileMemberDetail'
import profileData from '@/data/profile.json'

export const JingBurgerProfileDetail = () => {
  return <ProfileMemberDetail data={profileData.viichanIntroduction} />
}
