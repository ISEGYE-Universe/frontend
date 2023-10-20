import ProfileMainBg from '@/components/Profile/ProfileMainBg'
import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'

const bgStyle = css`
  width: 100%;
  height: 100vh;
`

const Profile = () => {
  const { setHoverDefault, setHoverJururu } = ProfileStore()
  return (
    // temp wrapper
    <div css={bgStyle}>
      <ProfileMainBg />
      <div
        css={css`
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
        `}
      >
        <div
          css={css`
            width: 16.7%;
          `}
          onMouseEnter={() => {
            setHoverJururu(true)
            setHoverDefault(false)
          }}
          onMouseLeave={() => {
            setHoverJururu(false)
            setHoverDefault(true)
          }}
        ></div>
        <div
          css={css`
            width: 16.7%;
          `}
        ></div>
        <div
          css={css`
            width: 16.7%;
          `}
        ></div>
        <div
          css={css`
            width: 16.7%;
          `}
        ></div>
        <div
          css={css`
            width: 16.7%;
          `}
        ></div>
        <div
          css={css`
            width: 16.7%;
          `}
        ></div>
      </div>
    </div>
  )
}

export default Profile
