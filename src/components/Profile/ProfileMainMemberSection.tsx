import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'

interface ProfileMainMemberSectionProps {
  memberIndex: number
}

const ProfileMainMemberSection = ({
  memberIndex,
}: ProfileMainMemberSectionProps) => {
  const { setHoverDefault, setSwitchHoverMember: setHoverMember } =
    ProfileStore()

  return (
    <div
      css={css`
        width: 16.7%;
        cursor: pointer;
      `}
      onMouseEnter={() => {
        setHoverMember(memberIndex, true)
        setHoverDefault(false)
      }}
      onMouseLeave={() => {
        setHoverMember(memberIndex, false)
        setHoverDefault(true)
      }}
    ></div>
  )
}

export default ProfileMainMemberSection
