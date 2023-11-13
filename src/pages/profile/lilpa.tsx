import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import TempLayout from '@/components/TempLayout/TempLayout'
import profileData from '@/data/profile.json'

function JingBurgerProfileDetail() {
  return (
    <TempLayout>
      <ProfileMemberDetail data={profileData.lilpaIntroduction} />
    </TempLayout>
  )
}

export default JingBurgerProfileDetail
