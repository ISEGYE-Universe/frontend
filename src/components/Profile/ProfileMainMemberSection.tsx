import ProfileStore from '@/store/Profile/ProfileStore'
import { css } from '@emotion/react'

interface ProfileMainMemberSectionProps {
  memberIndex: number
  x: number
  y: number
  width: number
  height: number
}

const ProfileMainMemberSection = ({
  memberIndex,
  x,
  y,
  width,
  height,
}: ProfileMainMemberSectionProps) => {
  const { setHoverDefault, setSwitchHoverMember } = ProfileStore()

  return (
    <rect
      fill="#fff"
      opacity="0"
      cursor="pointer"
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={() => {
        setSwitchHoverMember(memberIndex, true)
        setHoverDefault(false)
      }}
      onMouseLeave={() => {
        setSwitchHoverMember(memberIndex, false)
        setHoverDefault(true)
      }}
    ></rect>
  )
}

export default ProfileMainMemberSection
