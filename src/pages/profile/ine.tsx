import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import TempLayout from '@/components/TempLayout/TempLayout'
import profileData from '@/data/profile.json'

function IneProfileDetail() {
  return (
    <TempLayout>
      <ProfileMemberDetail data={profileData.ineIntroduction} />
    </TempLayout>
  )
}

export default IneProfileDetail
