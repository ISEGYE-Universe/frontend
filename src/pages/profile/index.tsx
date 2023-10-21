import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import ProfileMainMemberSection from '@/components/Profile/ProfileMainMemberSection'
import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'

const Profile = () => {
  return (
    // temp wrapper
    <div
      css={css`
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
      `}
    >
      <ProfileMainBg />
      <div
        css={css`
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
        `}
      >
        <ProfileMainMemberSection memberIndex={0} />
        <ProfileMainMemberSection memberIndex={1} />
        <ProfileMainMemberSection memberIndex={2} />
        <ProfileMainMemberSection memberIndex={3} />
        <ProfileMainMemberSection memberIndex={4} />
        <ProfileMainMemberSection memberIndex={5} />
      </div>
    </div>
  )
}

export default Profile
