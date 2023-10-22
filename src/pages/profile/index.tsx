import ProfileIntroductionBox from '@/components/Profile/ProfileIntroductionBox'
import ProfileMainBg from '@/components/Profile/ProfileMainBg'

const Profile = () => {
  return (
    <>
      <ProfileMainBg />
      <ProfileIntroductionBox
        mainTitle="이세계아이돌"
        description={[
          { title: '데뷔일', desc: '2021년 11월 17일' },
          { title: '음원', desc: '[싱글 1집] RE : WIND' },
          { title: '', desc: '[싱글 2집] 겨울봄' },
          { title: '소속사', desc: 'WAK ENTERTAINMENT' },
        ]}
      ></ProfileIntroductionBox>{' '}
    </>
  )
}

export default Profile
