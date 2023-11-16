import ProfileMemberDetail from '@/components/Profile/ProfileMemberDetail'
import TempLayout from '@/components/TempLayout/TempLayout'
import profileData from '@/data/profile.json'

const JingBurgerProfileDetail = () => {
  return (
    <TempLayout>
      <ProfileMemberDetail data={profileData.viichanIntroduction} />
    </TempLayout>
  )
}

export default JingBurgerProfileDetail
