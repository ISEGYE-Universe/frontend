import ProfileMainBg from '@/components/Profile/ProfileMainBg'
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
      {/* <ProfileMainDescription /> */}
    </div>
  )
}

export default Profile
