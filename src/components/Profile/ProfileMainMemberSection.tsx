import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'

interface ProfileMainMemberSectionProps {
  memberIndex: number
}

const ProfileMainMemberSection = ({
  memberIndex,
}: ProfileMainMemberSectionProps) => {
  const { setHoverDefault, setSwitchHoverMember } = ProfileStore()

  return (
    <div
      css={css`
        width: 16.7%;
        cursor: pointer;
      `}
      onMouseEnter={() => {
        setSwitchHoverMember(memberIndex, true)
        setHoverDefault(false)
      }}
      onMouseLeave={() => {
        setSwitchHoverMember(memberIndex, false)
        setHoverDefault(true)
      }}
    ></div>
  )
}

export default ProfileMainMemberSection
